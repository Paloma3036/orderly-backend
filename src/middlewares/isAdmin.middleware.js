function isAdmin(req, res, next) {
  if (req.user.role !== "ADMIN") {
    return res.status(403).json({
      error: "Acesso permitido apenas para administradores"
    })
  }

  next()
}

module.exports = isAdmin

