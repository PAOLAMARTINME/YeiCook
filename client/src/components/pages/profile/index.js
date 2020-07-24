import React, { Component } from 'react'

import UserService from '../../../service/UserService'

import EditProfile from './profile-edit'

import './profile.css'

import Container from 'react-bootstrap/Container'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.loggedInUser ? this.props.loggedInUser.id : "",
            name: this.props.loggedInUser ? this.props.loggedInUser.name : "",
            username: this.props.loggedInUser ? this.props.loggedInUser.username : "",
            password: '',
            email: this.props.loggedInUser ? this.props.loggedInUser.email : "",
            avatar: this.props.loggedInUser ? this.props.loggedInUser.avatar : "",
            location: this.props.loggedInUser ? this.props.loggedInUser.location : "",
            contact: this.props.loggedInUser ? this.props.loggedInUser.contact : "",
            user: undefined,
            showModal: false
        }
        this.userService = new UserService()
    }
    componentDidMount = () => this.updateProfile()

    updateProfile = () => {
        this.userService
            .profile(this.props.id)
            .then(response => this.setState({ user: response.data }))
            .catch(err => console.log(err))
    }

    handleModal = status => this.setState({ showModal: status })

    handleProfileSubmit = () => {
        this.handleModal(false)
        this.updateProfile()
    }

    render() {
console.log("USERRRR",this.state.user)
        return (
            <>

                <Container as="main" className="profile-page">
                    
                    <h1>Bienvenid@ {this.state.username}</h1>
                    
                    {
                        this.props.loggedInUser && <Button onClick={() => this.handleModal(true)} variant="info" size="sm" style={{ marginBottom: '20px' }}>Editar perfil</Button>
                    }
                        <Row>
                        <Image className="avatarDefault" src={this.state.avatar}></Image>
                        </Row>

                        <Row>
                        <h1>{this.state.name}</h1>
                        </Row>
                        <Row>
                        <h1>{this.state.username}</h1>
                        </Row>
                        <Row>
                        <h1>{this.state.email}</h1>
                        </Row>
                        <Row>
                        <h1>{this.state.location}</h1>
                        </Row>
                        <Row>
                        <h1>{this.state.contact}</h1>
                        </Row>

                    
                </Container>

                <Modal size="lg" show={this.state.showModal} onHide={() => this.handleModal(false)}>
                    <Modal.Body>
                        <EditProfile user={this.props.loggedInUser} handleProfileSubmit={this.handleProfileSubmit} />
                    </Modal.Body>
                </Modal>
            </>

        )
    }

}

export default Profile