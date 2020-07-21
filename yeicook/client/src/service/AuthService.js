import axios from 'axios'

export default class AuthService {

    constructor() {

        this.service = axios.create({
            baseURL: 'http://localhost:5000/api',
            withCredentials: true
        })
    }

    login = credentials => this.service.post('/login', credentials)
    signup = credentials => this.service.post('/signup', credentials)
    logout = () => this.service.post('/logout')
    isLoggedIn = () => this.service.get('/loggedin')
    
    profile = () => this.service.get('/profile')
    getOneProfile = (id) => this.service.get(`/editProfile/${id}`)
    editProfile = (id) => this.service.put(`/editProfile/${id}`)
    deleteUser = (id) => this.service.delete(`/profile/${id}`)

}