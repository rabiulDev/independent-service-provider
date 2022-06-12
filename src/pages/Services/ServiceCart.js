import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'

const ServiceCart = ({ service }) => {
    const { name, price, description, img } = service;
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
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ServiceCart