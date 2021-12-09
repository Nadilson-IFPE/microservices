const mongoose = require("mongoose");

const schema = mongoose.Schema({
    nome: String,
    cpf: String
});

module.exports = mongoose.model("Assinantes", schema);