// Gets access to environment variables/settings
require('dotenv').config()


// Connects to the database... if we had one :( 
const mongoose = require("mongoose")
const MONGO_URI = "mongodb://localhost:27017/test-db" 
mongoose.connect(MONGO_URI)
.then(() => {
  console.log("todo bien, conectado a la DB")
})
.catch((err) => {
  console.log("todo mal", err)
})

const UserModel = require("./models/User.model.js")


// Handles http requests (express is node js framework)
const express = require('express');
const app = express();


// Handles the handlebars
const hbs = require("hbs");


// This part runs most pieces of middleware
app.use(express.static("public"))
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views/' )

const logger = require("morgan");
app.use(logger("dev"))

const favicon = require("serve-favicon")
// const path = require('path')
app.use(favicon(__dirname + '/public/images/favicon.ico'))

// Local Variables 
// TODO           


// 👇 Start handling routes here
app.get('/', (req, res) => {
  res.render("home.hbs")
})

app.get('/about', (req, res) => {

  // acceder a la DB de usuarios y enviar la data a about.hbs
  UserModel.find()
  .then((response) => {
    console.log("respuesta de la DB", response)

    res.render("about.hbs", {
      users: response
    })

  })

})

app.get('/my-hobbies', (req, res) => {
  res.render("my-hobbies.hbs")
})


// To handle errors.
// TODO            


// Sets the PORT for our app to have access to it. If no env has been set, we hard code it to 3000
const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});