const express = require("express")
const app = express()
const engine = require("express-handlebars").engine
const port = 5000

app.engine("handlebars", engine())
app.set('view engine', 'handlebars')
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render('home');
  });

  app.post('/signup', (req, res) => {
    console.log(req.body)
    const { username } = req.body

    res.render('signup', {
      name: username, 
    })

  })

app.listen(port, () => {
    console.log(`Server running on port ${5000}`)
  })