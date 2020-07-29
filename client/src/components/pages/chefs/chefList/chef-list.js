import React, { Component } from 'react'
import ChefService from '../../../../service/ChefService'
import UserService from '../../../../service/UserService'

import ChefCard from './chef-card'
import ChefForm from './chef-form'

import './chefList.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

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
            count: 0,
            favorites: this.props.loggedInUser ? this.props.loggedInUser.favorites : []
        }
        this.chefService = new ChefService()
        this.userService = new UserService()
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


    addFavorites = (chefId) => {
        const currentFavorites = [...this.props.loggedInUser.favorites]
        currentFavorites.push(chefId)
        const updatedFavorites = [...currentFavorites]
        const updateUser = { ...this.props.loggedInUser, favorites: updatedFavorites }
        this.userService.editProfile(this.props.loggedInUser._id, updateUser)
            .then((response) => {
                this.props.setTheUser(response.data)
            })
            .catch(err => console.log(err))
    }
    deleteFavorites = (chefId) => {
        const currentFavorites = [...this.props.loggedInUser.favorites]
        let updatedFavorites = currentFavorites.filter(chef => chef !== chefId)
        const updateUser = { ...this.props.loggedInUser, favorites: updatedFavorites }
        this.userService.editProfile(this.props.loggedInUser._id, updateUser)
            .then((response) => {
                this.props.setTheUser(response.data)
            })
            .catch(err => console.log(err))
    }

    //profile 
    displayFavorites = (chefId) => {
        const { loggedInUser } = this.props
        return (
            <>
                {loggedInUser && loggedInUser.favorites.length && loggedInUser.favorites.includes(chefId) ?
                    <div style={{ marginRight: "10px" }} onClick={() => this.deleteFavorites(chefId)}>
                        <FontAwesomeIcon icon={faHeart} size="1x" color="#F5B7B1" className="Button1" />
                    </div>
                    :
                    <div style={{ marginRight: "10px" }} onClick={() => this.addFavorites(chefId)}>
                        <FontAwesomeIcon icon={faHeart} size="1x" color="#E74C3C" className="Button1" />
                    </div>}
            </>
        )
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
                        {this.state.chefs.map(chef => (<ChefCard key={chef._id} {...chef} loggedInUser={this.props.loggedInUser} handleModal={this.handleModal} deleteChef={this.deleteChef} incrementMe={this.incrementMe} count={this.state.count} displayFavorites={this.displayFavorites}/>))}

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