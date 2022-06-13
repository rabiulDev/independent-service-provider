import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const ServiceCart = ({ service }) => {
    const { name, price, description, img } = service;

    const navigate = useNavigate()



    return (
        <Col sm={12} lg={4} className="mb-3">
            <Card>
                <Card.Img variant="top" src={img} className="cart-img" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text>
                        Price: ${price}
                    </Card.Text>
                    <Button variant="primary" onClick={() => navigate('/checkout')} >Book an Appointment</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ServiceCart