import React, { Component } from 'react'
import ChefService from '../../../../service/ChefService'

import ChefComment from './chef-comment'

import './chefDetails.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/esm/Button'
import Table from 'react-bootstrap/Table'

import Carousel from "react-bootstrap/Carousel";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'

class ChefDetails extends Component {
    constructor() {
        super()
        this.state = {
            chefDetails: [],
            chefComments: [],
            likes: 0,
            chefs: []

        }
        this.chefService = new ChefService()
    }

    componentDidMount = () => this.updateDetails()

    updateDetails = () => {
        const id = this.props.match.params.id
        this.chefService
            .getOneChef(id)
            .then(response => this.setState({ chefDetails: response.data }))
            .then(response => this.setState({ chefComments: response.data.comments }))
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

    addLike = () => {
        let newCount = this.state.likes + 1;
        this.setState({
            likes: newCount
        });
    };

    render() {
        return !this.state.chefDetails ? (
            <h3>Spinner</h3>
        ) : (
                <Container as="main">
                    <link
                        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                        rel="stylesheet"
                    />
                    <h1>{this.state.chefDetails.name}</h1>
                    <hr></hr>
                    <Row>
                        <Col md={{ span: 5, offset: 1 }}>
                            <div class="chef-profile">
                                <div id="avatar">
                                    <Row>
                                        <img src={this.state.chefDetails.avatar} alt="Avatar" />
                                    </Row>
                                </div>
                                <div id="cover-chef"></div>
                                <div id="info">
                                    <ul>
                                        <li id="username">
                                            <b>Tipo de servicio:</b> {this.state.chefDetails.type}
                                        </li>
                                        <li>
                                            <b>Tipo de servicio:</b> {this.state.chefDetails.type}
                                        </li>
                                        <li>
                                            <b>Especialidad:</b> {this.state.chefDetails.specialty}
                                        </li>
                                        <li>
                                            <i class="fa fa-map-marker"></i><b>Localización:</b> {this.state.chefDetails.location}
                                        </li>
                                        <li>
                                            <i class="fa fa-phone"></i> <b>Contacto:</b>{" "}
                                            {this.state.chefDetails.contact}
                                        </li>
                                    </ul>

                                    <div onClick={this.addLike} id={this.props.likeId} style={{ alignSelf: 'center' }}>
                                        <FontAwesomeIcon icon={faThumbsUp} size="lg" color="black" className="likes-count" />
                                        {this.state.likes}
                                    </div>

                                    <div>
                                        <h3>Galeria de Platos</h3>
                                        <Carousel>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-1640777.jpg&fm=jpg"
                                                    alt="Ensalada"
                                                />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src="https://images.pexels.com/photos/302552/pexels-photo-302552.jpeg?cs=srgb&dl=pexels-jill-wellington-302552.jpg&fm=jpg"
                                                    alt="Postre"
                                                />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src="https://images.pexels.com/photos/3820995/pexels-photo-3820995.jpeg?cs=srgb&dl=pexels-agung-pandit-wiguna-3820995.jpg&fm=jpg"
                                                    alt="Principal"
                                                />
                                            </Carousel.Item>
                                        </Carousel>
                                    </div>
                                </div>
                                <div id="boton">
                                    <Link className="btn btn-light btn-md" to="/chefs">Volver</Link>
                                </div>
                            </div>
                            <Row>
                                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                                    <Tab eventKey="home" title="Agregar Comentario">
                                        <div id="add-comment">
                                            <ChefComment
                                                id={this.props.match.params.id}
                                                handleDetailsSubmit={this.handleDetailsSubmit}
                                            />
                                        </div>
                                    </Tab>
                                    <Tab eventKey="profile" title="Comentarios">
                                        {/* imprimir comentarios */}
                                        {/* <ChefComment id={this.props.match.params.id} handleDetailsSubmit={this.handleDetailsSubmit} /> */}
                                        
                                    </Tab>
                                </Tabs>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            );
    }
}
export default ChefDetails




















































//     render() {
//         return (

//             !this.state.chefDetails ? <h3>Spinner</h3> :

//                 <Container as="main">

//                     <h1>{this.state.chefDetails.name}</h1>
//                     <hr></hr>
//                     <Row>
//                         <Col md={{ span: 5, offset: 1 }}>
//                             <img src={this.state.chefDetails.avatar} alt="Avatar" />
//                             <p><b>Tipo de servicio:</b> {this.state.chefDetails.type}</p>
//                             <p><b>Especialidad:</b> {this.state.chefDetails.specialty}</p>
//                             <p><b>Localización:</b> {this.state.chefDetails.location}</p>
//                             <p><b>Contacto:</b> {this.state.chefDetails.contact}</p>
//                             <hr></hr>

//                             <div onClick={this.addLike} id={this.props.likeId} style={{ alignSelf: 'center' }}>
//                                 <FontAwesomeIcon icon={faThumbsUp} size="lg" color="black" className="likes-count" />
//                                 {this.state.likes}
//                             </div>

//                             <Link className="btn btn-info btn-md" to='/chefs'>Volver</Link>

//                             <hr></hr>


//                             <Row>
//                                 <ChefComment id={this.props.match.params.id} handleDetailsSubmit={this.handleDetailsSubmit} />
//                             </Row>
//                             <hr></hr>
//                             <Table striped bordered hover variant="info" className="table">
//                                 <thead>
//                                     <tr>
//                                         <th>Usario</th>
//                                         <th>Comentarios</th>
//                                         <th> Eliminar </th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>

//                                     {/* {this.state.chefDetails && this.state.chefDetails.comments.map((elem, key) => {

//                                     return (
//                                         <tr key={key}>
//                                             <td></td>
//                                             <td></td>
//                                             <td><Button variant="info" onClick={this.deleteComment}>Eliminar comentario</Button></td>
//                                         </tr>)
//                                 })} */}

//                                 </tbody>
//                             </Table>

//                         </Col>

//                     </Row>

//                 </Container>
//         )
//     }
// }

// export default ChefDetails