import React from 'react';
import { Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ReviewData from '../../hooks/ReviewData';
import ShowReviews from './ShowReviews';

const Reviews = () => {
    const [reviews, setReviews] = ReviewData()
    const navigate = useNavigate()
    return (<div className='container my-5 text-center' >
        <h4 className='fw-bold my-5'>All Customer <span className='text-color'>Reviews</span></h4>
        <Row xs={1}
            md={3}
            className="g-3"> {
                reviews.map(review =>
                    <ShowReviews key={review.id} review={review}> </ShowReviews>)
            }
        </Row>
        <button className='btn btn-primary mt-3 text-white'
            onClick={() => navigate('/')}> Back to Home</button>
    </div>
    );
};

export default Reviews;