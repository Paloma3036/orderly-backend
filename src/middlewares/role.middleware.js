function isAdmin(req, res, next) {
  const user = req.user

  if (!user) {
    return res.status(401).json({
      error: "Usuário não autenticado"
    })
  }

  if (user.role !== "ADMIN") {
    return res.status(403).json({
      error: "Acesso restrito a administradores"
    })
  }

  next()
}

module.exports = { isAdmin }

