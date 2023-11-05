import KitsuModel from "../models/KitsuModel.js"

class AnimeController {
    static async getAnime(req, res) {
        // Title of anime
        const { search } = req.query

        // Search anime by title
        if(search) {
            const anime = await KitsuModel.getByTitle({ title: search })

            if(anime) return res.status(200).json(anime)
            
            return res.status(404).json({ 'message': 'not found' })
        }

        // if there is no anime query 
        // that displays all series
        const animes = await KitsuModel.getAll()
        res.status(200).json(animes)
    }

    static async getAnimeById(req, res) {
        const { id } = req.params

        if(!id) return

        const anime = await KitsuModel.getById({ id })
        if(anime) {
            return res.status(200).json(anime)
        }

        res.status(404).json({ 'message': 'not found', 'status': 404 })
    }
}

export default AnimeController