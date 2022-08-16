const router = require('express').Router()

const SolucoesController = require('../controllers/SolucoesController')

// middlewares
const verifyToken = require('../helpers/verify-token')
const { imageUpload } = require('../helpers/image-upload')

    router.post('/create', verifyToken, imageUpload.array('images'), SolucoesController.create)
    router.get('/', SolucoesController.getAll)
    router.get('/:id', SolucoesController.getSoulucoesById)
    router.delete('/:id', verifyToken, SolucoesController.removeSolucoesById)
    router.patch('/:id', verifyToken,  imageUpload.array('images'), SolucoesController.UpdateSolucao)

module.exports = router