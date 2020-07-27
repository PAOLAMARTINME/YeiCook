import axios from 'axios'

export default class UserService {

    constructor() {

        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/user`,
            withCredentials: true
        })
    }


    getOneProfile = (id) => this.service.get(`/getOneProfile/${id}`)
    editProfile = (id, credentials) => this.service.patch(`/getOneProfile/${id}`, credentials)


}