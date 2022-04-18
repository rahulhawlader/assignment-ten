import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='container my-5'>
            <h1 className='text-center my-5'>Blo<span className='text-primary'>gs</span></h1>
            <div>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Difference between authorization and authentication</Accordion.Header>
                        <Accordion.Body>
                            <span className='text-primary'>Authentication:</span>
                            Authentication The process determines the identity of the user before disclosing sensitive information. This is crucial for systems or interfaces where the user's priority is to protect confidential information. In the process, the user makes a plausible claim about the identity of the individual (his or her) or entity.<br />
                            Certificates or claims can be usernames, passwords, fingerprints, etc. Authentication and non-rejection, sort of issues are handled at the application level. The disqualification authentication process can significantly affect the availability of services.<br /><br />
                            <span className='text-primary'>Authorization:</span>
                            Authorization strategy is used to determine the permissions granted to an authorized user. Simply put, it examines whether it allows the user to access certain resources. Authorization occurs after the authentication event, where the user's identity is confirmed before the user's access list is then determined by searching the table and entries stored in the database.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                        <Accordion.Body>
                            Firebase is a realtime database that allows me to create rich, collaborative applications by allowing secure access to the database directly from client-side code. If I were to sign-up with client-side login then it would not be well protected. Easy and safe way to work from Firebase. Firebase data is retained locally, and realtime events continue while offline, giving the end user a responsive experience.

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>What other services does firebase provide other than authentication?</Accordion.Header>
                        <Accordion.Body>
                            <ul>firebase other services:
                                <li>Cloud Messaging</li>
                                <li>Cloud Firestore</li>
                                <li>Cloud Functions</li>
                                <li>Hosting</li>
                                <li>Google Analytics</li>
                                <li>Remote Configuration</li>
                                <li>Predictions</li>
                                <li>Realtime Database</li>
                                <li>Storage</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default Blogs;