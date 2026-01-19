const express = require("express")
const cors = require("cors")

const userRoutes = require("./routes/user.routes")
const clientRoutes = require("./routes/client.routes")
const productRoutes = require("./routes/product.routes")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/users", userRoutes)
app.use("/clients", clientRoutes)
app.use("/products", productRoutes)

module.exports = app

