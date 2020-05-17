import React from 'react'
import { Container, Col } from 'react-bootstrap'
import { Image, Background, H1 } from './StyledHome'
import Wanderer from "../Assets/Wanderer.jpeg"

const BaseContent = () => {

    const list_of_sentences = ["Hello There!", "I am Looking for some work to do.", "If you stumbled upon here,", "I guess you can give me one.", "My name is Rajat Kotian ,", "And I am a Software Developer.",]
    return (
        <div>
            <Image src={Wanderer} alt="Italian Trulli" />
            <Background>
                <Container >
                    <Col>
                        {list_of_sentences.map((chunks) => {
                            return (
                                <H1>{chunks}</H1>
                            );
                        })}
                        <H1>For Further more Click Here</H1>

                    </Col>
                </Container>
            </Background>
        </div>
    )
}


export default BaseContent;