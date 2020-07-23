import React, { Component } from 'react'

import UserService from '../../../service/UserService'

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'


class EditProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            username: '',
            password: '',
            email: '',
            avatar: '',
            location: '',
            contact: '',
        }
        this.userService = new UserService()
        // this.filesService = new FilesService()
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    // handleFileUpload = e => {
    //     const uploadData = new FormData()
    //     uploadData.append("avatar", e.target.files[0])

    //     this.filesService.handleUpload(uploadData)
    //         .then(response => {
    //             console.log('Subida de archivo finalizada! La URL de Cloudinray es: ', response.data.secure_url)
    //             this.setState({ avatar: response.data.secure_url })
    //         })
    //         .catch(err => console.log(err))
    // }


    handleFormSubmit = e => {
        e.preventDefault()
        this.userService
            .editProfile(this.state)
            .then(() => this.props.handleFormSubmit())
            .catch(err => console.log(err))
    }

    render() {

        return (
            <>
                <Form>
                    <Form.Row>

                        <Form.Group controlId="title">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control name="name" type="text" placeholder="Nombre completo" value={this.state.name} onChange={this.handleInputChange}/>
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

                    {/* <Form.Group >
                        <Form.Label>Imagen (archivo)</Form.Label>
                        <Form.Control name="avatar" type="file" onChange={this.handleFileUpload} />
                    </Form.Group> */}


                    <Button variant="info" type="submit" > Editar</Button>

                </Form>
            </>

        )
    }
}


export default EditProfile