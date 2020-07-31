import React, { Component } from 'react'

import UserService from '../../../service/UserService'

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'


class EditProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.loggedInUser._id,
            name: this.props.loggedInUser.name,
            username: this.props.loggedInUser.username,
            email: this.props.loggedInUser.email,
            avatar: this.props.loggedInUser.avatar,
            location: this.props.loggedInUser.location,
            contact: this.props.loggedInUser.contact,
        }
        this.userService = new UserService()
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
        this.userService
            .editProfile(this.props.loggedInUser._id, uploadData)
            .then((response) => this.props.setTheUser(response.data))
            .catch(err => console.log(err))
        
    }

    render() {
        return (
            <>
                <div id="profile-form">
                    <Form onSubmit={this.handleFormSubmit}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="title">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control
                                    name="name"
                                    type="text"
                                    placeholder="Nombre completo"
                                    value={this.state.name}
                                    onChange={this.handleInputChange}
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId="title">
                                <Form.Label>Usuario</Form.Label>
                                <Form.Control
                                    name="username"
                                    type="text"
                                    placeholder="Nombre de usuario"
                                    value={this.state.username}
                                    onChange={this.handleInputChange}
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    value={this.state.email}
                                    onChange={this.handleInputChange}
                                />
                            </Form.Group>
                        </Form.Row>
                        <Form.Group controlId="formGridAddress1">
                            <Form.Label>Dirección</Form.Label>
                            <Form.Control
                                name="location"
                                type="text"
                                placeholder="Location"
                                value={this.state.location}
                                onChange={this.handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="formGridAddress1">
                            <Form.Label>Contacto</Form.Label>
                            <Form.Control
                                name="contact"
                                type="number"
                                placeholder="Contact"
                                value={this.state.contact}
                                onChange={this.handleInputChange}
                            />
                        </Form.Group>
                        {/* // CLOUDINARYCONFIG   */}
                        <Form.Group>
                            <Form.Label>Avatar</Form.Label>
                            <Form.Control
                                name="avatar"
                                type="file"
                                onChange={this.handleInputChange}
                            />
                        </Form.Group>
                        <div id="button-form">
                            <Button variant="info" type="submit">
                                {" "}
            Editar
          </Button>
                        </div>
                    </Form>
                </div>
            </>
        );
    }
}
    export default EditProfile





























//     render() {

//         return (
//             <>
//                 <Form onSubmit={this.handleFormSubmit}>
//                     <Form.Row>
                        
//                         {/* // CLOUDINARYCONFIG   */}
//                         <Form.Group>
//                             <Form.Label>Imagen (archivo)</Form.Label>
//                             <Form.Control name="avatar" type="file" onChange={this.handleInputChange} />
//                         </Form.Group>
                        
//                         <Form.Group controlId="title">
//                             <Form.Label>Nombre</Form.Label>
//                             <Form.Control name="name" type="text" placeholder="Nombre completo" value={this.state.name} onChange={this.handleInputChange}/>
//                         </Form.Group>
//                         <Form.Group controlId="title">
//                             <Form.Label>Usuario</Form.Label>
//                             <Form.Control name="username" type="text" placeholder="Nombre de usuario" value={this.state.username} onChange={this.handleInputChange} />
//                         </Form.Group>
//                         <Form.Group as={Col} controlId="formGridEmail">
//                             <Form.Label>Email</Form.Label>
//                             <Form.Control name="email" type="email" placeholder="Email" value={this.state.email} onChange={this.handleInputChange} />
//                         </Form.Group>
//                     </Form.Row>

//                     <Form.Group controlId="formGridAddress1">
//                         <Form.Label>Dirección</Form.Label>
//                         <Form.Control name="location" type="text" placeholder="Location" value={this.state.location} onChange={this.handleInputChange}/>
//                     </Form.Group>

//                     <Form.Group controlId="formGridAddress1">
//                         <Form.Label>Contacto</Form.Label>
//                         <Form.Control name="contact" type="number" placeholder="Contact" value={this.state.contact} onChange={this.handleInputChange} />
//                     </Form.Group>

//                     <Button variant="info" type="submit" > Editar</Button>

//                 </Form>
           
//             </>

//         )
//     }
// }


// export default EditProfile