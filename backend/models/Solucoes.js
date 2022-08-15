const mongoose = require('../db/conn')
const { Schema } = mongoose

const Solucoes = mongoose.model(
    'Solucoes',
    new Schema(
    {
       titulo: {
        type: String,
        required: true
       },
       descricao: {
        type: String,
        required: true 
       },
       indtech: {
        type: String,
        required: true
       }, 
       caracteristicas: {
        type: String,
        required: true
       },
       dores: {
        type: String,
        required: true
       },
       depoimentos: {
        type: String,
        required: true
       },
       autorDepoimento: {
        type: String,
        required: true
       },
       linkCase: {
        type: String
       },
       images :{
        type: Array
       },
    }, { timestamps: true})
)

module.exports = Solucoes