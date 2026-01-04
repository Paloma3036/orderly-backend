const express = require("express")
const { PrismaClient } = require("@prisma/client")

const app = express()
const prisma = new PrismaClient()

app.use(express.json())

// Rota teste
app.get("/", (req, res) => {
  res.send("API funcionando 🚀")
})

// GET - listar todos os clientes
app.get("/clients", async (req, res) => {
  try {
    const clients = await prisma.client.findMany()
    res.status(200).json(clients)
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar clientes" })
  }
})

// GET - buscar cliente por ID
app.get("/clients/:id", async (req, res) => {
  const { id } = req.params

  const client = await prisma.client.findUnique({
    where: {
      id: Number(id)
    }
  })

  if (!client) {
    return res.status(404).json({
      error: "Cliente não encontrado"
    })
  }

  res.json(client)
})

// PUT - atualizar cliente
app.put("/clients/:id", async (req, res) => {
  const { id } = req.params
  const { name, email } = req.body

  // validação básica
  if (!name && !email) {
    return res.status(400).json({
      error: "Informe pelo menos name ou email"
    })
  }

  try {
    const updatedClient = await prisma.client.update({
      where: {
        id: Number(id)
      },
      data: {
        name,
        email
      }
    })

    res.json(updatedClient)
  } catch (error) {
    // Prisma lança erro se o ID não existir
    if (error.code === "P2025") {
      return res.status(404).json({
        error: "Cliente não encontrado"
      })
    }

    console.error(error)
    res.status(500).json({
      error: "Erro ao atualizar cliente"
    })
  }
})

// POST - criar cliente
app.post("/clients", async (req, res) => {
  const { name, email } = req.body

  if (!name || !email) {
    return res.status(400).json({
      error: "Nome e email são obrigatórios"
    })
  }

  const client = await prisma.client.create({
    data: {
      name,
      email
    }
  })

  res.status(201).json(client)
})

// DELETE - remover cliente
app.delete("/clients/:id", async (req, res) => {
  const { id } = req.params

  try {
    // Verifica se o cliente existe
    const clientExists = await prisma.client.findUnique({
      where: {
        id: Number(id)
      }
    })

    if (!clientExists) {
      return res.status(404).json({
        error: "Cliente não encontrado"
      })
    }

    // Remove o cliente
    await prisma.client.delete({
      where: {
        id: Number(id)
      }
    })

    res.status(204).send()
  } catch (error) {
    console.error(error)
    res.status(500).json({
      error: "Erro ao deletar cliente"
    })
  }
})


app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000 🚀")
})
