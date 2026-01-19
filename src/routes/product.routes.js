const express = require("express")
const router = express.Router()

const authMiddleware = require("../middlewares/auth.middleware")

router.get("/", authMiddleware, (req, res) => {
  res.json([])
})

router.post("/", authMiddleware, (req, res) => {
  res.status(201).json({ id: 1, ...req.body })
})

router.put("/:id", authMiddleware, (req, res) => {
  res.json({ id: req.params.id, ...req.body })
})

router.delete("/:id", authMiddleware, (req, res) => {
  res.status(204).send()
})

module.exports = router

