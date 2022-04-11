import React from 'react';
import { Col, Row } from 'react-bootstrap';


const Blog = () => {
    return (<div className=" container" >
        <Row className="d-flex" >
            <Col className='border p-3' lg={6} >
                <h5> 1. What is context api? </h5>
                <p>
                    <span className='fw-bold'>Answer:</span> Context provides a way to pass data through the component tree without having to pass props down manually at every level. React has had a stable version of Context API  that can be used to easily share data across multiple components. It can be passed directly to the components that need it, thus preventing props drilling. Context is mainly used when you want simple state management. Context makes you avoid props drilling. In Context, you make the parent component a provider and define the child as a consumer that directly uses props from the parent rather than the passing of props through each child component that leads up to the component where it is needed.
                </p>
            </Col>
            <Col className='border p-3' lg={6} >
                <h5> 2. What is semantic tag? </h5>
                <p>
                    <span className='fw-bold'>Answer:</span> Semantics is the implied meaning of a subject, like a word or a sentence. It aids how humans interpret the subject matter. On the web, HTML serves both humans and machines, suggesting the purpose of the content enclosed within an HTML tag. Since the dawn of HTML, elements have been revised and adapted based on actual usage on the web, ideally so that authors can navigate markup with ease and create carefully structured documents, and so that machines can infer the context of the wonderful collection of data we humans can read.
                </p>
            </Col>
        </Row>
    </div>
    );
};

export default Blog;