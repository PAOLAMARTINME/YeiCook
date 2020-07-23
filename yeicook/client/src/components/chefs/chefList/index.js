import React, { Component } from 'react'
import ChefService from '../../../service/ChefService'

import ChefCard from './chefCard'
import ChefForm from './../chefForm'

import './chefList.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'


class ChefList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            chefs: [],
            showModal: false
        }
        this.chefService = new ChefService()
    }

    componentDidMount = () => this.updateChefList()

    updateChefList = () => {
        this.chefService
            .getAllChefs()
            .then(response => this.setState({ chefs: response.data }))
            .catch(err => console.log(err))
    }

    handleModal = status => this.setState({ showModal: status })

    handleChefSubmit = () => {
        this.handleModal(false)
        this.updateChefList()
    }

    render() {
        console.log("QUE ES ESTOOO",this.props.loggedInUser)
        return (

            <>
                <Container as="main" className="chef-page">

                    <h1>Listado de chefs</h1>

                    {
                        this.props.loggedInUser && this.props.loggedInUser.role === "ADMIN" ? <Button onClick={() => this.handleModal(true)} variant="info" size="sm" style={{ marginBottom: '20px' }}>Crear nuevo chef</Button> :null
                        //como colocar el boton solo para admin? tendria que colocar esto en la vista de admin?
                    }
                    {
                        this.props.loggedInUser && this.props.loggedInUser.role === "ADMIN" ? <Button onClick={() => this.deleteChef(true)} variant="info" size="sm" style={{ marginBottom: '20px' }}>Eliminar chef</Button> : null
                        //como colocar el boton solo para admin? tendria que colocar esto en la vista de admin?
                    }

                            <Row>
                                {this.state.chefs.map(elm => <ChefCard key= {elm.id} {...elm} />)}
                            </Row>
                </Container>

                <Modal size="lg" show={this.state.showModal} onHide={() => this.handleModal(false)}>
                    <Modal.Body>
                        <ChefForm handleChefSubmit={this.handleChefSubmit} />
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}
export default ChefList
