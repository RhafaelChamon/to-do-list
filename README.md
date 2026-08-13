# To-do List  
Aplicação em JavaScript e Node.js, de um To-do List! A Aplicação se baseia em uma lista de tarefas, onde você pode criar, listar, alterar o nome, status, ou deletar tarefas. Além disso o programa já salva em um arquivo JSON cada tarefa como um objeto, com nome, status, data e horário de criação. 📋✅

Utilizei também bibliotecas como chalk e @clack/prompts, para criar uma interação melhor com o usuário com prompts e cores no terminal.

**💡 Conceitos e tecnologias aplicadas:**

- Programação Assíncrona: Uso de async e await para gerenciar a interação no terminal.
- Modularização: Organização do código usando ES Modules (import e export).
- Orientação a Objetos: Uso de classes para estruturar e padronizar as tarefas.
- Manipulação de Arrays: Métodos funcionais como .map(), .find(), .filter() e .some().
- Recursividade: Chamada de funções do menu para manter o fluxo do programa ativo.
- Persistência de Dados: Leitura e escrita de arquivos locais em formato JSON com o modulo node:fs.
- Manipulação do Sistema de Arquivos: Resolução de caminhos com node:path.
- Tratamento de Datas: Manipulação de objetos Date e formatação no padrão brasileiro.
- Interface de Linha de Comando (CLI): Construção de menus interativos com @clack/prompts e estilização de texto com chalk.
