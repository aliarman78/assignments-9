import React from 'react';
import { Col, Row } from 'react-bootstrap';
import CustomerReviews from '../CustomerReviews/CustomerReviews';
import image from './image/tesla.png';

const Home = () => {
    return (<div>
        <Row className='d-flex align-items-center container mx-auto' >
            <Col md={6}
                sm={12} >
                <h1 className='fw-bold  display-4'> Welcome to Tesla <span className='text-color'>Car Analysis</span></h1>
                <p>Software Version 11.0 is here as part of our biggest holiday release yet. Introducing some of our most creative features, from a new Light Show function that lets you (or anyone with a computer) choreograph light shows to your own music, to new games and entertainment experiences, safety features, customizable controls and an all-new user-interface design.</p>
                <a href="https://www.youtube.com/watch?v=ijcAwrWMi0g"><button className='btn btn-primary text-white'>Live Demo</button></a>
            </Col>
            <Col md={6}
                sm={12} >
                <img className='img-fluid'
                    width="600px"
                    src={image} alt="" />
            </Col>
        </Row>
        <CustomerReviews/>
    </div>
    );
};

export default Home;