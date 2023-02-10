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