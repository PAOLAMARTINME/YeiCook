import React from 'react'

import './navbar.css'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

// import AuthService from './../../../service/AuthService'

import { Link, NavLink } from 'react-router-dom'

const Navigation = () => {

    // constructor(props) {
    //     super(props)
    //     // this.AuthService = new AuthService()
    // }

    // logout = () => {
    //     this.AuthService
    //         .logout()
    //         .then(() => {
    //             this.props.setTheUser(false)
    //             this.props.handleToast(true, 'Usuario desconectado')
    //         })
    //         .catch(err => console.log(err))
    // }

    // render() {
        return (
            <Navbar expand="lg" sticky="top" >
                <Navbar.Brand>
                    <Link to="/"><Image className="logo" src="/images/yeiCookBlanco.png" alt="YeiCook"/></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as="span">
                            <NavLink to="/chefs" activeStyle={{ color: 'white' }}><Button className="button-nav" variant="outline-info">Chefs</Button></NavLink>
                        </Nav.Link>

                        {/* {this.props.loggedInUser ?
                            (
                                <Nav.Link as="span">
                                    <span onClick={this.logout}>Cerrar sesión</span>
                                </Nav.Link>
                            ) : ( */}
                                <>
                                    <Nav.Link as="span">
                                <NavLink to="/signup" activeStyle={{ color: 'white' }}><Button className="button-nav" variant="outline-info">Convertirse en chef</Button></NavLink>
                                    </Nav.Link>
                                    <Nav.Link as="span">
                                <NavLink to="/signup" activeStyle={{ color: 'white' }}><Button className="button-nav" variant="outline-info">Encontrar un chef</Button></NavLink>
                                    </Nav.Link>
                                    <Nav.Link as="span">
                                <NavLink to="/login" activeStyle={{ color: 'white' }}><Button className="button-nav" variant="outline-info">Inicio sesión</Button></NavLink>
                                    </Nav.Link>
                                </>
                            {/* )
                        } */}

                        {/* <Nav.Link as="span">
                            <NavLink to="/profile" activeStyle={{ color: 'white' }}>Hola, {this.props.loggedInUser ? this.props.loggedInUser.username : 'invitado'}</NavLink>
                        </Nav.Link> */}
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        )
    }


export default Navigation