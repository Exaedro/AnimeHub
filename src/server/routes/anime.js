import 'dotenv/config'

import { Router } from 'express'
export const router = Router()

import KitsuModel from '../models/KitsuModel.js'

router.get('/anime', async (req, res) => {
    // Title of anime
    const { search } = req.query

    // Search anime by title
    if(search) {
        const anime = await KitsuModel.getByTitle({ title: search })
        return res.json(anime)
    }

    // Show animes
    const animes = await KitsuModel.getAll()
    res.json(animes)
})