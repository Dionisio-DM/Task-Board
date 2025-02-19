# Task Board App 🚀

Um aplicativo de gerenciamento de tarefas intuitivo com validação de formulário e persistência de dados.

## Funcionalidades ✨

- **Criação de Tarefas**
  - Título e descrição
  - Prioridade (Baixa, Média, Alta)
  - Status (Para Fazer, Em Progresso, Concluída)
- **Organização Visual**
  - 3 colunas para diferentes estágios
  - Contador de tarefas por status
  - Badges coloridos para prioridade
- **Gestão de Tarefas**
  - Progressão entre estados
  - Exclusão de tarefas
  - Atualização em tempo real
- **Validação Robusta**
  - Formulários validados com Zod
  - Tipagem estática com TypeScript

## Tecnologias 🛠️

- **Frontend**
  - React + Vite
  - Radix UI (Componentes acessíveis)
  - Zod (Validação de esquemas)
  - Context API (Gerenciamento de estado)
- **Type Safety**
  - TypeScript

## Como Executar ▶️

1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/task-board.git
```

2. Instale as dependências

```bash
npm install
```

3. Crie um arquivo .env.local e inicie a variável da base da URL (o padrão do json-server é http://localhost:3000)

```bash
VITE_API_URL=http://localhost:3000
```

4. Inicie o json-server

```bash
npm run json-server
```

5. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

## Licença

[MIT](https://choosealicense.com/licenses/mit/)
