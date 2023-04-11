const express = require('express')
const router = express.Router()
const controller = require('../controllers/supplier')

router.post('/', controller.create)
router.get('/', controller.retrieveAll)
router.get('/:id', controller.retrieveOne) //id = parâmetro para buscar na rota, o verbo GET não vai ser confundido com o outro GET que foi feito.
router.put('/:id', controller.update)
router.delete('/:id', controller.delete)

module.exports = router