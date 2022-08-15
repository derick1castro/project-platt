const Solucoes = require('../models/Solucoes')

//helpers
// const getUserByToken = require('../helpers/get-user-by-token')
// const getToken = require('../helpers/get-token')
const ObjectId = require('mongoose').Types.ObjectId

module.exports = class SolucoesController {

    // create solution
    static async create(req, res) {
        const { titulo, descricao, indtech, caracteristicas, dores, depoimentos, autorDepoimento, linkCase} = req.body

        // images upload
        const images = req.files

        // validations
        if(!titulo) {
            res.status(422).json({ message: 'O título é obrigatório!'})
            return
        }

        if(!descricao) {
            res.status(422).json({ message: 'A descrição é obrigatória!'})
            return
        }

        if(!indtech) {
            res.status(422).json({ message: 'A indtech é obrigatória!'})
            return
        }

        if(!caracteristicas) {
            res.status(422).json({ message: 'As características são obrigatórias!'})
            return
        }

        if(!dores) {
            res.status(422).json({ message: 'As dores são obrigatórias!'})
            return
        }

        if(!depoimentos) {
            res.status(422).json({ message: 'Os depoimentos são obrigatórios!'})
            return
        }

        if(!autorDepoimento) {
            res.status(422).json({ message: 'O autor do depoimento é obrigatório!'})
            return
        }

        if(!linkCase) {
            res.status(422).json({ message: 'O link do case é obrigatório!'})
            return
        }
        

        if(images.length === 0) {
            res.status(422).json({ message: 'A imagem é obrigatória!'})
            return
        }

        // create solution
        const solucoes = new Solucoes({
            titulo,
            descricao,
            indtech,
            caracteristicas,
            dores,
            depoimentos,
            autorDepoimento,
            linkCase,
            images: [],
        })

        images.map((image) => {
            solucoes.images.push(image.filename)
        })
        

        try {
            
            const NewSolucoes = await solucoes.save()
            res.status(201).json({
                message: 'Solução cadastrada com sucesso!',
                NewSolucoes
            })

        } catch (error) {
            
            res.status(500).json({ message:error })
        }
    }

    static async getAll (req, res) {
       
        const solucoes = await Solucoes.find().sort('-createdAt')

        res.status(200).json({
            solucoes: solucoes,
        })
    }

    static async getSoulucoesById(req, res) {

        const id = req.params.id

        if (!ObjectId.isValid(id)) {
            res.status(422).json({ message: 'ID inválido!'})
        }

        // check if solution exists
        const solucoes = await Solucoes.findOne({_id: id})

        if(!solucoes) {
            res.status(404).json({ message: 'Solução não econtrada'})
        }

        res.status(200).json({
            solucoes: solucoes,
        })
    }
}