import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceid } = useParams();
    return (
        <div>
            <h1 className='text-center'> welcome to My Traning center details {serviceid}</h1>

            <div className='register-form'>
                <form>

                    <input type="text" name="name" id="" placeholder='Your Name' />

                    <input type="email" name="email" id="" placeholder='Your Email ' required />



                    <input type="text" name="addrees" id="" placeholder='plese your addrees' required />

                    <input type="number" name="phone" id="" placeholder='Your Phone Number' required />



                </form>
            </div>

            <div className='text-center'>
                <Link to='/CheckOut'>

                    <Button className='btn btn-primary'>Confirm CheckOut </Button>
                </Link></div>
        </div>
    );
};

export default ServiceDetails;