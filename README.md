# 🧾 Orderly Backend

API REST desenvolvida em **Node.js** com **Express** e **Prisma ORM**, utilizando **PostgreSQL** como banco de dados.
Este projeto faz parte do meu portfólio e tem como objetivo consolidar conceitos fundamentais de **backend**, **APIs REST**, **CRUD**, **ORM** e **versionamento com Git/GitHub**.

---

## 🚀 Tecnologias Utilizadas

* **Node.js** – ambiente de execução JavaScript
* **Express** – framework para criação de APIs REST
* **Prisma ORM** – mapeamento objeto-relacional
* **PostgreSQL** – banco de dados relacional
* **Thunder Client / Postman** – testes de requisições HTTP
* **Git & GitHub** – controle de versão

---

## 📌 Funcionalidades da API

A API permite o gerenciamento de clientes, contendo as seguintes operações:

* ✅ Criar cliente (POST)
* 📄 Listar todos os clientes (GET)
* 🔍 Buscar cliente por ID (GET)
* ✏️ Atualizar cliente (PUT)
* 🗑️ Deletar cliente (DELETE)

Todas as operações seguem os princípios do **CRUD**.

---

## 🗂️ Estrutura do Projeto

```
orderly-backend/
├── prisma/
│   ├── migrations/
│   ├── schema.prisma
│   └── prisma.config.ts
├── src/
│   └── index.js
├── .env
├── .gitignore
├── package.json
└── package-lock.json
```

---

## ⚙️ Configuração do Ambiente

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/Paloma3036/orderly-backend.git
cd orderly-backend
```

---

### 2️⃣ Instalar as dependências

```bash
npm install
```

---

### 3️⃣ Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/orderly"
```

> ⚠️ Ajuste o usuário, senha e nome do banco conforme sua configuração local.

---

### 4️⃣ Rodar as migrações do Prisma

```bash
npx prisma migrate dev
```

---

### 5️⃣ Iniciar o servidor

```bash
node src/index.js
```

O servidor estará disponível em:

```
http://localhost:3000
```

---

## 🔎 Rotas da API

### ➕ Criar cliente

**POST** `/clients`

```json
{
  "name": "Maria",
  "email": "maria@email.com"
}
```

---

### 📄 Listar clientes

**GET** `/clients`

---

### 🔍 Buscar cliente por ID

**GET** `/clients/{id}`

---

### ✏️ Atualizar cliente

**PUT** `/clients/{id}`

```json
{
  "name": "Maria Silva",
  "email": "maria.silva@email.com"
}
```

---

### 🗑️ Deletar cliente

**DELETE** `/clients/{id}`

---

## 🧠 Aprendizados com o Projeto

* Criação de uma API REST do zero
* Integração do Prisma com PostgreSQL
* Uso de migrations e schema
* Boas práticas de rotas HTTP
* Tratamento de erros no backend
* Versionamento e publicação no GitHub

---

## 📈 Próximos Passos (Evolução do Projeto)

* 🔐 Implementar autenticação (JWT)
* 📦 Criar relacionamento entre tabelas
* 📊 Paginação e filtros
* 🧪 Testes automatizados
* 📑 Documentação com Swagger

---

## 👩‍💻 Autora

Desenvolvido por **Paloma Araujo** 💜
Estudante de **Análise e Desenvolvimento de Sistemas**, focada em **Backend** e **APIs**, com interesse em tecnologia aplicada à área de **inteligência e segurança**.

---

✨ Projeto desenvolvido para fins de estudo e portfólio.
