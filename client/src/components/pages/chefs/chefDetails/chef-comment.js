import React, { Component } from 'react'

import ChefService from '../../../../service/ChefService'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class ChefComment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: [],
        };

        this.chefService = new ChefService()
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleFormSubmit= e => {
        e.preventDefault();
        this.chefService
            .createComments(this.props.id, this.state)
            .then(response => console.log('RESPONSE', response))
            .then(() => this.props.handleDetailsSubmit())
            .catch(err => console.log(err))

    }


    render() {
       
        return (
            <>
                <Form onSubmit={this.handleFormSubmit}>
                    <Form.Group>
                        
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control onChange={this.handleInputChange} type="text" />
                    
                 
                        <Form.Label>Comentario</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.comments} name="comments" type="text" />
                    </Form.Group>

                    <Button variant="info" type="submit">Guardar</Button>

                </Form>

            </>
        )
    }
}
export default ChefComment