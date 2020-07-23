import React, { Component } from 'react'
import ChefService from '../../../../service/ChefService'

import ChefCard from './chef-card'
import ChefForm from './chef-form'

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
            Chef: null,
            showModal: false,
            isCreating: true,
      
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

    deleteChef = (id) => {
        this.chefService.deleteChef(id)
            .then(response => {
                const newChefs = this.state.chefs.filter(chef => chef._id !== id)
                this.setState({ chefs: newChefs })
            })
            .catch(err => console.log(err))
    }

    handleModal = (status,id) => this.setState({ showModal: status, chef:id }) 
    

    
    finishFormSubmit = () => {
        this.handleModal(false)
        this.updateChefList()
    }

    render() {
        const editingChef = this.state.chef ? this.state.chefs.filter(elm => elm._id === this.state.chef)[0] : {}
        
        return (

            <>
                <Container as="main" className="chef-page">
                    {
                        this.props.loggedInUser && this.props.loggedInUser.role === "ADMIN" ? <Button onClick={() => this.handleModal(true)} variant="info" size="sm" style={{ marginBottom: '20px' }}>Crear nuevo chef</Button> : null
                    }

                    <Row>
                        {this.state.chefs.map(chef => (<ChefCard key={chef._id} {...chef} handleModal={this.handleModal} deleteChef={this.deleteChef} />))}

                    </Row>
                </Container>

               <Modal size="lg"
                    show={this.state.showModal}
                    onHide={() => this.handleModal(false)}>
                        <Modal.Body>
                        {this.state.isCreating
                            ?
                            <ChefForm onHide={this.onHide} editingChef={editingChef}  finishFormSubmit={this.finishFormSubmit} />
                            :
                            <ChefForm onHide={this.onHide} finishFormSubmit={this.finishFormSubmit} isCreating/>
                        }
                        </Modal.Body>
                </Modal> 

            </>
        )
    }
}
export default ChefList