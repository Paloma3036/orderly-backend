<!-- README atualizado -->
# Orderly Backend 🧩

API RESTful desenvolvida em **Node.js** com foco em **boas práticas de backend**, incluindo autenticação JWT, controle de acesso por roles, estrutura modular e **testes automatizados com Jest**.

Este projeto faz parte da construção de um portfólio voltado para **vagas de estágio e desenvolvedor(a) júnior**

## 🚀 Tecnologias Utilizadas

* **Node.js** – ambiente de execução JavaScript
* **Express** – framework para criação de APIs REST
* **Prisma ORM** – mapeamento objeto-relacional
* **PostgreSQL** – banco de dados relacional
* **Thunder Client / Postman** – testes de requisições HTTP
* **Git & GitHub** – controle de versão


## 📌 Funcionalidades da API

A API permite o gerenciamento de clientes, contendo as seguintes operações:

* ✅ Criar cliente (POST)
* 📄 Listar todos os clientes (GET)
* 🔍 Buscar cliente por ID (GET)
* ✏️ Atualizar cliente (PUT)
* 🗑️ Deletar cliente (DELETE)

Todas as operações seguem os princípios do **CRUD**.

## ⚙️ Configuração do Ambiente

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/Paloma3036/orderly-backend.git
cd orderly-backend
```


### 2️⃣ Instalar as dependências

```bash
npm install
```


### 3️⃣ Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/orderly"
```

> ⚠️ Ajuste o usuário, senha e nome do banco conforme sua configuração local.


### 4️⃣ Rodar as migrações do Prisma

```bash
npx prisma migrate dev
```


### 5️⃣ Iniciar o servidor

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


