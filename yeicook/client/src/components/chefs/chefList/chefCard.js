import React from 'react'

import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

const ChefCard = ({ id, name, avatar, type, specialty, location, contact, certificate, title, img }) => {

    return (
        <Col md={3}>
            <Card className="chefcard">
                <Card.Img variant="top" src={avatar} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{type}</Card.Text>
                    <Card.Text>{specialty}</Card.Text>
                    <Card.Text>{location}</Card.Text>
                    {/* <Card.Text>{contact}</Card.Text>
                    <Card.Text>{certificate}</Card.Text>
                    <Card.Text>{title}</Card.Text> */}
                    <Card.Img variant="top" src={img} />
                    <Link to={`/chefs/${id}`} className="btn btn-info btn-block btn-sm">Ver detalles</Link>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ChefCard