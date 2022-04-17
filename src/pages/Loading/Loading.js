import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{ heigt: "200px" }} className="w-100 d-flex justify-content-center align-items-center">
            <Spinner animation="border" variant="success" />
        </div>
    );
};

export default Loading;