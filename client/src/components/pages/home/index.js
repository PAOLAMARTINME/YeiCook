import React, { Component } from 'react'

import './home.css'

import Figure from 'react-bootstrap/Figure'

import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/Cardgroup'

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }

    }
    render() {
        return (
            <>
                
                <Figure className="BackHome">

                    
                    <Figure.Image alt="fondo" src="/images/AdobeStock_314133185.jpeg" />
                    <div class="centrado"><h1>Nunca fue tan facil ser buen anfitrión</h1></div>
                </Figure>
                
                <footer className="footer">
                    <CardGroup className="text-center">
                        <Card>
                            <Card.Body>
                                <Card.Title>¡Estamos encantados de tenerte aquí!</Card.Title>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Body>
                                <Card.Text>Dirección: A domiciliooooo!!! </Card.Text>
                                <Card.Title>
                                    ¡SORPRISE!
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                    <Card.Footer className="text-center text-muted" >© 2020 Copyright: Paola Martin</Card.Footer>
                </footer>
            </>

        )
    }
}

export default Home