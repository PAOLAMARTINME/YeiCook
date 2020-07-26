import React, { Component } from 'react'

import UserService from '../../../service/UserService'
import FilesService from '../../../service/FilesService'

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'


class EditProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // id: this.props.id,
            // name: this.props.loggedInUser ? this.props.loggedInUser.name : "",
            // username: this.props.loggedInUser ? this.props.loggedInUser.username : "",
            // password: this.props.loggedInUser ? this.props.loggedInUser.password : "",
            // email: this.props.loggedInUser ? this.props.loggedInUser.email : "",
            // avatar: this.props.loggedInUser ? this.props.loggedInUser.avatar : "",
            // location: this.props.loggedInUser ? this.props.loggedInUser.location : "",
            // contact: this.props.loggedInUser ? this.props.loggedInUser.contact : "",
            name: this.props.name,
            username: this.props.username,
            email: this.props.email,
            avatar: this.props.avatar,
            location: this.props.location,
            contact: this.props.contact,
        }
        this.userService = new UserService()
        this.filesService = new FilesService()
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    // CLOUDINARYCONFIG  
    handleFileUpload = e => {
        const uploadData = new FormData()
        uploadData.append("avatar", e.target.files[0])

        this.filesService.handleUpload(uploadData)
            .then(response => {
                console.log('Subida de archivo finalizada! La URL de Cloudinray es: ', response.data.secure_url)
                this.setState({ avatar: response.data.secure_url })
            })
            .catch(err => console.log(err))
    }

    handleFormSubmit = e => {
        e.preventDefault()
        this.userService
            .editProfile(this.props.id, this.state)
            .then(() => this.props.handleProfileSubmit())
            .catch(err => console.log(err))
    }

    render() {

        return (
            <>
                <Form onSubmit={this.handleFormSubmit}>
                    <Form.Row>
                        
                        {/* // CLOUDINARYCONFIG   */}
                        <Form.Group>
                            <Form.Label>Imagen (archivo)</Form.Label>
                            <Form.Control name="avatar" type="file" onChange={this.handleFileUpload} />
                        </Form.Group>
                        
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