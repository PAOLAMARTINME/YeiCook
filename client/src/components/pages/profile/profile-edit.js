import React, { Component } from 'react'

import UserService from '../../../service/UserService'

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'


class EditProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // id: this.props.loggedInUser ? this.props.loggedInUser.id : "",
            // name: this.props.loggedInUser ? this.props.loggedInUser.name : "",
            // username: this.props.loggedInUser ? this.props.loggedInUser.username : "",
            // password: this.props.loggedInUser ? this.props.loggedInUser.password : "",
            // email: this.props.loggedInUser ? this.props.loggedInUser.email : "",
            // avatar: this.props.loggedInUser ? this.props.loggedInUser.avatar : "",
            // location: this.props.loggedInUser ? this.props.loggedInUser.location : "",
            // contact: this.props.loggedInUser ? this.props.loggedInUser.contact : "",
            id: this.props.user.id,
            name: this.props.user.name,
            username: this.props.user.username,
            password: this.props.user.password,
            email: this.props.user.email,
            avatar: this.props.user.avatar,
            location: this.props.user.location,
            contact: this.props.user.contact,
        }
        this.userService = new UserService()
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleFormSubmit = e => {
        e.preventDefault()
        this.userService
            .editProfile(this.state.id, this.state)
            .then(() => this.props.handleProfileSubmit())
            .catch(err => console.log(err))
    }

    render() {

        return (
            <>
                <Form>
                    <Form.Row onSubmit={this.handleFormSubmit}>
                        <Form.Group controlId="title">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control name="name" type="text" placeholder="Nombre completo" value={this.state.name} onChange={this.handleInputChange}/>
                        </Form.Group>
                        <Form.Group controlId="title">
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control name="username" type="text" placeholder="Nombre de usuario" value={this.state.username} onChange={this.handleInputChange} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control name="email" type="email" placeholder="Email" value={this.state.email} onChange={this.handleInputChange} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control name="password" type="password" placeholder="Contraseña" value={this.state.password} onChange={this.handleInputChange}/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Dirección</Form.Label>
                        <Form.Control name="location" type="text" placeholder="Location" value={this.state.location} onChange={this.handleInputChange}/>
                    </Form.Group>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Contacto</Form.Label>
                        <Form.Control name="contact" type="number" placeholder="Contact" value={this.state.contact} onChange={this.handleInputChange} />
                    </Form.Group>

                  <Button variant="info" type="submit" > Editar</Button>

                </Form>
            </>

        )
    }
}


export default EditProfile