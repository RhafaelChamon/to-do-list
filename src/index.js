import chalk from "chalk";
import { intro, outro, select } from "@clack/prompts";
import { createNewTask } from './menu/create.js';
import { listTasks } from './menu/list.js';

intro(`📋 ${chalk.bgGreen("TO-DO PROGRAM")}`)

while (true) {
    let endProgram;
    
    let option = await select({
        message: 'Selecione o que deseja fazer',
        options: [
            { value: 'create', label: 'Criar uma nova tarefa' },
            { value: 'list', label: 'Listar tarefas' },
            { value: 'exit', label: 'Sair do programa', hint: 'Ao selecionar essa opção, o programa será finalizado.' }
        ]
    })

    switch (option) {
        case 'create':
            await createNewTask()
            break;
        case 'list':
            await listTasks()
            break;
        default:
            endProgram = true
            break;
    }

    if (endProgram) break
}

outro('Fim do programa')