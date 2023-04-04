const mongoose = require ('mongoose')

const schema = mongoose.Schema({
   datetime:{
    type: Date,
    required: true,
    default: Date.now()  //Data/hora da gravação
   },
   number:{
    type: Number,
    required: true,
   },
   customer:{
    type: mongoose.ObjectId, //Tipo para chave estrangeira
    ref: 'Customer',         //Model Estrangeira
    required: true
   }

})

/*
    Parâmetros de mongoose.model:
    1°: nome da model, para uso interno (convenção: primeira letra minúscula e singular)
    2°: relação de campos do esquema (constante schema)
    3°: nome da collection no banco de dados (convenção: mesmo nome do model, mas com letra minúscula e no plural)
*/

module.exports = mongoose.model('Sale', schema, 'sales')
