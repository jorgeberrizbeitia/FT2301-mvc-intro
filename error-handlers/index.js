function errorHandling(app) {

  app.use((req, res) => {
    // 404 pagina no encontrada
    res.status(404).render("errors/not-found.hbs")
  })

  app.use((err, req, res, next) => {
    // 500 Errores de servidor
    console.log(err)
    
    res.status(500).render("errors/error.hbs")
  })

}

module.exports = errorHandling