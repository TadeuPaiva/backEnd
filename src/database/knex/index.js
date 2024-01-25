// O arquivo recebera as configurações do 'knexfile.js'

const config = require('../../../knexfile')
const knex = require("knex")

const connection = knex(config.development)
// Conexão do tipo knex e os tipos de configurações que esta dentro do arquivo 'knexfile.js'

module.exports = connection