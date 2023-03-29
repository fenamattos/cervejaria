const pg = require('pg')
const database = new pg.Client('postgres://zpltjwlb:ka8uFVb3lUXim7HBsx6BMre55WHTD7H3@babar.db.elephantsql.com/zpltjwlb')

database.connect((erro) => {
    if (erro) {
        return console.log('Não foi possível se conectar ao ElephantSQL')
    } else {
        return console.log('Conectado ao ElephantSQL')
    }
})

module.exports = database