import axios from 'axios'

export default class ChefService {
    
    constructor() {

        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/chefs`,
            withCredentials: true
        })
    }

    getAllChefs = () => this.service.get('/getAllChefs')
    getOneChef = (id) => this.service.get(`/getOneChef/${id}`)
    editChef = (id,data) => this.service.put(`/getOneChef/${id}`,data)
    createChef = chef => this.service.post('/newChef', chef)
    deleteChef = (id) => this.service.delete(`/chef/${id}`)

    //LIKE
    like = (id) => this.service.post(`/getOneChef/${id}/like`)

    //COMMENTS
    createComments = (id, comments) => this.service.post(`/comment/${id}`, comments)
    deleteComment = (id) => this.service.post(`/deleteComment/${id}`)
}
