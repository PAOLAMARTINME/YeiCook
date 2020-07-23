import React, { Component } from 'react'
import ChefService from '../../../service/ChefService'

import ChefList from './../chefs/chefList/chef-list'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

class PageProfile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            chefs:[],
        }
        this.chefService = new ChefService()
    }

    render() {
       
        return (
            <>
                <Container as="main" className="chef-page">

                    <Row>
                        
                        <h1>Listado de chefs</h1>

                        <ChefList setTheUser={this.props.setTheUser} loggedInUser={this.props.loggedInUser} />

                    </Row>

                </Container>


            </>
        )
    }
}
export default PageProfile
