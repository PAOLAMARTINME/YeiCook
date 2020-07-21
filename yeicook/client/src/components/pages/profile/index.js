import React, { Component } from 'react'
import './profile.css'

import AuthService from './../../../service/AuthService'

import ProfileEdit from './profile-edit'

import Container from 'react-bootstrap/Container'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            edit: false,
            showModal: false
        }
        this.AuthService = new AuthService()
    }

    handleModal = status => this.setState({ showModal: status })

    handleProfileSubmit = () => {
        this.handleModal(false)
        this.editProfile()
    }

    render() {
        const avatar = this.props.loggedInUser ? this.props.loggedInUser.avatar : "Coloca tu avatar";
        const name = this.props.loggedInUser ? this.props.loggedInUser.name : "Como te llamas?";
        const username = this.props.loggedInUser ? this.props.loggedInUser.username : "Mantendras tu username?";
        const location = this.props.loggedInUser ? this.props.loggedInUser.location : "Donde te encuentras?";
        return (
            <>
                <Container as="main" className="profile-page">
                    {
                        this.props.loggedInUser && <Button onClick={() => this.handleModal(true)} variant="info" size="sm" style={{ marginBottom: '20px' }}>Editar perfil</Button>
                    }
                    <Row>
                        <Image>{avatar}</Image>
                    </Row>
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
                        <ProfileEdit handleProfileSubmit={this.handleProfileSubmit} />
                    </Modal.Body>
                </Modal>
            </>
            
        )
    }

}

export default Profile