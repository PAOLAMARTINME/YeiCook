import React from 'react'

import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

const ChefCard = ({ _id, name, avatar, type, specialty, location, contact, certificate, title, img }) => {

    return (
        <Col md={4}>
            <Card className="chefcard">
                <Card.Img variant="top" src={avatar} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Title>{type}</Card.Title>
                    <Card.Title>{specialty}</Card.Title>
                    <Card.Title>{location}</Card.Title>
                    <Card.Title>{contact}</Card.Title>
                    <Card.Title>{certificate}</Card.Title>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={img} />
                    <Link to={`/chefs/${_id}`} className="btn btn-dark btn-block btn-sm">Ver detalles</Link>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ChefCard