import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import Header from '../comonent/Header';
import "../assets/css/Credo.css"
import imgline from "../assets/images/common/credo-line.png"
import ScrollAnimation from 'react-animate-on-scroll';
import imgmid from "../assets/images/common/logo.jpg"
import Footer from '../comonent/Footer';
import GetInTouch from '../comonent/GetInTouch';
const Credo = () => {
    return (
        <>
            <Header />
            <section className="sec-credo" style={{ display: 'inline-block', width: '100%', }}>
                <Container>
                    <ScrollAnimation animateIn='fadeInLeft'>
                        <Row>
                            <Col md="2"></Col>
                            <Col md="8">
                                <div className=''>
                                    {/* <p className='mb-0 fs-5'>our credo</p> */}
                                    <h2 className='text-center heading-credo'>
                                        slow is smooth.
                                    </h2>
                                    <h2 className='text-center heading-credo'>
                                        smooth is fast.
                                    </h2>
                                    <p className='mb-0 fs-5 text-center'>We simply like been  smooth and sincere</p>
                                </div>
                            </Col>
                            <Col md="2"></Col>
                        </Row>
                    </ScrollAnimation>

                    <div className='text-center pt-5 pb-2'>
                        <img src={imgmid} alt='' width="120px" />
                    </div>

                    <ScrollAnimation animateIn='fadeInRight'>
                        <Row className='mt-5' style={{ marginTop: '70px' }}>
                            <Col md="2"></Col>
                            <Col md="8">
                                <h2 className='text-center heading-credo mb-3'>
                                    The Kick Trinity
                                </h2>
                                <p className='mb-0 fs-5 text-center '>
                                    At Kickhead, we believe in the use of behavioral science, creativity, and innovation to elevate businesses as dynamic entities with unique energies.
                                </p>
                            </Col>
                            <Col md="2"></Col>
                        </Row>
                    </ScrollAnimation>

                    <ScrollAnimation animateIn='fadeInLeft'>
                        <Row>
                            <Col lg={8} md={6} sm={6} xs={6}>
                                <div className='img-bx text-center'>
                                    <img src={imgline} alt='' className='vertical-img' />
                                </div>
                            </Col>
                            <Col lg={4} md={6} sm={6} xs={6}>
                                <div className='st-bx-1' >
                                    <h4 className='fs-2 fw-700 mb-4 credo-title'><b>Microscale Insight:</b></h4>
                                    <p className='credo-desp'>
                                        Utilizing behavioral science insights, we explore the subconscious layers of a business to identify its true essence, or soul of business, to align it with its mission.
                                    </p>
                                </div>
                                <div className='st-bx-2' >
                                    <h4 className='fs-2 fw-700 mb-4 credo-title'><b>Creative Alignment:</b></h4>
                                    <p className='credo-desp'>
                                        We use human-driven analysis and creative fusion to identify the business's core values, transforming raw potential into a cohesive vision that aligns purpose with impact.
                                    </p>
                                </div>
                                <div className='st-bx-3' >
                                    <h4 className='fs-2 fw-700 mb-4 credo-title'><b>Innovation Evolution:</b></h4>
                                    <p className='credo-desp'>
                                        We create a strategic roadmap by forecasting shifts and integrating innovative solutions, ensuring businesses evolve, adapt, and realign without losing their core identity.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </ScrollAnimation>
                    <Row>
                        <Col md="12">
                            <p className='text-center fs-5 mt-5'>
                                The Trinity Process of Kick goes beyond transformation — it’s about <br /> creating a thriving future that is powerful, unique, and authentic.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='mt-5 mb-5'>
                <Container fluid>
                    <Row>
                        <Col md="12">
                            <ScrollAnimation animateIn='fadeInLeft'>
                                <div className='grid-get-intouch'>
                                    <h3 className='top-text-form'>GET IN TOUCH</h3>
                                    <p className='text-center fs-5 '>
                                        Let’s create awesomeness, share your vision
                                    </p>
                                    <Row>
                                        <Col md='2'></Col>
                                        <Col md='8'>
                                            <GetInTouch />
                                        </Col>
                                        <Col md='2'></Col>
                                    </Row>
                                </div>
                            </ScrollAnimation>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    );
};

export default Credo;
