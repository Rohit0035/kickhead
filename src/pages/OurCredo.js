import React from 'react';
import Header from '../comonent/Header';
import Footer from '../comonent/Footer';
import { Col, Container, Row } from 'reactstrap';
import "../assets/css/Credo.css"
import { Helmet } from 'react-helmet';


const OurCredo = () => {
    return (
        <>
             <Helmet>
                <title>Kickhead Credo | Where Every Action Has a Purpose</title>
                <meta 
                    name="description" 
                    content="At Kickhead, we believe in purposeful creativity, blending behavioral science, innovation, and strategy to craft unique brand journeys. Precision drives impact." 
                />
                <meta 
                    name="keywords" 
                    content="agency philosophy, purposeful action, creative impact, startup credo, Kickhead vision, innovation with purpose" 
                />
            </Helmet>
            <Header />
            <section className='mt-100'>
                <Container fluid >
                    <Row>
                        <Col md="3">

                        </Col>
                        <Col md="6">
                            <div className=''>
                                <h2 className='text-center heading-credo'>
                                    slow is smooth.
                                </h2>
                                <h2 className='text-center heading-credo'>
                                    smooth is fast.
                                </h2>
                                <p className='mb-0 fs-5 text-center'>We simply like been  smooth and sincere</p>
                            </div>
                        </Col>
                        <Col md="3">
                        </Col>
                    </Row>
                </Container>
            </section>

            <Footer />
        </>
    );
};

export default OurCredo;
