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
            name: this.props.loggedInUser ? this.props.loggedInUser.name : "jsja",
            username: this.props.loggedInUser ? this.props.loggedInUser.username : "Chao",
            password: '',
            email: this.props.loggedInUser ? this.props.loggedInUser.email : "Chao",
            avatar: this.props.loggedInUser ? this.props.loggedInUser.avatar : "dkd",
            location: this.props.loggedInUser ? this.props.loggedInUser.location : "Chao",
            contact: this.props.loggedInUser ? this.props.loggedInUser.contact : "Chao",
            showModal: false
        }
        this.userService = new UserService()
    }
    componentDidMount = () => this.updateProfile()

    updateProfile = () => {
        this.userService
            .editProfile()
            .then(response => this.setState({ response }))
            .catch(err => console.log(err))
    }

    handleModal = status => this.setState({ showModal: status })

    handleProfileSubmit = () => {
        this.handleModal(false)
        this.updateProfile()
    }

    render() {
        // const avatar = this.props.loggedInUser ? this.props.loggedInUser.avatar : "dkd";
        // const name = this.props.loggedInUser ? this.props.loggedInUser.name : "jsja";
        // const username = this.props.loggedInUser ? this.props.loggedInUser.username : "Chao";
        // const email = this.props.loggedInUser ? this.props.loggedInUser.email : "Chao";
        // const location = this.props.loggedInUser ? this.props.loggedInUser.location : "Chao";
        // const contact = this.props.loggedInUser ? this.props.loggedInUser.contact : "Chao";
        return (
            <>

                <Container as="main" className="profile-page">
                    
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
                        <EditProfile handleProfileSubmit={this.handleProfileSubmit} />
                    </Modal.Body>
                </Modal>
            </>

        )
    }

}

export default Profile