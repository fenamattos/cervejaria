const express = require('express')
const bodyParser = require('body-parser')
const database = require('./database')
const port = 3000

const app = express()
app.use(bodyParser.json())

app.get('/bebidas', (req, res) => {
    database.query('SELECT * FROM bebidas').then((resultado) => {
        res.status(200).send({ bebidas: resultado.rows })
    }, (erro) => {
        res.status(500).send({ erro: erro })
    })
})

app.get('/nome', (req, res) => {
    database.query('SELECT nome FROM bebidas ').then((resultado) => {
        res.status(200).send({ bebidas: resultado.rows })
    }, (erro) => {
        res.status(500).send({ erro: erro })
    })
})

app.get('/abv', (req, res) => {
    database.query('SELECT * FROM bebidas ORDER BY abv desc').then((resultado) => {
        res.status(200).send({ bebidas: resultado.rows })
    }, (erro) => {
        res.status(500).send({ erro: erro })
    })
})

app.get('/tipo', (req, res) => {
    database.query('select * from bebidas order by tipo').then((resultado) => {
        res.status(200).send({ bebidas: resultado.rows })
    }, (erro) => {
        res.status(500).send({ erro: erro })
    })
})

app.get('/parcial/:parcial', (req, res) => {
    const values= req.params.parcial
    const query= `SELECT * FROM bebidas where nome LIKE  '%${values}%'`

    database.query(query).then((resultado)=>{
        res.status(200).send({ bebidas: resultado.rows })
    }, (erro) => {
        res.status(500).send({ erro: erro })
    })
    
})

app.listen(port, () => {
    console.log('API executando')
})
