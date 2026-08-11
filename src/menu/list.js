import { isCancel, select, log } from "@clack/prompts";
import chalk from "chalk";
import { manageTaskList } from '../manager/tasks-list.js'
import { formatedTask, changeName, changeStatus, deleteTask } from './functions/functions.js'

export async function listTasks() { // Lista todas as tarefas
    let tasks = manageTaskList.getList() // Pega a lista das tarefas já existentes

    let selectTask = await select({ // Permite a seleção de alguma tarefas
        message: 'Selecione alguma tarefa:',
        options: [
            ...tasks.map(task => ({
                value: task.taskName,
                label: formatedTask.taskList(task)
            })),
            { value: 'mainMenu', label: 'Menu principal', hint: 'Voltar ao menu principal' }
        ]
    })

    if (isCancel(selectTask) || selectTask === 'mainMenu') {
        return
    }

    await showTaskPanel(tasks.find(task => task.taskName === selectTask)) // Mostra o painel de funções da tarefa
    await listTasks()
}

async function showTaskPanel(task) { // Mostra o painel de opções da tarefa selecionada
    log.info(`${chalk.underline('SELECIONADA')} - ${formatedTask.task(task)}`)
    
    let option = await select({
        message: `O que deseja fazer na tarefa:`,
        options: [
            { value: 'changeName', label: 'Alterar o nome' },
            { value: 'changeStatus', label: 'Alterar o status' },
            { value: 'delete', label: 'Deletar tarefa' },
            { value: 'back', label: 'Voltar', hint: 'Voltar a lista de tarefas' }
        ]
    })

    switch (option) {
        case 'changeName':
            task.taskName = await changeName(task)
            break;
        case 'changeStatus':
            task.status = await changeStatus(task)
            break;
        case 'delete':
            if(await deleteTask(task)) {
                return;
            }
            break
        default:
            return;
    }
    await showTaskPanel(task)
}