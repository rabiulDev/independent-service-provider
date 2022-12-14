import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './Banner.css'
const Banner = () => {

    const navigate = useNavigate()

    return (
        <div className='banner-container'>
            <Container>
                <Row>
                    <Col sm={12} lg={6}>
                        <h1 className='text-info fs-1 fw-bolder'>Dr.Mark Hoffman</h1>
                        <p>Dr. Mark Hoffman's dental clinic welcomes you!</p>
                        <Button onClick={() => navigate('/checkout')}>Book an Appointment</Button>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default Banner