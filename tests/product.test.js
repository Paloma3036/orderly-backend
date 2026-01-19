jest.mock("../src/middlewares/auth.middleware")
jest.mock("../src/lib/prisma")

const request = require("supertest")
const app = require("../src/app")
const prisma = require("../src/lib/prisma")

describe("Product routes", () => {
  it("deve listar produtos", async () => {
    prisma.product.findMany.mockResolvedValue([])

    const response = await request(app).get("/products")

    expect(response.status).toBe(200)
    expect(response.body).toEqual([])
  })
})

