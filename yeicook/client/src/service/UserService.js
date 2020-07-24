import axios from 'axios'

export default class UserService {

    constructor() {

        this.service = axios.create({
            baseURL: 'http://localhost:5000/api/user',
            withCredentials: true
        })
    }


    profile = (id) => this.service.get(`/profile/${id}`)
    // getOneProfile = (id) => this.service.get(`/editProfile/${id}`)
    editProfile = (id, data) => this.service.put(`/editProfile/${id}`, data)
    // deleteProfile = (id) => this.service.delete(`/profile/${id}`)

}