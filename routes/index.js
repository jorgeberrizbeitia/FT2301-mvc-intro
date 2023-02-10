const express = require("express")
const router = express.Router()

const UserModel = require("../models/User.model.js")

// 👇 Start handling routes here
router.get('/', (req, res) => {
  res.render("home.hbs")
})

router.get('/about', (req, res, next) => {

  // acceder a la DB de usuarios y enviar la data a about.hbs
  UserModel.find()
  .then((response) => {
    console.log("respuesta de la DB", response)

    res.render("about.hbs", {
      users: responseasdas // replicando un error para que vaya al next(error)
    })
  })
  .catch((error) => {
    // console.log(error)
    // ve a los errores de tipo 500
    // next() => continua con las siguientes rutas
    // next(error) => ve al handler de errores de tipo 500
    // console.log(error)
    next(error) // va al handler de errores 500
  })
})

router.get('/my-hobbies', (req, res) => {
  res.render("my-hobbies.hbs")
})

module.exports = router;
