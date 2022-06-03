//configuração inicial - criando variaveis 

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const req = require('express/lib/request')

const app = express()
//adicionando as funções
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({require: false }))
app.use(express.json())
app.use(cors())


//add valores
let db = [
  { '1': { nome: 'cliente 1', idade: '20'}},
  { '2': { nome: 'cliente 2', idade: '20'}},
  { '3': { nome: 'cliente 3', idade: '20'}},
  { '4': { nome: 'cliente 4', idade: '20'}},
]


//buscar dados
app.get('/',(req, res) => {
  return res.json(db)
  
})

// inserir dados
app.post('/add', (req,res) =>{
  const body =req.body

  if(!body)
  return res.status(400). end()
  db.push(body)
  return res.json(body)

})




//ligar servidor
app.listen(21262, ()=>{
  console.log('Express started at http://localhost:30000')
})