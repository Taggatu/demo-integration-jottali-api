const dotenv = require('dotenv')

// require('./dbconnection')

dotenv.config()
const express = require('express')
const http = require('http')
const transactionCtrl = require('./controllers/transaction.ctrl')
const cors = require('cors')


const PORT = 6300

const app = express()

app.use(cors())

app.use('/transactions', transactionCtrl)

const server = http.createServer(app)

server.listen(PORT, () => {
  console.log("Serveur démarré port", PORT);
})
