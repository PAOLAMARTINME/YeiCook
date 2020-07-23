import React, { Component } from 'react'

import UserService from './../../../service/UserService'


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
            // edit: false,
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
        const avatar = this.props.loggedInUser ? this.props.loggedInUser.avatar : "";
        const name = this.props.loggedInUser ? this.props.loggedInUser.name : "Hola";
        const username = this.props.loggedInUser ? this.props.loggedInUser.username : "Chao";
        const location = this.props.loggedInUser ? this.props.loggedInUser.location : "Chao";
        return (
            <>

                <Container as="main" className="profile-page">
                    <Row>
                        <Image className="avatarDefault" src={avatar}></Image>
                    </Row>

                    {
                        this.props.loggedInUser && <Button onClick={() => this.handleModal(true)} variant="info" size="sm" style={{ marginBottom: '20px' }}>Editar perfil</Button>
                    }

                    <Row>
                        <h1>{name}</h1>
                    </Row>
                    <Row>
                        <h1>{username}</h1>
                    </Row>
                    <Row>
                        <h1>{location}</h1>
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