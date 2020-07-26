import axios from 'axios'

export default class UserService {

    constructor() {

        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/user`,
            withCredentials: true
        })
    }


    // profile = () => this.service.get(`/profile`)
    // editProfile = (id) => this.service.get(`/editProfile/${id}`)
    // editProfile = (id, data) => this.service.put(`/editProfile/${id}`, data)
    // deleteProfile = (id) => this.service.delete(`/profile/${id}`)

    getOneProfile = (id) => this.service.get(`/getOneProfile/${id}`)
    editProfile = (credentials, id) => this.service.patch(`/getOneProfile/${id}`, credentials)


}