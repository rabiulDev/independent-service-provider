import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import spinner from "../../images/spinner.gif"

const Loading = () => {

    const loadingStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
    }
    return (
        <Container fluid>
            <Row>
                <Col style={loadingStyle}>
                    <img src={spinner} alt="" className=' mx-auto' />
                </Col>
            </Row>
        </Container>
    )
}

export default Loading