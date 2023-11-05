import 'dotenv/config'

import AnimeController from '../controllers/animeController.js'

import { Router } from 'express'
export const router = Router()

router.get('/anime', (req, res) => AnimeController.getAnime(req, res))
router.get('/anime/:id', (req, res) => AnimeController.getAnimeById(req, res))