jest.mock("../src/lib/prisma")
jest.mock("bcrypt", () => ({
  compare: jest.fn(),
}))

const request = require("supertest")
const app = require("../src/app")
const prisma = require("../src/lib/prisma")
const bcrypt = require("bcrypt")

describe("Auth routes", () => {
  beforeEach(() => {
    jest.clearAllMocks()
    process.env.JWT_SECRET = "jwt-secret-de-testes"
  })

  it("deve autenticar usuário válido", async () => {
    prisma.user.findUnique.mockResolvedValue({
      id: 1,
      email: "admin@email.com",
      password: "hash-fake",
      role: "ADMIN",
    })

    bcrypt.compare.mockResolvedValue(true) // 🔥 ESSENCIAL

    const response = await request(app)
      .post("/users/login")
      .send({
        email: "admin@email.com",
        password: "123456",
      })

    expect(response.status).toBe(200)
    expect(response.body.token).toBeDefined()
  })
})


