jest.mock("../src/middlewares/auth.middleware")
jest.mock("../src/lib/prisma")

const request = require("supertest")
const app = require("../src/app")
const prisma = require("../src/lib/prisma")

describe("Clients routes", () => {
  it("deve criar um novo cliente", async () => {
    prisma.client.create.mockResolvedValue({
      id: 1,
      name: "Cliente Teste",
      email: "cliente@email.com",
    })

    const response = await request(app)
      .post("/clients")
      .send({
        name: "Cliente Teste",
        email: "cliente@email.com",
      })

    expect(response.status).toBe(201)
  })

  it("deve atualizar um cliente", async () => {
    prisma.client.update.mockResolvedValue({
      id: 1,
      name: "Cliente Atualizado",
    })

    const response = await request(app)
      .put("/clients/1")
      .send({
        name: "Cliente Atualizado",
      })

    expect(response.status).toBe(200)
  })

  it("deve deletar um cliente", async () => {
    prisma.client.delete.mockResolvedValue({})

    const response = await request(app).delete("/clients/1")

    expect(response.status).toBe(204)
  })
})

