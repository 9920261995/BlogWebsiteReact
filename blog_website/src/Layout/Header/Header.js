import React from 'react'
import { Container, FormControl, NavDropdown, Navbar, Nav, Form, Button, Col, Row } from 'react-bootstrap'
import Sunset from './../../_.jpeg'

export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div >
                <Container fluid className="navbar navbar-expand-lg flex-row" style={{ backgroundColor: "#522d5b", height: "10em" }}>
                    <Navbar.Brand href="#home" style={{ padding: "10px 15px" }}>My Random Thoughts</Navbar.Brand>
                    <Nav className="ml-auto">
                        <Col>
                            <Row>
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#features">Features</Nav.Link>
                                <Nav.Link href="#pricing">Pricing</Nav.Link>
                            </Row>
                        </Col>
                    </Nav>
                </Container>
                <Container fluid style={{ padding: "0", margin: "0" }}>
                    <div className="img-card" >
                        <img src={Sunset} alt="Default_Image" style={{ height: "100%", width: "100%" }} />
                    </div>
                </Container>
            </div>

        )
    }

}