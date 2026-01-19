const prisma = require("../prisma");

async function createClient(req, res) {
  const { name, email } = req.body;

  try {
    const client = await prisma.client.create({
      data: {
        name,
        email,
      },
    });

    return res.status(201).json(client);
  } catch (error) {
    if (error.code === "P2002") {
      return res.status(400).json({
        error: "Email já cadastrado",
      });
    }

    console.error(error);

    return res.status(500).json({
      error: "Erro ao criar cliente",
    });
  }
}

async function listClients(req, res) {
  try {
    const clients = await prisma.client.findMany();
    return res.json(clients);
  } catch (error) {
    return res.status(500).json({
      error: "Erro ao listar clientes",
    });
  }
}

async function deleteClient(req, res) {
  const { id } = req.params;

  try {
    const client = await prisma.client.findUnique({
      where: { id: Number(id) },
    });

    if (!client) {
      return res.status(404).json({
        error: "Cliente não encontrado",
      });
    }

    await prisma.client.delete({
      where: { id: Number(id) },
    });

    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({
      error: "Erro ao deletar cliente",
    });
  }
}

module.exports = {
  createClient,
  listClients,
  deleteClient,
};

