import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from "../../../images/download.png"

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    let errorelement;
    if (error) {
        errorelement =
            <div>
                <p className='text-danger'>Error: {error.message}</p>
            </div>

    }


    if (user) {

        navigate('/home')
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: "1px" }} className="w-50 bg-primary"></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: "1px" }} className="w-50 bg-primary"></div>
            </div>
            {errorelement}
            <button onClick={() => signInWithGoogle()} className='btn btn-info mx-auto d-block w-50'>
                <img style={{ width: "30px" }} src={logo} alt='' />
                <span className='px-2'>Google Sign in</span>
            </button>

        </div>
    );
};

export default SocialLogin;