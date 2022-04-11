import React from 'react';
import { Card, Col } from 'react-bootstrap';

const CustomerReview = ({ review }) => {
    const { name, rating, reviewTitle } = review;
    return (<div>
        <Col>
            <Card className='shadow border-0 p-5'>
                <Card.Body>
                    <Card.Title> {name} </Card.Title>
                    <Card.Text> {reviewTitle} </Card.Text>
                    <Card.Text>Rating: {rating} </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    </div>
    );
};

export default CustomerReview;