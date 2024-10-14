# Classroom Management System

Este projeto foi desenvolvido como parte das atividades da disciplina **Desenvolvimento Web III** do curso de **Bacharelado em Sistemas de Informação** no **Instituto Federal de Educação, Ciência e Tecnologia de São Paulo - Campus Votuporanga**. O objetivo da atividade é o estudo e implementação de **Template Engines** no **Node.js**, utilizando as engines **EJS** e **Nunjucks**.

### Instituição
**INSTITUTO FEDERAL DE EDUCAÇÃO, CIÊNCIA E TECNOLOGIA DE SÃO PAULO - CAMPUS VOTUPORANGA**

### Curso
**Bacharelado em Sistemas de Informação**

### Disciplina
**Desenvolvimento Web III - 6º Semestre - Turma A**

### Professor
**Dr. Evandro Jardini**

---

## Descrição do Projeto

O **Classroom Management System** é um sistema simples de gerenciamento de salas de aula, implementado em **Node.js** com o uso das template engines **EJS** e **Nunjucks**. O sistema possui duas páginas HTML principais:

- **Página Inicial (index.html)**: Página principal que será acessada quando o usuário acessar a rota principal do servidor. Ela contém um título e um link para a página de manutenção de salas de aula.
  
- **Página de Manutenção de Salas (manutSalaDeAula.html)**: Exibe uma tabela com as informações das salas de aula cadastradas, tais como ID, descrição, localização e capacidade.

### Requisitos Técnicos

- **Node.js**
- **Express**
- **EJS**
- **Nunjucks**
- **Bootstrap**

### Estrutura do Projeto

O projeto é dividido em dois servidores diferentes, cada um utilizando um template engine específico:

1. **srvFrontEJS/**: Servidor utilizando o template engine **EJS**.
2. **srvFrontNJK/**: Servidor utilizando o template engine **Nunjucks**.

Cada servidor possui sua própria estrutura de arquivos e templates. Ambos os servidores expõem as seguintes rotas:

- **/**: Rota principal que carrega a página inicial (index).
- **/manutSalaDeAula**: Rota para a página de manutenção de salas de aula, exibindo a tabela com as salas cadastradas.

## Como Executar o Projeto

### Requisitos:
- **Node.js** instalado.

### Passos:

1. Clone o repositório para o seu ambiente local:
   ```bash
   git clone [link-do-repositorio]
   cd projeto
   ```

2. Acesse o diretório do servidor EJS e instale as dependências:
   ```bash
   cd srvFrontEJS
   npm install
   ```

3. Execute o servidor EJS:
   ```bash
   node server.js
   ```

4. Acesse a aplicação no navegador:
   ```
   http://localhost:25000
   ```

5. Para o servidor Nunjucks, siga os mesmos passos:

   ```bash
   cd ../srvFrontNJK
   npm install
   node server.js
   ```

6. Acesse o servidor Nunjucks no navegador:
   ```
   http://localhost:26000
   ```

## Estrutura de Pastas

```
projeto/
│
├── srvFrontEJS/
│   ├── public/               # Arquivos estáticos (CSS, JS, imagens)
│   ├── views/                # Templates EJS
│   │   ├── index.ejs         # Página inicial
│   │   ├── manutSalaDeAula.ejs # Página de manutenção de salas
│   └── server.js             # Servidor Node.js usando Express e EJS
│
├── srvFrontNJK/
│   ├── public/               # Arquivos estáticos (CSS, JS, imagens)
│   ├── views/                # Templates Nunjucks
│   │   ├── index.html        # Página inicial
│   │   ├── manutSalaDeAula.html # Página de manutenção de salas
│   └── server.js             # Servidor Node.js usando Express e Nunjucks
│
└── README.md                 # Documentação do projeto
```

## Funcionalidades Implementadas

- **Página Inicial**: Exibe um título e um link para acessar a página de manutenção de salas de aula.
- **Página de Manutenção**: Apresenta uma tabela com as salas cadastradas, contendo os campos:
  - ID da Sala
  - Descrição da Sala
  - Localização da Sala
  - Capacidade da Sala

## Dependências

- **Express**: Framework para Node.js usado para criar os servidores.
- **EJS**: Template engine usada no servidor **srvFrontEJS**.
- **Nunjucks**: Template engine usada no servidor **srvFrontNJK**.
- **Bootstrap**: Framework CSS para estilização das páginas HTML.

## Observações

- Esta atividade não requer autenticação (login) ou proteção de rotas.
- Não há necessidade de operações de inserção, atualização ou exclusão no gerenciamento de salas de aula, apenas exibição.

## Conclusão

Este projeto demonstrou a integração de **Node.js** com template engines para renderização dinâmica de páginas web, proporcionando a prática de conceitos importantes para o desenvolvimento web moderno.