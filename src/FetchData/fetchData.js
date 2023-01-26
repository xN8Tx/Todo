import axios from "axios"

export default class FetchData {
    static async Get() {
        const responce = await axios.get('http://localhost:3000/todo')
        return responce.data
    }
    static async Post(data) {
        const responce = await axios.post('http://localhost:3000/todo', data)
        return responce
    }
    static async Edit(id, data) {
        const responce = await axios.put(`http://localhost:3000/todo/${id}`, data)
        return responce
    }

    static async Del(id) {
        const responce = await axios.delete(`http://localhost:3000/todo/${id}`)
        return responce
    }
}