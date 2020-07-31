import React from 'react'
import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
const ChefCard = ({ _id, name, avatar, type, specialty, location, img, deleteChef, handleModal, loggedInUser, displayFavorites }) => {

    return (
        <Col md={4}>
            <Card className="chefcard">
                <Card.Img variant="top" src={avatar} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{type}</Card.Text>
                    <Card.Text>{specialty}</Card.Text>
                    <Card.Text>{location}</Card.Text>
                    <Card.Img variant="top" src={img} />
                    {/* <div onClick={() => incrementMe(_id)}  style={{ alignSelf: 'center' }}>
                        <FontAwesomeIcon icon={faHeart} size="lg" color="black" className="likes-count" />
                        {count}
                    </div> */}
                    <div >
                        {loggedInUser ?
                            displayFavorites(_id) : null}
                    </div>
                    <Link to={`/chefs/${_id}`} className="btn btn-info btn-block btn-sm">Ver detalles</Link>
                    <hr></hr>
                    {
                        loggedInUser && loggedInUser.role === "ADMIN" ? <Button onClick={() => deleteChef(_id)} variant="info" size="sm" style={{ marginBottom: '20px', margin: '5px', marginLeft: '25px' }}>Eliminar</Button> : null
                    }
                    {
                        loggedInUser && loggedInUser.role === "ADMIN" ? <Button onClick={() => handleModal(true, _id)} variant="info" size="sm" style={{ marginBottom: '20px', margin: '5px' }}>Editar</Button> : null
                    }
                </Card.Body>
            </Card>
        </Col>
    )
}
    export default ChefCard

























//     return (
//         <Col md={3}>
//             <Card className="chefcard">
//                 <Card.Img variant="top" src={avatar} />
//                 <Card.Body>
//                     <Card.Title>{name}</Card.Title>
//                     <Card.Text>Tipo: {type}</Card.Text>
//                     <Card.Text>{specialty}</Card.Text>
//                     <Card.Text>{location}</Card.Text>
//                     <Card.Img variant="top" src={img} />
//                     <div >
//                         {loggedInUser ?
//                             displayFavorites(_id) : null}
//                     </div>
//                     <Link to={`/chefs/${_id}`} className="btn btn-info btn-block btn-sm">Ver detalles</Link>
                    
//                     <div className="buttonChefs">
//                     {
//                         loggedInUser && loggedInUser.role === "ADMIN" ? <Button onClick={() => deleteChef(_id)}  variant="info" size="sm" style={{ marginBottom: '20px' }}>Eliminar chef</Button> : null
//                     }
//                     {
//                         loggedInUser && loggedInUser.role === "ADMIN" ? <Button onClick={() => handleModal(true, _id)} variant="info" size="sm" style={{ marginBottom: '20px' }}>Editar chef</Button> : null
//                         }
//                     </div>
//                 </Card.Body>
//             </Card>
//         </Col>
//     )
// }
// export default ChefCard


