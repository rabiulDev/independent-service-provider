import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const ContactUs = () => {
    return (
        <Container>
            <Row>
                <h1 className='text-info text-center my-5'>Contact Us</h1>
                <Col lg={3}></Col>
                <Col sm={12} lg={3} className='align-center'>
                    <div>
                        <h2 className='text-info'>Address</h2>
                        <p>22 St. Black Road Orlando, PL 3457</p>

                        <h2 className='text-info'>Phones</h2>
                        <p>555–123–2323; 555–123–2323</p>

                        <h2 className='text-info'>E-mail</h2>
                        <p>bedentist@demolink.org</p>
                    </div>
                </Col>
                <Col sm={12} lg={3} className="">

                    <h2 className='text-info'>Opening hours</h2>
                    <p>Monday –Friday: 9am–6pm</p>
                    <p>Saturday: 10am–4pm</p>
                    <p>Sunday: 10am–1pm</p>
                </Col>
                <Col lg={3}></Col>
            </Row>
        </Container>
    )
}

export default ContactUs