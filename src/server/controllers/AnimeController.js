import KitsuModel from "../models/KitsuModel.js"

class AnimeController {
    static async getAnime(req, res) {
        // Title of anime
        const { search } = req.query

        // Search anime by title
        if(search) {
            const anime = await KitsuModel.getByTitle({ title: search })
            return res.status(200).json(anime)
        }

        // Show animes
        const animes = await KitsuModel.getAll()
        res.status(200).json(animes)
    }
}

export default AnimeController