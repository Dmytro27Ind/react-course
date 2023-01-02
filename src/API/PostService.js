import axios from "axios";

export default class PostService {
    static async getAll(limit=10, page=1) {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                    _limit: limit,
                    _page: page
                }
            })
            return response
            //* without axios, using only fetch
            // const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            // return await response.json()
        } catch (err) {
            console.log(err)
        }
    }

    static async getById(id) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        return response
    }
}