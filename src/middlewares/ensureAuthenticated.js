const { verify } = require("jsonwebtoken");
const AppError = require("../utils/AppError");
const authConfig = require("../configs/auth");

function ensureAuthenticated(request, response, next) {
// O middleware sempre recebe o next para chamar a proxima função de destino
    const authHeader = request.headers.authorization;

    if(!authHeader) {
        throw new AppError("JWT token nao informado", 401);
    }

    const [, token] = authHeader.split(" "); // 'split', separando por espaco

    try{
        const { sub: user_id } = verify(token, authConfig.jwt.secret);
// O verify ira comparar se o token recebido e igual ao gerado e armazenado no JWT
        request.user = {
            id: Number(user_id),
// Nosso token e o id do user, ao gerar o token o convertemos para String, aqui iremos converter novamente para Number 
        }

        return next()
// O return ja ira chamar a proxima funcao e o 'middleware' ira entrar no caminho e indicar qual sera a proxima requisicao
    }catch {
        throw new AppError("JWT token invalido", 401);
    }
}

module.exports = ensureAuthenticated;