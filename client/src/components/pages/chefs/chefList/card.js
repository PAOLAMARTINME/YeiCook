// import React, { Component } from 'react'

// import ChefService from '../../../../service/ChefService'

// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'

// class Card extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             id: this.props.id,
//             avatar: this.props.avatar,
//             name: this.props.name,
//             type: editingChef ? editingChef.type : '',
//             specialty: editingChef ? editingChef.specialty : '',
//             location: editingChef ? editingChef.location : '',
//             contact: editingChef ? editingChef.contact : '',
//             certificate: 'true',
//             title: 'true',
//             img: editingChef ? editingChef.img : ''
//              count: 0
//         }
//         this.chefService = new ChefService()
//     }


//     incrementMe = (id) => {
//         this.chefService.like(id)
//         let newCount = this.state.count + 1
//         this.setState({
//             count: newCount
//         })
//     }

//     render() {

//         return (
//             <>
//                 <Col md={3}>
//                     <Card className="chefcard">
//                         <Card.Img variant="top" src={avatar} />
//                         <Card.Body>
//                             <Card.Title>{name}</Card.Title>
//                             <Card.Text>{type}</Card.Text>
//                             <Card.Text>{specialty}</Card.Text>
//                             <Card.Text>{location}</Card.Text>
//                             <Card.Img variant="top" src={img} />
//                             <Button onClick={() => incrementMe(_id)} variant="info" className="likes-count" size="sm" style={{ marginBottom: '20px' }}>Me gusta: {count}</Button>
//                             <Link to={`/chefs/${_id}`} className="btn btn-info btn-block btn-sm">Ver detalles</Link>
//                             <hr></hr>
//                             {
//                                 loggedInUser && loggedInUser.role === "ADMIN" ? <Button onClick={() => deleteChef(_id)} variant="info" size="sm" style={{ marginBottom: '20px' }}>Eliminar chef</Button> : null
//                             }
//                             {
//                                 loggedInUser && loggedInUser.role === "ADMIN" ? <Button onClick={() => handleModal(true, _id)} variant="info" size="sm" style={{ marginBottom: '20px' }}>Editar chef</Button> : null
//                             }
//                         </Card.Body>
//                     </Card>
//                 </Col>

//             </>
//         )
//     }
// }

// export default Card