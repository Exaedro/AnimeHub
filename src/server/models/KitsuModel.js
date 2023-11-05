import 'dotenv/config'

const API_URL = process.env.API_URL

class KitsuModel {
    /** 
     * @param {string} url - Kitsu API url
    */
    static async getAll()  {
        const data = (await fetch(`${API_URL}?page[limit]=5`)).json()
        return data
    }
    
    /**
     * @param {string} title - Anime title to search 
     */
    static async getByTitle({ title } = {}) {
        if(!typeof title == 'string') throw Error('Title has be a string')

        const data = (await fetch(`${API_URL}?filter[text]=${title}`)).json()
        return data
    }
}

export default KitsuModel