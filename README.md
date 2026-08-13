# To-do List  
Aplicação em JavaScript e Node.js, de um To-do List! A Aplicação se baseia em uma lista de tarefas, onde você pode criar, listar, alterar o nome, status, ou deletar tarefas. Além disso o programa já salva em um arquivo JSON cada tarefa como um objeto, com nome, status, data e horário de criação. 📋✅

Utilizei também bibliotecas como chalk e @clack/prompts, para criar interação melhor com o usuário com prompts e cores no terminal.

**💡 Conceitos e tecnologias aplicadas:**

- Programacao Assincrona: Uso de async e await para gerenciar a interacao no terminal.
- Modularizacao: Organizacao do codigo usando ES Modules (import e export).
- Orientacao a Objetos: Uso de classes para estruturar e padronizar as tarefas.
- Manipulacao de Arrays: Metodos funcionais como .map(), .find(), .filter() e .some().
- Recursividade: Chamada de funcoes do menu para manter o fluxo do programa ativo.
- Persistencia de Dados: Leitura e escrita de arquivos locais em formato JSON com o modulo node:fs.
- Manipulacao do Sistema de Arquivos: Resolucao de caminhos com node:path.
- Tratamento de Datas: Manipulacao de objetos Date e formatacao no padrao brasileiro.
- Interface de Linha de Comando (CLI): Construcao de menus interativos com @clack/prompts e estilizacao de texto com chalk.
