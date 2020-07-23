import React from 'react'

import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

const UserCard = ({name,username,password,email,avatar,location,contact}) => {

    return (
        <Col md={3}>
            <Card className="Usercard">
                <Card.Img variant="top" src={avatar} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{username}</Card.Text>
                    <Card.Text>{email}</Card.Text>
                    <Card.Text>{location}</Card.Text>
                    <Card.Text>{contact}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default UserCard