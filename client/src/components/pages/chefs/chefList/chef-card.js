import React from 'react'

import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const ChefCard = ({ _id, name, avatar, type, specialty, location, img, deleteChef, handleModal, loggedInUser, incrementMe, count }) => {
  
    return (
        <Col md={3}>
            <Card className="chefcard">
                <Card.Img variant="top" src={avatar} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{type}</Card.Text>
                    <Card.Text>{specialty}</Card.Text>
                    <Card.Text>{location}</Card.Text>
                    <Card.Img variant="top" src={img} />

                    <div onClick={() => incrementMe(_id)}  style={{ alignSelf: 'center' }}>
                        <FontAwesomeIcon icon={faHeart} size="lg" color="black" className="likes-count" />
                        {count}
                    </div>

                   
                    <Link to={`/chefs/${_id}`} className="btn btn-info btn-block btn-sm">Ver detalles</Link>
                    <hr></hr>
                    {
                        loggedInUser && loggedInUser.role === "ADMIN" ? <Button onClick={() => deleteChef(_id)} variant="info" size="sm" style={{ marginBottom: '20px' }}>Eliminar chef</Button> : null
                    }
                    {
                        loggedInUser && loggedInUser.role === "ADMIN" ? <Button onClick={() => handleModal(true, _id)} variant="info" size="sm" style={{ marginBottom: '20px' }}>Editar chef</Button> : null
                    }
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ChefCard




















{/* <Button onClick={() => incrementMe(_id)} variant="info" className="likes-count" size="sm" style={{ marginBottom: '20px' }}>Me gusta: {count}</Button> */ }