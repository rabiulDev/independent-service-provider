import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const CheckOut = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <Container className='p-4'>
            <Row>
                <Col sm={12} lg={6} className=" mx-auto border border-1 rounded p-4 mt-5">
                    <h2 className='text-info text-center mb-4'>Give Your Info Below</h2>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder="Address" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={user.email} readOnly />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="number" placeholder="Phone" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Cart Number</Form.Label>
                            <Form.Control type="number" />
                        </Form.Group>
                        <Button className='me-2' variant="primary" type="submit">
                            Book Now
                        </Button>
                        <Button variant="success">
                            Reset
                        </Button>

                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default CheckOut