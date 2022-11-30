import axios from "axios";

export default class PostService {
    static async getAll() {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            return response.data
            //* without axios, using only fetch
            // const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            // return await response.json()
        } catch (err) {
            console.log(err)
        }
    }
}