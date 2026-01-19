# Orderly Backend API 📝

API RESTful desenvolvida em **JavaScript (Node.js)** para gerenciamento de clientes, produtos, pedidos e transações, com autenticação via JWT e arquitetura organizada seguindo boas práticas de backend.
# Stack Tecnológica 🧰
🔸 **Node.js** – ambiente de execução JavaScript no servidor
🔸 **Express** – framework minimalista para criação de APIs RESTful
🔸 **Prisma ORM** – mapeamento objeto-relacional
🔸 **PostgreSQL** – banco de dados relacional para persistência dos dados
🔸 **JWT** – autenticação segura baseada em tokens
🔸 **bcrypt** – biblioteca para criptografia de senhas
🔸 **dotenv** – gerenciamento de variáveis de ambiente
🔸 **cors** – controle de acesso entre diferentes origens 
🔸 **Jest** – framework de testes automatizados
🔸 **Supertest** – testes de requisições HTTP em APIs
🔸 **Thunder Client** – testes de requisições HTTP
🔸 **Git & GitHub** – controle de versão e hospedagem do repositório

## 📌 Funcionalidades da API

_A API permite o gerenciamento de clientes, oferecendo as seguintes operações:_

- ✅ Criar cliente (POST)
- 📄 Listar todos os clientes (GET)
- 🔍 Buscar cliente por ID (GET)
- ✏️ Atualizar cliente (PUT)
- 🗑️ Deletar cliente (DELETE)
❕Todas as operações seguem os princípios do **CRUD (Create, Read, Update e Delete)**.

## ⚙️ Configuração do Ambiente

_Pré-requisitos:_
🔸 Node.js (v18+)
🔸 PostgreSQL
🔸 Git

### 🔹 Clonar o repositório 🔹
```bash
git clone https://github.com/Paloma3036/orderly-backend.git
cd orderly-backend
```
### 🔹 Instalar as dependências 🔹
```bash
npm install
```
### 🔹 Configurar variáveis de ambiente 🔹
_Crie um arquivo `.env` na raiz do projeto:_
```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/orderly"
```
> ⚠️ Ajuste o usuário, senha e nome do banco conforme sua configuração local.
### 🔹 Rodar as migrações do Prisma 🔹
```bash
npx prisma migrate dev
```
### 🔹 Iniciar o servidor 🔹
```bash
node src/index.js
```
_O servidor estará disponível em:_
```
http://localhost:3000
```

## 🔎 Rotas da API

_Criar client 👩‍💻_
**POST** `/clients`
```json
{
  "name": "Maria",
  "email": "maria@email.com"
}
```
_Listar clientes 📄_
**GET** `/clients`
_Buscar cliente por ID 🔍_
**GET** `/clients/{id}`
_Atualizar cliente ✏️_
**PUT** `/clients/{id}`
```json
{
  "name": "Maria Silva",
  "email": "maria.silva@email.com"
}
```
_Deletar cliente 🗑️_
**DELETE** `/clients/{id}`

## 📁 Estrutura do Projeto
orderly-backend/
├── src/
│ ├── app.js
│ ├── index.js
│ ├── lib/
│ │ └── prisma.js
│ ├── middlewares/
│ │ ├── auth.middleware.js
│ │ ├── isAdmin.middleware.js
│ │ └── role.middleware.js
│ └── routes/
│ ├── user.routes.js
│ ├── client.routes.js
│ └── product.routes.js

## 🔐 Autenticação e Autorização
_A API utiliza **JWT (JSON Web Token)** para autenticação dos usuários._

### 🔑 Autenticação
- Login com geração de token JWT
- Token enviado no header `Authorization: Bearer <token>`
- Middleware de autenticação (`auth.middleware.js`) para proteção das rotas
### 🛡️ Autorização
- Controle de permissões baseado em **roles**
- Roles disponíveis:
  - `ADMIN`
  - `USER`
- Middleware para restrição de acesso a rotas sensíveis



