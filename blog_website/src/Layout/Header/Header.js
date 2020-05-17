import React from 'react'

// import './Header.scss'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { StyledToggle,StyledNav ,SNav,Brand} from "./HeaderStyled";

export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

            collapsed:false

        }
    }

    Enter = ()=>{
        this.setState({
            collapsed : !this.state.collapsed
        })
    }

    Exit = ()=>{
        this.setState({
            collapsed : !this.state.collapsed
        })
    }

    render() {
        return (
            <StyledNav expand="lg">
                <Container>
                    <Brand href="#home">Random Thoughts</Brand>
                    <StyledToggle className = {this.state.collapsed ? "fas fa-compass ": "far fa-compass"} style = {{color: "white"}}  aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse onEnter = {this.Enter} onExit ={this.Exit} id="basic-navbar-nav">
                        <Nav style = {{paddingRight: "50px"}}className="ml-auto">
                            <SNav href="#home">Home</SNav>
                            <SNav href="#link">About</SNav>
                            <SNav href="#link">Contact</SNav>
                            <SNav href="#link">Blog</SNav>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </StyledNav>
        )
    }

}