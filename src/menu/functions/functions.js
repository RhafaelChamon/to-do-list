import chalk from "chalk";
import { manageTaskList } from '../../manager/tasks-list.js'
import { isCancel, select, log, text, confirm } from "@clack/prompts";

function formatStatus(status) { // Retornará a cor de acordo com o status da terefa
    switch (status) {
        case 'concluída':
            return chalk.bgGreen(status);
        case 'em andamento':
            return chalk.bgHex('#FFA500')(status);
        case 'cancelada':
            return chalk.bgRed(status);
        default:
            return chalk(status);
    }
}

export const formatedTask = { // Formata a tarefa
    task(task) { // Formato normal
        return `${task.taskName} - ${formatStatus(task.status)} \nCriada em: ${task.date.toLocaleDateString('pt-BR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        })} - ${task.date.toLocaleTimeString('pt-BR', {
            hour: 'numeric',
            minute: '2-digit'
        })}`
    },
    taskList(task) { // Formato para lista
        return `${formatStatus(task.status)} - ${chalk.underline(task.taskName)}`
    }
}

export async function changeName(task) { // Altera o nome da tarefa recebida
    let inputNewName = await text({
        message: "Digite o novo nome da tarefa:",
        placeholder: "Ex: Estudar JavaScript...",
        validate: (value) => {
            if (!value || !value.trim()) return 'O valor não pode estar vazio ou conter apenas espaços.'
        }
    })

    if (isCancel(inputNewName)) return task.taskName

    // Faz a troca de nome e salva
    let taskList = manageTaskList.getList() 
    taskList.find(item => {
        if (item.taskName === task.taskName) item.taskName = inputNewName
    })
    manageTaskList.saveList(taskList)

    return inputNewName
}

export async function changeStatus(task) { // Altera o status da tarefa recebida
    do {
        let newStatus = await select({
            message: 'Selecione o status',
            options: [
                { value: 'concluída', label: 'concluída' },
                { value: 'em andamento', label: 'em andamento' },
                { value: 'cancelada', label: 'cancelada' }
            ]
        })

        if (isCancel(newStatus)) return task.status

        // Faz a troca de status e salva
        let taskList = manageTaskList.getList() 
        taskList.find(item => {
            if (item.taskName === task.taskName) item.status = newStatus
        })
        manageTaskList.saveList(taskList)
        
        return newStatus
    } while (true);
}

export async function deleteTask(task) { // Deleta a terefa recebida
    let confirmDelete = await confirm({ // Comfirmação primeiro
        message: `Deseja realmente ${chalk.red('deletar')} a tarefa "${task.taskName}"? ${chalk.underline('(Essa ação não poderá ser revertida.)')}`
    })
    
    if (isCancel(confirmDelete)) return false
    
    if (confirmDelete) { // Deleta a tarefa e salva
        const taskList = manageTaskList.getList()
        const listToSave = taskList.filter(item => item.taskName !== task.taskName)
        manageTaskList.saveList(listToSave)
    }

    return confirmDelete
}