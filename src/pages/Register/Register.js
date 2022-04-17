import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Regiter.css'

const Register = () => {
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/Login')
    }
    return (
        <div className='register-form'>
            <form >
                <h1>Please Register</h1>
                <input type="text" name="name" id="" placeholder='Your Name' />

                <input type="email" name="email" id="" placeholder='Your Email ' required />

                <input type="password" name="password" id="" placeholder='Password' required />
                <input type="submit" value="Register" />

            </form>
            <p>Already have an Account? <Link to='/Login' className='text-danger  pe-auto text-decoration-none' onClick={navigateLogin}> Please Login</Link></p>
        </div>
    );
};

export default Register;