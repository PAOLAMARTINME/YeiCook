import React, { Component } from 'react'
import ChefService from '../../../service/ChefService'

import ChefCard from './chefCard'
import './chefList.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


class ChefList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            chefs: undefined,
            // showModal: false
        }
        this.chefService = new ChefService()
    }

    componentDidMount = () => this.updatechefList()

    updatechefList = () => {
        this.chefService
            .getAllChefs()
            .then(response => this.setState({ chefs: response.data }))
            .catch(err => console.log(err))
    }

    // handleModal = status => this.setState({ showModal: status })

    // handleChefSubmit = () => {
    //     this.handleModal(false)
    //     this.updatechefList()
    // }

    render() {

        return (

            <>
                <Container as="main" className="chef-page">

                    <h1>Listado de chefs</h1>
                    {

                            <Row>
                                {this.state.chefs.map(elm => <ChefCard key={elm._id} {...elm} />)}
                            </Row>

                    }

                </Container>
            </>
        )
    }
}
export default ChefList
