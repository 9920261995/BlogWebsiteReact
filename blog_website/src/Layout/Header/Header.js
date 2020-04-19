import React from 'react'
import { Container, Navbar, Nav, Col, Row } from 'react-bootstrap'
import Sunset from './../../_.jpeg'
import './Header.scss'

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
                    <Navbar.Brand href="#home" style={{ fontWeight: "700", color: "white", padding: "10px 15px" }}>My Random Thoughts</Navbar.Brand>
                    <Nav className="ml-auto">
                        <Col>
                            <Row>
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#features">Features</Nav.Link>
                                <Nav.Link href="#pricing">About</Nav.Link>
                            </Row>
                        </Col>
                    </Nav>
                </Container>

                <Container fluid style={{ padding: "0", margin: "0" }}>

                    {/* <div className="" >
                        {/* <img src={Sunset} alt="Default_Image" style={{ height: "100%", width: "100%" }} > */}
                    HEllo
                            {/* </img> 
                    </div> */}
                    <div class="image">
                        <img src={Sunset} alt="" />
                        <h2><span>Some Text</span></h2></div><br />




                </Container>

            </div>

        )
    }

}