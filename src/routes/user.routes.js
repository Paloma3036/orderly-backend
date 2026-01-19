const express = require("express")
const router = express.Router()
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const authMiddleware = require("../middlewares/auth.middleware")
const prisma = require("../lib/prisma")

// 🔓 LOGIN (rota pública)
router.post("/login", async (req, res) => {
  const { email, password } = req.body

  const user = await prisma.user.findUnique({
    where: { email }
  })

  if (!user) {
    return res.status(401).json({ error: "Usuário ou senha inválidos" })
  }

  // ⚠️ no teste o bcrypt será mockado
  const senhaValida = await bcrypt.compare(password, user.password)

  if (!senhaValida) {
    return res.status(401).json({ error: "Usuário ou senha inválidos" })
  }

  const token = jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  )

  return res.json({ token })
})

// 🔒 ROTA PROTEGIDA
router.get("/", authMiddleware, (req, res) => {
  res.json({ message: "rota de usuários funcionando" })
})

module.exports = router

