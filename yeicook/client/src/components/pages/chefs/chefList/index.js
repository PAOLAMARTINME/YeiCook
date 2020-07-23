import React, { Component } from 'react'
import ChefService from '../../../../service/ChefService'

import ChefCard from './chefCard'
import ChefForm from './../chefForm'

import './chefList.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'


class ChefList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            chefs: [],
            seletedChefId: null,
            showCreateModal: false,
            showUpdateModal: false,
        }
        this.chefService = new ChefService()
    }

    componentDidMount = () => this.updateChefList()

    updateChefList = () => {
        this.chefService
            .getAllChefs()
            .then(response => this.setState({ chefs: response.data }))
            .catch(err => console.log(err))
    }

    deleteChef = (id) => {
        console.log("ENTRARRRRRRR")
        this.chefService.deleteChef(id)
            .then(response => {
                const newChefs= this.state.chefs.filter(chef => chef._id !== id)
                this.setState({ chefs: newChefs })
            })
            .catch(err => console.log(err))
    }

    handleModal = status => this.setState({ showCreateModal: status })

    handleCreateSubmit = (e, data) => {
        e.preventDefault()
        const uploadData = new FormData()
        uploadData.append("name", data.name)
        uploadData.append("type", data.type)
        uploadData.append("specialty", data.specialty)
        uploadData.append("location", data.location)
        uploadData.append("contact", data.contact)
        uploadData.append("certificate", data.certificate)
        uploadData.append("title", data.title)
        uploadData.append("img", data.img)
        this.chefService.createChef(uploadData)
            .then((response) => {
                const updateChefList = [...this.state.chefs]
                updateChefList.push(response.data)
                this.setState({ chefs: updateChefList, showCreateModal: false })
            })
            .catch(err => console.log(err))
    }

    handleUpdatemodal = status => this.setState({ showUpdateModal: status, })

    handleUpdateSubmit = (e, data) => {
        e.preventDefault()
        const uploadData = new FormData()
        uploadData.append("name", data.name)
        uploadData.append("type", data.type)
        uploadData.append("specialty", data.specialty)
        uploadData.append("location", data.location)
        uploadData.append("contact", data.contact)
        uploadData.append("certificate", data.certificate)
        uploadData.append("title", data.title)
        uploadData.append("img", data.img)
        uploadData.append("img", data.avatar)
        this.chefService.editChef(data.id, uploadData)
            .then((response) => {
                let newArray = this.state.chefs.filter(chef => chef._id !== data.id)
                newArray.push(response.data)
                this.setState({ chefs: newArray, showUpdateModal: false })
            })
            .catch(err => console.log(err))
    }

    // handleChefSubmit = () => {
    //     this.handleModal(false)
    //     this.updateChefList()
    // }

    render() {
        const seletedChef = this.state.seletedChefId ? this.state.chefs.filter(chef => chef._id === this.state.seletedChefId)[0] : {}
        console.log('HOLA', seletedChef)
        return (

            <>
                <Container as="main" className="chef-page">

                    <h1>Listado de chefs</h1>

                    {
                        this.props.loggedInUser && this.props.loggedInUser.role === "ADMIN" ? <Button onClick={() => this.handleModal(true)} variant="info" size="sm" style={{ marginBottom: '20px' }}>Crear nuevo chef</Button> : null

                    }

                    {
                        this.props.loggedInUser && this.props.loggedInUser.role === "ADMIN" ? <Button onClick={() => this.handleUpdateModal(true)} variant="info" size="sm" style={{ marginBottom: '20px' }}>Editar chef</Button> : null

                    }

                    <Row>
                        {this.state.chefs.map(chef => (<ChefCard key={chef._id} {...chef} handleUpdateSubmit={this.handleUpdateSubmit} deleteChef={this.deleteChef}/>))}

                    </Row>
                </Container>

                {/* <Modal size="lg" show={this.state.showModal} onHide={() => this.handleModal(false)}>
                    <Modal.Body>
                        <ChefForm handleChefSubmit={this.handleChefSubmit} />
                    </Modal.Body>
                </Modal> */}

                <Modal.Body>
                    {this.state.showCreateModal ? <ChefForm onHide={this.onHide} handleSubmit={this.handleCreateSubmit} /> : null}
                    {this.state.showUpdateModal ? <ChefForm onHide={this.onHide} seletedChef={seletedChef} handleSubmit={this.handleUpdateSubmit} /> : null}
                </Modal.Body>

            </>
        )
    }
}
export default ChefList
