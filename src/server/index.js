import express from 'express';
import morgan from 'morgan'

const app = express()

// Config
const port = process.env.PORT ?? 3000

// Middlewares
app.use(morgan('dev'))

// Routes
app.use('/', (req, res) => {
    res.send('Hello World')
})

// Server
app.listen(port, () => {
    console.log('Server on', port)
})