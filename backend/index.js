const express = require('express')
const cors = require('cors')

const app = express()

// Config JSON response
app.use(express.json())

// Solve CORS
app.use(cors({ credential: true, origin:'http://localhost:3001' }))

// Public folder for images
app.use(express.static('public'))

//Routes
const UserRoutes = require('./routes/UserRoutes')
const SolucoesRoutes = require('./routes/SolucoesRoutes')
const EmpresasRoutes = require('./routes/EmpresasRoutes')

app.use('/users', UserRoutes)
app.use('/solucoes', SolucoesRoutes)
app.use('/empresas', EmpresasRoutes)

app.listen(5000)