const knex = require("../database/knex");
const AppError = require("../utils/AppError");
const { compare } = require("bcryptjs");

class SessionsController {
// função assíncrona por ter que se conectar ao banco de dados
    async create(request, response) { // método create pois iremos criar uma sessão 

        const { email, password } = request.body; //desestruturando o conteudo vindo do insomnia

        const user = await knex("users").where({ email }).first(); // verificando no banco de dados se o email esta cadastrado, o 'first' ira garantir que venha apenas 1 por vez

        if (!user) {
            throw new AppError("Email ou senha inválidos", 401);
        }

        const passwordMatched = await compare(password, user.password);

        if (!passwordMatched) {
            throw new AppError("Email ou senha inválidos", 401);
        }

        return response.json(user); // usando o 'return' para que o metodo 'create' saiba onde parar
    }
}

module.exports = SessionsController;