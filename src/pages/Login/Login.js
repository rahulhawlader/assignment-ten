import React from 'react';
import { Button, Form, } from 'react-bootstrap';
import { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

// useSendPasswordResetEmail
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin/SocialLogin';
import Loading from '../Loading/Loading';



const Login = () => {
    const emailRef = useRef('');
    const passwordReF = useRef('');
    const navigate = useNavigate('');
    const location = useLocation();



    let from = location.state?.from?.pathname || "/";
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);


    if (loading || sending) {
        return <Loading></Loading>
    }
    if (user) {
        navigate(from, { replace: true });

    }
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    const handleSubmit = event => {
        event.preventDefault()
        const email = emailRef.current.value;
        const password = passwordReF.current.value;
        signInWithEmailAndPassword(email, password)
    }

    const navigateRegister = (event) => {
        navigate('/Register')
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please enter your email address');
        }
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
                    Login
                </Button>
            </Form>
            <p>New To gym traning? <Link to='/Register' className='text-primary  pe-auto text-decoration-none' onClick={navigateRegister}> Please Register</Link></p>
            <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>

            <SocialLogin></SocialLogin>
            <ToastContainer />

        </div>
    );
};

export default Login;