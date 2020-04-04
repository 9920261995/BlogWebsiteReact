import React from 'react'
import {Container ,Row,Col } from 'react-bootstrap'

export default class Header extends React.Component{
    constructor (props){
        super(props)
        this.state = {
            
        }
    }
    render (){
        return(
            <div >

                <Container fluid style = {{backgroundColor:"black"}}>
                    <Row>
                        <Col>1 of 1</Col>
                    </Row>
                </Container>
            </div>
            
        )
    }

}