import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom'
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">be<span>DENTIST</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='/'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/aboutus'>About Us</Nav.Link>
                        <Nav.Link as={Link} to='/services'>Services</Nav.Link>
                        <Nav.Link as={Link} to='/contacts'>Contacts</Nav.Link>
                    </Nav>
                    {
                        user ?
                            <Link to='/login' onClick={() => signOut(auth)} className='text-white text-decoration-none h5 '>Log Out</Link>
                            :
                            <Link to='/login' className='text-white text-decoration-none h5 '>Login</Link>
                    }

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header