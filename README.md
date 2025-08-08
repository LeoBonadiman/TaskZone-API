# TaskZone API

Uma API simples para gerenciamento de tarefas (CRUD completo), desenvolvida para praticar e melhorar meus conhecimentos em **Node.js**, **Express** e **MongoDB Atlas**.

Este projeto foi criado como parte do meu portfólio, mostrando que consigo criar endpoints, conectar com banco de dados na nuvem e testar rotas com Insomnia.

---

## 🚀 Tecnologias usadas

- Node.js
- Express
- MongoDB Atlas (Mongoose)
- Dotenv
- Nodemon (ambiente de desenvolvimento)
- Insomnia (testes de API)

---

## 📦 Como instalar e rodar o projeto

### 1. Clonar o repositório
```bash
git clone https://github.com/seu-usuario/taskzone-api.git
```

### 2. Entrar na pasta do projeto
```bash
cd taskzone-api
```

### 3. Instalar as dependências
```bash
npm install
```

### 4. Configurar variáveis de ambiente
Crie um arquivo `.env` na raiz com:

```env
PORT=5000
MONGO_URI=sua_string_de_conexao_do_mongodb_atlas
```

> No meu caso, usei o MongoDB Atlas, que é gratuito e fácil de configurar.

### 5. Rodar o projeto em modo desenvolvimento
```bash
npm run dev
```

Se tudo der certo, vai aparecer no terminal:
```
🟢 Conectado ao MongoDB
🚀 Servidor rodando na porta 5000
```

---

## 📌 Rotas disponíveis

### Criar tarefa
`POST /api/tasks`  
**Body (JSON):**
```json
{
  "title": "Estudar Node.js",
  "description": "Criar minha primeira API com MongoDB Atlas"
}
```

### Listar tarefas
`GET /api/tasks`  
Parâmetros opcionais:
- `q` → busca por título  
- `completed` → filtra por concluídas (`true` ou `false`)  
- `sort` e `order` → ordenação

### Atualizar tarefa
`PUT /api/tasks/:id`  
**Body (JSON):**
```json
{
  "title": "Novo título",
  "description": "Nova descrição",
  "completed": true
}
```

### Deletar tarefa
`DELETE /api/tasks/:id`

---

## 🗒️ Observações
- Projeto focado em prática e aprendizado.
- O código pode ser melhorado, mas já cumpre o objetivo de mostrar que sei criar e conectar uma API a um banco de dados.
- Testes feitos no **Insomnia**.

---

## ✨ Próximos passos
- Adicionar autenticação
- Criar interface frontend para consumir a API
- Melhorar validação dos campos
