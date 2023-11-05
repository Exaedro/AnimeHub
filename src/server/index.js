import express from 'express';
import morgan from 'morgan'

const app = express()

// Config
const port = process.env.PORT ?? 3000
app.set('json spaces', 2)

// Middlewares
app.use(morgan('dev'))
app.use(express.json())

// Routes
import { router } from './routes/anime.js';
app.use(router)

// Server
app.listen(port, () => {
    console.log('Server on', port)
})