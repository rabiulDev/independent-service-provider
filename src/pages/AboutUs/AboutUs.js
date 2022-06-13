import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const AboutUs = () => {
    return (
        <Container className='vh-100'>
            <Row>
                <Col lg={6} sm={12} className="mx-auto mt-5 border border-1 rounded p-4" >
                    <p>Hello welcome to my site. This is <span className='fw-bolder'>Rabiul Isla</span> from Bangladesh.
                        I want to become a professional fullstack webdeveloper. Now I'm learning frontend webdevelopment first then
                        I will start to learn backend. In future I want to learn web 3.0 wich is based on block chain. Programming is my passion
                        I love to learn program. To achive my goal I will learn something every day with patient and determination.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default AboutUs