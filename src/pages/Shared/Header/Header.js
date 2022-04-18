import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';





const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <>
            <Navbar sticky='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/home">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/Blogs">Blogs</Nav.Link>


                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/About">About</Nav.Link>
                            {
                                user ?
                                    <button onClick={handleSignOut}>SignOut</button>
                                    :
                                    <Nav.Link eventKey={2} as={Link} to="/Login">
                                        Login
                                    </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>





        </>
    );
};

export default Header;