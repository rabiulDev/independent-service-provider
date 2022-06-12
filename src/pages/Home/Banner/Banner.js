import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import './Banner.css'
const Banner = () => {
    return (
        <div className='banner-container'>
            <Container>
                <Row>
                    <Col className='banner-info' sm='auto'>
                        <h1 className='text-info fs-1 fw-bolder'>Dr.Mark Hoffman</h1>
                        <p>Dr. Mark Hoffman's dental clinic welcomes you!</p>
                        <Button>Book an Appointment</Button>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Banner