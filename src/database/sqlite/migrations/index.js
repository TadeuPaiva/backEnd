const sqlConnection = require("../../sqlite")
const createUsers = require("./migrateUsers")

async function migrationsRun () {
    const schemas = [  // para caso seja preciso receber outros dados
        createUsers
    ].join('')

    sqlConnection()
    .then(db => db.exec(schemas))
    .catch(error => console.error(error))
}

module.exports = migrationsRun