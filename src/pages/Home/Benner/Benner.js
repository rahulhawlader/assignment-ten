import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import benner1 from '../../../images/benner pictures 1.jpg'
import benner2 from '../../../images/benner  pictures 2.jpg'
import benner3 from '../../../images/benner pictures 3.jpg'



const Benner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (

        <div>
            <h1 className='text-center'> <span className='text-danger'>SHR Personal</span> <span className='text-success'>Trainer Center</span> </h1>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={benner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='text-info'>PERSIONAL TRAINING IN RAHUL HAWLADER</h3>
                        <p>i am private pesional training studio in sh rahul who help busy men & women stop "trying to get in shape" and finally achive a health & body transformation they wont rebond from...</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={benner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={benner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );

};

export default Benner;