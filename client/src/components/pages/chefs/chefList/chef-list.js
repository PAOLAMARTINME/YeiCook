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
            count: 0
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

    handleModal = (status, id) => this.setState({ showModal: status, chef: id })



    finishFormSubmit = () => {
        this.handleModal(false)
        this.updateChefList()
    }


    incrementMe = (id) => {
        let newCount
        const chefFilter = this.state.chefs.filter((chef) => {
            console.log(chef._id === id)
            if (chef._id === id) {
                return newCount = this.state.count + 1
// con return viene el objeto sin return viene un array vacio
            }
        });
        console.log(chefFilter)
        this.chefService
            .like(id)
            .then(response => {
                const chef = chefFilter[0] // accedo al objeto del array (chef)
                const addLike = Object.assign(chef, response.data) //añado el valor de like como nueva propiedad del objeto de chef (response.data es el like)
                const like = addLike.like// accedo directo a la propiedad del objeto 
                this.setState({ count: like }) // actualizo el estado
            })
            .catch(err => console.log('HAY UN PROBLEMA',err))
    }

    // incrementMe = (id) => {
    //     let newCount = this.state.count + 1
    //     this.chefService
    //         .like(id)
    //         .then(response => {
    //             const newLikes = this.state.chefs.filter(chef => chef._id === id)
    //             console.log('HOLA', response.data)
    //             this.setState({ count: newCount })
    //         })
    //         .catch(err => console.log('HAY UN PROBLEMA', err))
    // }


    render() {
        const editingChef = this.state.chef ? this.state.chefs.filter(elm => elm._id === this.state.chef)[0] : {}
        return (

            <>
                <Container as="main" className="chef-page">
                    {
                        this.props.loggedInUser && this.props.loggedInUser.role === "ADMIN" ? <Button onClick={() => this.handleModal(true)} variant="info" size="sm" style={{ marginBottom: '20px' }}>Crear nuevo chef</Button> : null
                    }


                    <Row>
                        {this.state.chefs.map(chef => (<ChefCard key={chef._id} {...chef} loggedInUser={this.props.loggedInUser} like={this.like} handleModal={this.handleModal} deleteChef={this.deleteChef} incrementMe={this.incrementMe} count={this.state.count} />))}

                    </Row>
                </Container>

                <Modal size="lg"
                    show={this.state.showModal}
                    onHide={() => this.handleModal(false)}>
                    <Modal.Body>
                        {this.state.isCreating
                            ?
                            <ChefForm onHide={this.onHide} editingChef={editingChef} finishFormSubmit={this.finishFormSubmit} />
                            :
                            <ChefForm onHide={this.onHide} finishFormSubmit={this.finishFormSubmit} isCreating />
                        }
                    </Modal.Body>
                </Modal>

            </>
        )
    }
}
export default ChefList