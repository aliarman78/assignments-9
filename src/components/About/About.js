import React from 'react';
import { Col, Row } from 'react-bootstrap';
import images from '../images/tesla-red.jpg';


const About = () => {

    return (<div className="my-5" >
        <h4 className="text-center my-5 fw-bold">About <span className='text-color'>Tesla Car</span></h4> <div className="container">
            <Row className='d-flex align-items-center'>
                <Col lg={6}>
                    <img className='img-fluid' src={images} alt=""/>
                </Col>
                <Col lg={6}>
                    <p className='fw-bold'>Safety High Impact Protection </p>
                    <p>
                        <small >
                            Model S is built from the ground up as an electric vehicle, with a high-strength architecture and floor-mounted battery pack for incredible occupant protection and low rollover risk. Every new Model S includes Tesla’s latest active safety features, such as Automatic Emergency Braking, at no extra cost.
                        </small>
                    </p>
                </Col>
            </Row>
        </div>
    </div>
    );
};

export default About;