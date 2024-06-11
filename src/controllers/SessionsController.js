const knex = require("../database/knex"); // conexao com o banco de dados
const AppError = require("../utils/AppError");
const { compare } = require("bcryptjs"); // funcao do prorpio bcrypt que consegue ler e comparar a senha criptografada
const authConfig = require("../configs/auth");
const { sign } = require("jsonwebtoken"); 

class SessionsController {
// função assíncrona por ter que se conectar ao banco de dados
    async create(request, response) { // método create pois iremos criar uma sessão 

        const { email, password } = request.body; //desestruturando o conteudo vindo do insomnia

        const user = await knex("users").where({ email }).first(); // verificando no banco de dados se o email esta cadastrado, o 'first' ira garantir que venha apenas 1 por vez

        if (!user) {
            throw new AppError("Email ou senha inválidos", 401);
        }
// *interessando por a mesma msg de erro para tentat confundir quem esteja 'roubando' os dados de outra pessoa
        const passwordMatched = await compare(password, user.password); // pegando a senha informada e comparando com a salva no bc

        if (!passwordMatched) {
            throw new AppError("Email ou senha inválidos", 401);
        }

        const { secret, expiresIn} = authConfig.jwt;
        const token = sign({}, secret, { // Primeiro passamos um objeto vazio, em seguida a chave secreta em seguida o conteudo que estara dentro do token
            subject: String(user.id),
            expiresIn, // passamos o id do user convertido para string e o prazo de expirassao 
        })


        return response.json({ user, token }); // usando o 'return' para que o metodo 'create' saiba onde parar
    }
}

module.exports = SessionsController;