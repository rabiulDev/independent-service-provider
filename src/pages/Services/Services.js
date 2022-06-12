import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import ServiceCart from './ServiceCart'
import "./Services.css"

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('serviceData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <Container>

            <h1 className='text-info text-center my-5 pt-2'>Our Services</h1>
            <Row >
                {services.map(service => <ServiceCart key={service.id} service={service} />)}
            </Row>

        </Container>
    )
}

export default Services