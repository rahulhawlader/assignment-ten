import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Regiter.css'
import { useCreateUserWithEmailAndPassword, useUpdateProfile, } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from '../Login/SocialLogin/SocialLogin';




const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, error1] = useUpdateProfile(auth);
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/Login')
    }

    if (user) {
        console.log('user', user);
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('updateProfile');;

        navigate('/home');
    }
    return (
        <div className='register-form'>
            <form onSubmit={handleRegister}>
                <h1>Please Register</h1>
                <input type="text" name="name" id="" placeholder='Your Name' />

                <input type="email" name="email" id="" placeholder='Your Email ' required />

                <input type="password" name="password" id="" placeholder='Password' required />
                <input type="submit" value="Register" />

            </form>
            <p>Already have an Account? <Link to='/Login' className='text-danger  pe-auto text-decoration-none' onClick={navigateLogin}> Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;