const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const prisma = require("../prisma");

async function register(req, res) {
  try {
    const { email, password } = req.body;

    // 1️⃣ validação básica
    if (!email || !password) {
      return res.status(400).json({ error: "Email e senha são obrigatórios" });
    }

    // 2️⃣ verifica se usuário já existe
    const userExists = await prisma.user.findUnique({
      where: { email },
    });

    if (userExists) {
      return res.status(400).json({ error: "Usuário já existe" });
    }

    // 3️⃣ gera hash da senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // 4️⃣ cria usuário
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    // 5️⃣ resposta
    return res.status(201).json({
      message: "Usuário criado com sucesso",
      user: {
        id: user.id,
        email: user.email,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao criar usuário" });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;

    // 1️⃣ validação básica
    if (!email || !password) {
      return res.status(400).json({ error: "Email e senha são obrigatórios" });
    }

    // 2️⃣ busca usuário
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(401).json({ error: "Credenciais inválidas" });
    }

    // 3️⃣ compara senha
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Credenciais inválidas" });
    }

    // 4️⃣ gera token
    const token = jwt.sign(
      {
        id: user.id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRES_IN,
      }
    );

    // 5️⃣ resposta
    return res.json({
      message: "Login realizado com sucesso",
      token,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao realizar login" });
  }
}


module.exports = { register, login };

