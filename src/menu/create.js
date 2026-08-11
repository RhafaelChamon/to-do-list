import { isCancel, text, log } from "@clack/prompts";
import { manageTaskList } from '../manager/tasks-list.js'
import { formatedTask } from './functions/functions.js'

class Task {
    constructor(taskName) {
        this.taskName = taskName;
        this.status = 'em andamento';
        this.date = new Date()
    }
}

export async function createNewTask() { // Cria uma nova tarefa
    let tasks = manageTaskList.getList() // Pega a lista das tarefas já existentes

    let inputTaskName = await text({ // Cria a tarefa e verifica se é válida
        message: "Digite o nome da tarefa:",
        placeholder: "Ex: Estudar JavaScript...",
        validate: (value) => {
            if (!value || !value.trim()) {
                return 'O valor não pode estar vazio ou conter apenas espaços.'
            }
        }
    })

    if (isCancel(inputTaskName)) {
        return
    }

    inputTaskName = inputTaskName.trim()

    // Adiciona a tarefa na lista
    if (!tasks.some(task => task.taskName.toUpperCase() === inputTaskName.toUpperCase())) { 
        tasks.push(new Task(inputTaskName))

        log.success(`Tarefa "${inputTaskName}" adicionada com sucesso!`)
    } else {
        log.warn(`Tarefa "${inputTaskName}" já existe:`);
        
        const taskFound = tasks.find(task => task.taskName.toUpperCase() === inputTaskName.toUpperCase())
        log.message(formatedTask.task(taskFound))
    }

    manageTaskList.saveList(tasks) // Salva a lista de tarefas
}