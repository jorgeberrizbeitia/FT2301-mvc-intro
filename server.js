// Gets access to environment variables/settings
require('dotenv').config()

// ejecutar tod lo que hay en db/index.js
require("./db")

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


const router = require("./routes")
// ejecuta todas las rutas cuando tengamos una llamada de usuario
app.use("/", router)


// To handle errors.
const errorHandling = require("./error-handlers")
errorHandling(app)


// Sets the PORT for our app to have access to it. If no env has been set, we hard code it to 3000
const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});