import React, { Component } from 'react'
import ChefService from '../../../../service/ChefService'

// import FilesService from '../../../service/FilesService'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class ChefForm extends Component {
    constructor(props) {
        const { seletedChef } = this.props;
        super(props)
        this.state = {
            id: seletedChef ? seletedChef._id : '',
            avatar: seletedChef ? seletedChef.avatar : '',
            name: seletedChef ? seletedChef.name :'',
            type: seletedChef ? seletedChef.type :'',
            specialty: seletedChef ? seletedChef.specialty :'',
            location: seletedChef ? seletedChef.location :'',
            contact: seletedChef ? seletedChef.contact :'',
            certificate: 'true',
            title: 'true',
            img: seletedChef ? seletedChef.img :''
        }
        this.chefService = new ChefService()
        // this.filesService = new FilesService()    // CLOUDINARYCONFIG  
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    // // CLOUDINARYCONFIG  
    // handleFileUpload = e => {
    //     const uploadData = new FormData()
    //     uploadData.append("imageUrl", e.target.files[0])

    //     this.filesService.handleUpload(uploadData)
    //         .then(response => {
    //             console.log('Subida de archivo finalizada! La URL de Cloudinray es: ', response.data.secure_url)
    //             this.setState({ imageUrl: response.data.secure_url })
    //         })
    //         .catch(err => console.log(err))
    // }

    handleFormSubmit = e => {
        e.preventDefault()
        this.chefService
            .createChef(this.state)
            .then(() => this.props.handleChefSubmit())
            .catch(err => console.log(err))
    }

    render() {
        return (
            <>
                <h3>Nuevo chef</h3>
                <hr></hr>
                <Form onSubmit={(e) => this.props.handleFormSubmit(e, { id: this.state.id, name: this.state.name, type: this.state.type, specialty: this.state.specialty, location: this.state.location, contact: this.state.contact, certificate: this.state.certificate, title: this.state.title, img: this.state.img })}>
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

                    {/* // CLOUDINARYCONFIG  
                    <Form.Group>
                        <Form.Label>Imagen (archivo)</Form.Label>
                        <Form.Control name="imageUrl" type="file" onChange={this.handleFileUpload} />
                    </Form.Group> */}

                    <Button variant="info" type="submit">submit</Button>
                    
                </Form>
            </>
        )
    }
}

export default ChefForm