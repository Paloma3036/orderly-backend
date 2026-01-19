# Orderly Backend API 📝

API RESTful desenvolvida em **JavaScript (Node.js)** para gerenciamento de clientes, produtos, pedidos e transações, com autenticação via JWT e arquitetura organizada seguindo boas práticas de backend.

# Stack Tecnológica 🧰

- **Node.js** – ambiente de execução JavaScript no servidor
- **Express** – framework minimalista para criação de APIs RESTful
- **Prisma ORM** – mapeamento objeto-relacional
- **PostgreSQL** – banco de dados relacional para persistência dos dados
- **JWT** – autenticação segura baseada em tokens
- **bcrypt** – biblioteca para criptografia de senhas
- **dotenv** – gerenciamento de variáveis de ambiente
- **cors** – controle de acesso entre diferentes origens 
- **Jest** – framework de testes automatizados
- **Supertest** – testes de requisições HTTP em APIs
- **Thunder Client** – testes de requisições HTTP
- **Git & GitHub** – controle de versão e hospedagem do repositório

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
```

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

### 📌 Clientes
```bash
| Método |     Rota      |     Descrição     |
|--------|---------------|-------------------|
| POST   | /clients      | Criar cliente     |
| GET    | /clients      | Listar clientes   |
| GET    | /clients/{id} | Buscar por ID     |   
| PUT    | /clients/{id} | Atualizar cliente |
| DELETE | /clients/{id} | Deletar cliente   |
```

## 🧠 Aprendizados com o Projeto

* Estruturação de uma API REST com separação de camadas
* Implementação de autenticação e autorização com JWT
* Integração do Prisma ORM com PostgreSQL
* Uso de migrations para versionamento do banco
* Tratamento centralizado de erros no backend
* Escrita de testes automatizados com Jest


👩‍💻 Autora
```mb
Projeto desenvolvido por Paloma Araujo;
Estudante de Análise e Desenvolvimento de Sistemas, com foco em backend, segurança e computação em nuvem.
```
```mb
📄 Licença
Este projeto é de uso educacional e para fins de portfólio.
```
