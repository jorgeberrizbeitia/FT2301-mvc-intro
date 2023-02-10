// Example User Model here

const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: String,
})

const UserModel = mongoose.model("user", userSchema)
// mongo usa el nombre del modelo para dar nombre a la colección
// "user" => "users"

module.exports = UserModel