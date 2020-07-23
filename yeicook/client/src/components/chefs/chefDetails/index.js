import React, { Component } from 'react'
import ChefService from '../../../service/ChefService'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { Link } from 'react-router-dom'

class ChefDetails extends Component {
    constructor() {
        super()
        this.state = {
            chefDetails: [],
        }
        this.chefService = new ChefService()
    }

    componentDidMount = () => {

        const id = this.props.match.params.id

        this.chefService
            .getOneChef(id)
            .then(response => this.setState({ chefDetails: response.data }))
            .catch(err => console.log(err))
    }

    render() {

        return (

            !this.state.chefDetails ? <h3>Spinner</h3> :

                <Container as="main">

                    <h1>{this.state.chefDetails.name}</h1>
                    <hr></hr>
                    <Row>
                        <Col md={{ span: 5, offset: 1 }}>
                            <img src={this.state.chefDetails.avatar} alt="Avatar" />
                            <p><b>Tipo de comida:</b> {this.state.chefDetails.type}</p>
                            <p><b>Especialidad:</b> {this.state.chefDetails.specialty}</p>
                            <p><b>Localización:</b> {this.state.chefDetails.location}</p>
                            <p><b>Contacto:</b> {this.state.chefDetails.contact}</p>
                            <hr></hr>

                            <Link className="btn btn-info btn-md" to='/chefs'>Volver</Link>
                        </Col>
                        <Col md={{ span: 4, offset: 1 }}>
                            <img src={this.state.chefDetails.img} alt="Imagen" />
                        </Col>
                    </Row>

                </Container>
        )
    }
}

export default ChefDetails