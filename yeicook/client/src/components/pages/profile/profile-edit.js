import React, { Component } from 'react'
import './profile.css'

import AuthService from './../../../service/AuthService'

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'


class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            edit: false,
            name: this.props.name,
            username: this.props.username,
            password: this.props.password,
            email: this.props.email,
            avatar: this.props.avatar,
            location: this.props.location,
            contact: this.props.contact,
            showModal: false
        }
        this.authService = new AuthService()
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleFormSubmit = e => {
        e.preventDefault()
        this.authService
            .editProfile(this.state)
            .then(() => this.props.handleFormSubmit())
            .catch(err => console.log(err))
    }

    render() {

        return (
            <>
                <Form>
                    <Form.Row>
                        
                        <Image className="avatar" src={this.props.avatar} alt="Avatar" />

                        <Form.Group controlId="formGridAddress1">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control placeholder="Paola Martin" value={this.props.name} onChange={this.handleInputChange}/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" value={this.props.email} onChange={this.handleInputChange} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Contraseña" value={this.props.password} onChange={this.handleInputChange}/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Dirección</Form.Label>
                        <Form.Control placeholder="Location" value={this.props.location} onChange={this.handleInputChange}/>
                    </Form.Group>


                    <Button variant="info" type="submit" onSubmit={this.handleFormSubmit}> Editar</Button>

                </Form>
            </>

        )
    }
}


export default Profile