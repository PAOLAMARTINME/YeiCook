import axios from 'axios'

export default class ChefService {

    constructor() {

        this.service = axios.create({
            baseURL: 'http://localhost:5000/chefs',
            withCredentials: true
        })
    }

    getAllChefs = () => this.service.get('/getAllChefs')
    getOneChef = id => this.service.get(`/getOneChef/${id}`)
    createChef = chef => this.service.post(`/newChef`, chef)
    updateChefData = (id) => this.service.put(`/chef/${id}`)
    deleteChef = (id) => this.service.delete(`/chefs/${id}`)
}