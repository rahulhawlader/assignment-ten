import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const emailRef = useRef('');
    const passwordReF = useRef('');
    const navigate = useNavigate('');

    const handleSubmit = event => {
        event.preventDefault()
        const email = emailRef.current.value;
        const password = passwordReF.current.value;
        console.log(email, password)
    }

    const navigateRegister = (event) => {
        navigate('/Register')
    }
    return (
        <div className='container w-50 ms-auto'>
            <h1 className='text-primary text-center mt-2'>Please Login</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordReF} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p>New To gym traning? <Link to='/register' className='text-danger  pe-auto text-decoration-none' onClick={navigateRegister}> Please Register</Link></p>
        </div>
    );
};

export default Login;