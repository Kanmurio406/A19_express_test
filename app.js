// include express from node_modules
const express = require('express')
const app = express()

// server variables
const port = 3000

// require handlebars
const {engine} = require('express-handlebars')

// setting template engine
app.engine('handlebars', engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'))

// routes setting
app.get('/', (req, res) => {
  res.render('index')
})

app.get('/:show', (req, res) => {
  const content = req.params.show
  res.render('show', {content: content} )
})

// start and listen
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
}) 