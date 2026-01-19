const express = require("express")
const prisma = require("../lib/prisma")
const authMiddleware = require("../middlewares/auth.middleware")
const isAdmin = require("../middlewares/isAdmin.middleware")

const router = express.Router()

// GET - listar todos os clientes
router.get("/", async (req, res) => {
  try {
    const clients = await prisma.client.findMany()
    res.json(clients)
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar clientes" })
  }
})

// POST - criar cliente (protegido)
router.post("/", authMiddleware, isAdmin, async (req, res) => {
  const { name, email } = req.body

  if (!name || !email) {
    return res.status(400).json({
      error: "Nome e email são obrigatórios"
    })
  }

  try {
    const client = await prisma.client.create({
      data: { name, email }
    })

    res.status(201).json(client)
  } catch (error) {
    if (error.code === "P2002") {
      return res.status(400).json({
        error: "Email já cadastrado"
      })
    }

    res.status(500).json({
      error: "Erro ao criar cliente"
    })
  }
})

// PUT - atualizar cliente (protegido)
router.put("/:id", authMiddleware, isAdmin, async (req, res) => {
  const { id } = req.params
  const { name, email } = req.body

  try {
    const updatedClient = await prisma.client.update({
      where: { id: Number(id) },
      data: { name, email }
    })

    res.json(updatedClient)
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({
        error: "Cliente não encontrado"
      })
    }

    res.status(500).json({
      error: "Erro ao atualizar cliente"
    })
  }
})

// DELETE - remover cliente (protegido)
router.delete("/:id", authMiddleware, isAdmin, async (req, res) => {
  const { id } = req.params

  try {
    await prisma.client.delete({
      where: { id: Number(id) }
    })

    res.status(204).send()
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({
        error: "Cliente não encontrado"
      })
    }

    res.status(500).json({
      error: "Erro ao deletar cliente"
    })
  }
})

module.exports = router

