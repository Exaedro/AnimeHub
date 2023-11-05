import 'dotenv/config'

const API_URL = process.env.API_URL

const GET_ALL_PARAMETERS = {
    limit: 5,
    offset: 0
}

class KitsuModel {
    /** 
     * @param {integer} limit - Limit of results
     * @param {integer} offset - Number of id where it will start displaying results
    */
    static async getAll({ limit, offset } = GET_ALL_PARAMETERS)  {
        try {
            const data = (await fetch(`${API_URL}?page[limit]=${limit}&page[offset]=${offset}`)).json()
            return data
        } catch(e) {
            console.error('Error has ocurred')
        }
    }
    
    /**
     * @param {string} title - Anime title to search 
     */
    static async getByTitle({ title } = {}) {
        if(!typeof title == 'string') throw Error('Title has be a string')

        try {
            const data = await fetch(`${API_URL}?filter[text]=${title}`)

            if(data.status == 404) return undefined

            return data.json()
        } catch(e) {
            console.error('Error has ocurred')
        }
    }

    /**
     * @param {integer} id - Kitsu ID of anime 
     */
    static async getById({ id } = {}) {
        try {
            const data = await fetch(`${API_URL}/${id}`)

            // if no anime is found 
            // that returns nothing
            if(data.status == 404) return undefined

            return data.json()
        } catch(e) {
            console.error('Error has ocurred')
        }
    }
}

export default KitsuModel