module.exports = {
// Um objeto exportado
    jwt: {
        secret: "default", // palavra ServiceWorkerContainer, pode ser usada alguma chave tbm, utilizado para gerar o 'token'
        expiresIn: "1d"// tempo em que ira se expirar o token, neste exemplo, 1 dia
    }
}