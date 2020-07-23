import axios from 'axios'

export default class ChefService {

    constructor() {

        this.service = axios.create({
            baseURL: 'http://localhost:5000/api/chefs',
            withCredentials: true
        })
    }

    getAllChefs = () => this.service.get('/getAllChefs')
    getOneChef = (id) => this.service.get(`/getOneChef/${id}`)
    editChef = (id,data) => this.service.put(`/getOneChef/${id}`,data)
    createChef = chef => this.service.post('/newChef', chef)
    deleteChef = (id) => this.service.delete(`/chef/${id}`)
}