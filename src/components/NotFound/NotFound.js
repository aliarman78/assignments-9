import React from 'react';
import { useNavigate } from 'react-router-dom';


const NotFound = () => {
    const navigate = useNavigate()

    return (<div className='text-center mt-5'>
        <h1 className='text-primary display-1 fw-bold'> 404 </h1> <p> Not Found The Page</p> <div className='text-center mt-5'>
            <button className='btn btn-primary text-white'
                onClick={() => navigate('/')}> Back to Home </button>
        </div>
    </div>
    );
};

export default NotFound;