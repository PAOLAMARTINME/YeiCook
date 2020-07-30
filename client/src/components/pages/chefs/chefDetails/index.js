import React, { Component } from 'react'
import ChefService from '../../../../service/ChefService'

import ChefComment from './chef-comment'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/esm/Button'
import Table from 'react-bootstrap/Table'


class ChefDetails extends Component {
    constructor() {
        super()
        this.state = {
            chefDetails: [],

        }
        this.chefService = new ChefService()
    }

    componentDidMount = () => this.updateDetails()

    updateDetails = () => {
        const id = this.props.match.params.id

        this.chefService
            .getOneChef(id)
            .then(response => this.setState({ chefDetails: response.data }))
            .catch(err => console.log(err))
    }

    handleDetailsSubmit = () => {
        this.updateDetails()
    }

    deleteComment = () => {
        this.chefService
            .deleteComment(this.props.match.params.id)
            .then(response => console.log(response))
            .catch(err => console.log(err))
        this.updateDetails()
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
                            <p><b>Tipo de servicio:</b> {this.state.chefDetails.type}</p>
                            <p><b>Especialidad:</b> {this.state.chefDetails.specialty}</p>
                            <p><b>Localización:</b> {this.state.chefDetails.location}</p>
                            <p><b>Contacto:</b> {this.state.chefDetails.contact}</p>
                            <hr></hr>

                            <Link className="btn btn-info btn-md" to='/chefs'>Volver</Link>
                            <hr></hr>

                            {this.props.loggedInUser &&
                                <Button variant="info" onClick={this.deleteComment}>Eliminar comentario</Button>
                            }

                            <Row>
                                <ChefComment id={this.props.match.params.id} handleDetailsSubmit={this.handleDetailsSubmit} />
                            </Row>
                            <hr></hr>
                            <Table striped bordered hover variant="info" className="table">
                                <thead>
                                    <th>Usario</th>
                                    <th>Comentarios</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            {this.state.chefDetails && this.state.chefDetails.comments.map(comment => <p>{comment}</p>)}
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>

                    </Row>

                </Container>
        )
    }
}

export default ChefDetails