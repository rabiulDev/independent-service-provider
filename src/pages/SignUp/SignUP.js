import React, { useState } from 'react'
import { Button, Col, Container, Form, Row, } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const SignUP = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleReset = () => {
        setName("")
        setEmail("")
        setPassword("")
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        // createUserWithEmailAndPassword(auth, email, password)
        // .then(result => {
        //   const user = result.user;
        //   setUser(user)
        // })
        // .catch(err => {
        //   console.error(err)
        // })
        setName("")
        setEmail("")
        setPassword("")
    }
    return (
        <Container className='p-4'>
            <Row>
                <Col sm={12} lg={6} className=" mx-auto border border-1 rounded p-4 mt-5">
                    <h2 className='text-info text-center mb-4'>Please Sign Up here!!</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Name</Form.Label>
                            <Form.Control onChange={handleNameChange} type="text" value={name} placeholder="Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onChange={handleEmailChange} type="email" value={email} placeholder="Enter email" required />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={handlePasswordChange} type="password" value={password} placeholder="Password" required />
                        </Form.Group>
                        <p>Already registered? <Link to="/login" className="text-decoration-none">Go to Login</Link></p>
                        <Button className='me-2' variant="primary" type="submit">
                            Register
                        </Button>
                        <Button variant="success" onClick={handleReset}>
                            Reset
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default SignUP