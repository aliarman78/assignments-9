import React from 'react';
import { Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ReviewData from '../../hooks/ReviewData';
import CustomerReview from './CustomerReview';
import './CustomerReviews.css';


const CustomerReviews = () => {
    const [reviews, setReviews] = ReviewData()
    const navigate = useNavigate()
    return (<div className='text-center'>
        <h2 className='my-5 fw-bold'>Customer<span className='text-color'> Reviews</span></h2>
        <div className='container'>
            <Row xs={1}
                md={3}
                className="g-3" > {
                    reviews.slice(0, 3).map(review => <CustomerReview review={
                        review
                    }
                        key={
                            review.id
                        } >
                    </CustomerReview>)
                }
            </Row>
            <button className='btn btn-primary text-white my-3'
                onClick={() => navigate('/reviews')} > See All Review </button>
        </div>
    </div>
    );
};

export default CustomerReviews;