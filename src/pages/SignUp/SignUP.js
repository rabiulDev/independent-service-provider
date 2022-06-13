import React, { useState } from 'react'
import { Button, Col, Container, Form, Row, } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init"
import google from "../../images/google.png"
import Loading from '../Shared/Loading';


const SignUP = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, googleSignInUser, googleSignLoading, googleSignError] = useSignInWithGoogle(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [agree, setAgree] = useState(false);

    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

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
    const handleSubmit = async (e) => {
        e.preventDefault()
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        setName("")
        setEmail("")
        setPassword("")
        setAgree(!agree)
    }

    if (loading || googleSignLoading) {
        return <Loading></Loading>
    }

    if (user || googleSignInUser) {
        navigate(from, { replace: true });
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
                        <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                        <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept The Terms and Conditions of beDENTIST</label>
                        <p>Already registered? <Link to="/login" className="text-decoration-none">Go to Login</Link></p>
                        <Button className='me-2' variant="primary" type="submit" disabled={!agree}>
                            Register
                        </Button>
                        <Button variant="success" onClick={handleReset}>
                            Reset
                        </Button>
                        <button onClick={() => signInWithGoogle()} type="button" className="btn btn-light"> <img style={{ width: "25px" }} src={google} alt="" /> Login With Google</button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default SignUP