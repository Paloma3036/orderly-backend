# Orderly Backend API 📝

API RESTful desenvolvida em **JavaScript (Node.js)** para gerenciamento de clientes, produtos, pedidos e transações, com autenticação via JWT e arquitetura organizada seguindo boas práticas de backend.

Este projeto faz parte do meu portfólio e representa a evolução de uma API básica para um nível **intermediário**, com foco em organização, segurança e escalabilidade.

# Stack Tecnológica 🧰

* **Node.js** – ambiente de execução JavaScript no servidor
* **Express** – framework minimalista para criação de APIs RESTful
* **Prisma ORM** – mapeamento objeto-relacional
* **PostgreSQL** – banco de dados relacional para persistência dos dados
* **JWT** – autenticação segura baseada em tokens
* **bcrypt** – biblioteca para criptografia de senhas
* **dotenv** – gerenciamento de variáveis de ambiente
* **cors** – controle de acesso entre diferentes origens 
* **Jest** – framework de testes automatizados
* **Supertest** – testes de requisições HTTP em APIs
* **Thunder Client** – testes de requisições HTTP
* **Git & GitHub** – controle de versão e hospedagem do repositório

## 📌 Funcionalidades da API

_A API permite o gerenciamento de clientes, oferecendo as seguintes operações:_

- ✅ Criar cliente (POST)
- 📄 Listar todos os clientes (GET)
- 🔍 Buscar cliente por ID (GET)
- ✏️ Atualizar cliente (PUT)
- 🗑️ Deletar cliente (DELETE)

Todas as operações seguem os princípios do **CRUD (Create, Read, Update e Delete)**.

## ⚙️ Configuração do Ambiente

_Pré-requisitos:_
- Node.js (v18+)
- PostgreSQL
- Git

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

Crie um arquivo `.env` na raiz do projeto:

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

O servidor estará disponível em:

```
http://localhost:3000
```


## 🔎 Rotas da API

### ➕ Criar cliente

**POST** `/clients`

```json
{
  "name": "Maria",
  "email": "maria@email.com"
}
```


### 📄 Listar clientes

**GET** `/clients`


### 🔍 Buscar cliente por ID

**GET** `/clients/{id}`


### ✏️ Atualizar cliente

**PUT** `/clients/{id}`

```json
{
  "name": "Maria Silva",
  "email": "maria.silva@email.com"
}
```


### 🗑️ Deletar cliente

**DELETE** `/clients/{id}`


## 🧠 Aprendizados com o Projeto

* Criação de uma API REST do zero
* Integração do Prisma com PostgreSQL
* Uso de migrations e schema
* Boas práticas de rotas HTTP
* Tratamento de erros no backend
* Versionamento e publicação no GitHub

## 📁 Estrutura do Projeto

```bash
orderly-backend/
├── src/
│   ├── app.js
│   ├── index.js
│   ├── lib/
│   │   └── prisma.js
│   ├── middlewares/
│   │   ├── auth.middleware.js
│   │   ├── isAdmin.middleware.js
│   │   └── role.middleware.js
│   └── routes/
│       ├── user.routes.js
│       ├── client.routes.js
│       └── product.routes.js
│
├── tests/
│   ├── auth.test.js
│   ├── client.test.js
│   └── product.test.js
│
├── __mocks__/
│   ├── prisma.js
│   └── auth.middleware.js
│
├── .env.example
├── .gitignore
├── jest.config.js
├── package.json
└── README.md

🔐 Autenticação e Autorização

Autenticação via JWT

Middleware de autenticação (auth.middleware)

Controle de permissões por roles:

ADMIN

USER

Proteção de rotas sensíveis

🧪 Testes Automatizados

Os testes foram implementados utilizando Jest e Supertest, com mocks para:

Prisma

Autenticação

Criptografia

Rodar os testes:
npm test


Todos os testes cobrem:

Login

Criação, listagem, atualização e remoção de clientes

Listagem de produtos

Fluxos autenticados e protegidos

⚙️ Configuração do Ambiente
1️⃣ Clonar o repositório
git clone https://github.com/SEU_USUARIO/orderly-backend.git
cd orderly-backend

2️⃣ Instalar dependências
npm install

3️⃣ Criar o arquivo .env
DATABASE_URL=postgresql://usuario:senha@localhost:5432/orderly
JWT_SECRET=sua_chave_secreta
PORT=3000

▶️ Executar o projeto
Ambiente de desenvolvimento:
npm run dev

Ambiente de produção:
npm start

📌 Objetivos do Projeto

Aplicar arquitetura REST

Praticar autenticação e autorização

Implementar testes automatizados

Criar um backend organizado e escalável

Consolidar conhecimento em Node.js

👩‍💻 Autora

Projeto desenvolvido por Paloma Araujo
Estudante de Análise e Desenvolvimento de Sistemas, com foco em backend, segurança e computação em nuvem.

📄 Licença

Este projeto é de uso educacional e para fins de portfólio.


