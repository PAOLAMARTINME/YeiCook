import React, { Component } from 'react'

import ChefService from '../../../../service/ChefService'
// import FilesService from '../../../../service/FilesService'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class ChefForm extends Component {
    constructor(props) {
        super(props)
        const { editingChef } = this.props
        this.state = {
            id: editingChef ? editingChef._id : '',
            avatar: editingChef ? editingChef.avatar : '',
            name: editingChef ? editingChef.name : '',
            type: editingChef ? editingChef.type : '',
            specialty: editingChef ? editingChef.specialty : '',
            location: editingChef ? editingChef.location : '',
            contact: editingChef ? editingChef.contact : '',
            certificate: 'true',
            title: 'true',
            img: editingChef ? editingChef.img : ''
        }
        this.chefService = new ChefService()
        // this.filesService = new FilesService()   
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleFormSubmit = e => {
        e.preventDefault()
        const uploadData = new FormData()
        Object.keys(this.state).forEach((key) => {
            uploadData.append(key, this.state[key])
        })
        if (this.state.id) {
            this.chefService
                .editChef(this.state.id, this.state, uploadData)
                .then(() => this.props.finishFormSubmit())
                .catch(err => console.log(err))

        } else {
            this.chefService
                .createChef(this.state, uploadData)
                .then(() => this.props.finishFormSubmit())
                .catch(err => console.log(err))
        }
    }

    render() {
 
        return (
            <>
                <h3>{this.state.id? 'Editar chef' : 'Nuevo chef'}</h3>
                <hr></hr>
                <Form onSubmit={this.handleFormSubmit}>
                    <Form.Group>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.name} name="name" type="text" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Tipo de comida</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.type} name="type" type="text" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Especialidad</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.specialty} name="specialty" type="text" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Localización</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.location} name="location" type="text" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Contacto</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.contact} name="contact" type="number" />
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="certificate" />
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="title" />
                    </Form.Group>

                    {/* // CLOUDINARYCONFIG   */}
                    <Form.Group>
                        <Form.Label>Imagen (archivo)</Form.Label>
                        <Form.Control name="avatar" type="file" onChange={this.handleFormSubmit} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Imagen plato (archivo)</Form.Label>
                        <Form.Control name="img" type="file" onChange={this.handleFormSubmit} />
                    </Form.Group>

                    <Button variant="info" type="submit">Guardar</Button>

                </Form>
            </>
        )
    }
}

export default ChefForm