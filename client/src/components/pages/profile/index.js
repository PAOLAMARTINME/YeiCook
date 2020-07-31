import React, { Component } from 'react'

import ChefService from '../../../service/ChefService'
import EditProfile from './profile-edit'

import ChefCard from '../chefs/chefList/chef-card'

import './profile.css'

import Container from 'react-bootstrap/Container'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import UserService from '../../../service/UserService'

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.loggedInUser._id || '',
            name: this.props.loggedInUser.name || '',
            username: this.props.loggedInUser.username || '',
            email: this.props.loggedInUser.email || '',
            avatar: this.props.loggedInUser.avatar || '',
            location: this.props.loggedInUser.location || '',
            contact: this.props.loggedInUser.contact || '',
            favorites: this.props.loggedInUser ? this.props.loggedInUser.favorites : [],
            chefs: [],
            chefsFavorites: [],
            showModal: false
        }
        this.chefService = new ChefService()
        this.userService = new UserService()
    }
    componentDidMount = () => {
        this.getChefList()
    }
    componentDidUpdate = (prevProps) => {
        if (!prevProps.loggedInUser && this.props.loggedInUser) {
            this.setState({ favorites: this.props.loggedInUser.favorites })
        }
    }
    getChefList = () => {
        this.chefService
            .getAllChefs()
            .then(response => {
                this.setState({ chefs: response.data })
                this.getFavorites()
            })
            .catch(err => console.log(err))
    }
    getFavorites = () => {
        const savedFavorites = this.state.chefs.filter(chef => this.state.favorites.includes(chef._id))
        this.setState({ chefsFavorites: savedFavorites })
    }
    handleModal = (status, id) => this.setState({ showModal: status, user: id })

    handleProfileSubmit = () => {
        this.handleModal(false)
        this.getOneProfile()
    }
 

    render() {
        return (
            <>
                <Container as="main">
                    <h1>Bienvenid@ {this.props.loggedInUser.username}</h1>
                    <Row>
                        <link
                            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                            rel="stylesheet"
                        />
                        <div id="social">
                            <ul>
                                <li id="twitter">
                                    <i class="fa fa-twitter"></i>
                                </li>
                                <li id="facebook">
                                    <i class="fa fa-facebook"></i>
                                </li>
                                <li id="instagram">
                                    <i class="fa fa-instagram"></i>
                                </li>
                            </ul>
                        </div>
                        <div class="profile">
                            <div id="avatar">
                                <Row>
                                    <Image
                                        className="avatarDefault"
                                        src={this.props.loggedInUser.avatar}
                                    ></Image>
                                </Row>
                            </div>
                            <div id="cover"></div>
                            <div id="info">
                                <ul>
                                    <li id="username">
                                        <span>{this.props.loggedInUser.username}</span>
                                    </li>
                                    <li>
                                        <i class="far fa-user"></i> Nombre:{" "}
                                        {this.props.loggedInUser.name}
                                    </li>
                                    <li>
                                        <i class="fa fa-map-marker"></i> Dirección:{" "}
                                        {this.props.loggedInUser.location}
                                    </li>
                                    <li>
                                        <i class="fa fa-globe"></i> Email:{" "}
                                        {this.props.loggedInUser.email}
                                    </li>
                                    <li>
                                        <i class="fa fa-phone"></i> Contacto:{" "}
                                        {this.props.loggedInUser.contact}
                                    </li>
                                </ul>
                            </div>
                            <div class="clear"></div>
                            <div id="logo">
                                {this.props.loggedInUser && (
                                    <Button
                                        onClick={() => this.handleModal(true)}
                                        variant="light"
                                        size="sm"
                                        style={{ marginBottom: "20px" }}>
                                        Editar perfil
                                    </Button>
                                )}
                            </div>
                        </div>
                    </Row>
                    <h3>Mis chefs favoritos</h3>
                    <Row className="cards">
                        <Row>
                            {this.state.chefsFavorites.map((chef) => (
                                <ChefCard
                                    className="card"
                                    key={chef._id}
                                    {...chef}
                                    displayFavorites={this.displayFavorites}
                                    loggedInUser={this.state.loggedInUser}
                                />
                            ))}
                        </Row>
                    </Row>
                </Container>
                <Modal
                    size="lg"
                    show={this.state.showModal}
                    onHide={() => this.handleModal(false)}
                >
                    <Modal.Body>
                        {this.state.showModal ? (
                            <EditProfile
                                {...this.state}
                                loggedInUser={this.props.loggedInUser}
                                setTheUser={this.props.setTheUser}
                                handleProfileSubmit={this.handleProfileSubmit}
                            />
                        ) : null}
                    </Modal.Body>
                </Modal>
            </>
        );
    }
}

export default Profile































//     render() {
 
//         return (
//             <>
//                 <Container as="main" className="profile-page">
//                     <h1>Bienvenid@ {this.props.loggedInUser.username}</h1>
//                     {
//                         this.props.loggedInUser && <Button onClick={() => this.handleModal(true)} variant="info" size="sm" style={{ marginBottom: '20px' }}>Editar perfil</Button>
//                     }
//                     <Row>
//                         <Image className="avatarDefault" src={this.props.loggedInUser.avatar}></Image>
//                     </Row>

//                     <Card style={{ width: '45rem' }}>
//                          <ListGroup variant="flush">
//                              <ListGroup.Item><h2>{this.props.loggedInUser.username}</h2></ListGroup.Item>
//                              <ListGroup.Item><h5>Nombre: {this.props.loggedInUser.name}</h5></ListGroup.Item>
//                              <ListGroup.Item><h5>Email: {this.props.loggedInUser.email}</h5></ListGroup.Item>
//                              <ListGroup.Item><h5>Localización: {this.props.loggedInUser.location}</h5></ListGroup.Item>
//                              <ListGroup.Item><h5>Contacto: {this.props.loggedInUser.contact}</h5></ListGroup.Item>
//                          </ListGroup>
//                      </Card>
                    
//                     <h1>Mis chefs favoritos</h1>

//                     <Row>
//                     {this.state.chefsFavorites.map(chef =>
//                         (<ChefCard key={chef._id} {...chef} displayFavorites={this.displayFavorites} loggedInUser={this.state.loggedInUser} />)
//                         )}
//                     </Row>

//                 </Container>
//                 <Modal size="lg" show={this.state.showModal} onHide={() => this.handleModal(false)}>
//                     <Modal.Body>
//                         {this.state.showModal ?
//                             <EditProfile {...this.state} loggedInUser={this.props.loggedInUser} setTheUser={this.props.setTheUser} handleProfileSubmit={this.handleProfileSubmit} /> : null}
//                     </Modal.Body>
//                 </Modal>
//             </>
//         )
//     }
// }
// export default Profile




































