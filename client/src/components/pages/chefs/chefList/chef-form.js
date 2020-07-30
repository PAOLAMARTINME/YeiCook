import React, { Component } from 'react'
import ChefService from '../../../../service/ChefService'
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
    }
    handleInputChange = e => {
        const value = e.target.type === "file" ? e.target.files[0] : e.target.value
        this.setState({ [e.target.name]: value })
    }
    handleFormSubmit = e => {
        e.preventDefault()
        const uploadData = new FormData()
        Object.keys(this.state).forEach((key) => {
            uploadData.append(key, this.state[key])
        })
        if (this.state.id) {
            this.chefService
                .editChef(this.state.id, uploadData)
                .then(() => this.props.finishFormSubmit())
                .catch(err => console.log(err))
        } else {
            this.chefService
                .createChef(uploadData)
                .then(() => this.props.finishFormSubmit())
                .catch(err => console.log(err))
        }
    }
    render() {
        return (
            <>
                <h3>{this.state.id ? 'Editar chef' : 'Nuevo chef'}</h3>
                <hr></hr>
                <Form onSubmit={this.handleFormSubmit}>
                    <Form.Group>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.name} name="name" type="text" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Tipo de servicio</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.type} name="type" type="text" as="select" custom>
                            <option>Cocktail/catering</option>
                            <option>Desayunos</option>
                            <option>Comidas</option>
                            <option>Cenas</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.SelectCustom">
                        <Form.Label>Especilidad</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.specialty} name="specialty" type="text" as="select" custom>
                            <option>Vegana</option>
                            <option>Vegetariana</option>
                            <option>Sin gluten</option>
                            <option>Saludable</option>
                            <option>Apto para diabéticos</option>
                            <option>Mediterranea</option>
                        </Form.Control>
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
                        <Form.Check onChange={this.handleInputChange} value={this.state.certificate} type="checkbox" label="Certificado manipulador de alimentos" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check onChange={this.handleInputChange} value={this.state.title} type="checkbox" label="Titulo Profesional" />
                    </Form.Group>
                    {/* // CLOUDINARYCONFIG   */}
                    <Form.Group>
                        <Form.Label>Avatar (archivo)</Form.Label>
                        <Form.Control name="avatar" type="file" onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Imagen plato (archivo)</Form.Label>
                        <Form.Control name="img" type="file" onChange={this.handleInputChange} />
                    </Form.Group>
                    <Button variant="info" type="submit">Guardar</Button>
                </Form>
            </>
        )
    }
}
export default ChefForm






