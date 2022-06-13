import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import google from "../../images/google.png"

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleSignInUser, googleSignLoading, googleSignError] = useSignInWithGoogle(auth);


    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await signInWithEmailAndPassword(email, password);
        setEmail("")
        setPassword("")
    }

    if (loading || googleSignLoading) {
        return <Loading></Loading>
    }

    if (user || googleSignInUser) {
        navigate(from, { replace: true });
    }

    return (
        <Container className="p-4">
            <Row>
                <Col sm={12} lg={6} className="mx-auto border border-1 rounded p-4 mt-5">
                    <h2 className='text-info text-center mb-4'>Please Login!!</h2>
                    <Form onSubmit={handleSubmit}>
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
                        <p>New here? <Link to="/signup" className='text-decoration-none'>Go to signup!</Link></p>
                        <Button className='me-2' variant="primary" type="submit">
                            Login
                        </Button>
                        <button onClick={() => signInWithGoogle()} type="button" className="btn btn-light"> <img style={{ width: "25px" }} src={google} alt="" /> Login With Google</button>

                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
export default Login