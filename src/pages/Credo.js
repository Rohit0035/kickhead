import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import Header from '../comonent/Header';
import "../assets/css/Credo.css"
import imgline from "../assets/images/common/line-desktop.png"
import imglinelong from "../assets/images/common/long-line-2.png"
import ScrollAnimation from 'react-animate-on-scroll';
import imgmid from "../assets/images/common/logo.jpg"
import Footer from '../comonent/Footer';
import GetInTouch from '../comonent/GetInTouch';
import FieldsetBox from '../comonent/FieldsetBox';
const Credo = () => {
    return (
        <>
            <div >
                <Header />
                <section className="sec-credo">
                    <Container>
                        <Row>
                            <Col md="2"></Col>
                            <Col md="8">
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
                            <Col md="2"></Col>
                        </Row>

                        <div className='text-center pt-5 pb-2'>
                            <img src={imgmid} alt='' width="120px" />
                        </div>

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

                        <Row>
                            <Col lg={8} md={6} sm={6} xs={6}>
                                <div className='img-bx text-center desktop-view-line h-100'>
                                    <img src={imgline} alt='' className='vertical-img h-100' />
                                </div>
                                {/* <div className='img-bx text-center mobile-view-line'>
                                    <img src={imglinelong} alt='' className='vertical-img' />
                                </div> */}
                            </Col>
                            <Col lg={4} md={6} sm={6} xs={6}>
                                <div className='st-bx-1' >
                                    <h4 className='credo-title'><b>Microscale Insight:</b></h4>
                                    <p className='credo-desp'>
                                        Utilizing behavioral science insights, we explore the subconscious layers of a business to identify its true essence, or soul of business, to align it with its mission.
                                    </p>
                                </div>
                                <div className='st-bx-2' >
                                    <h4 className='credo-title'><b>Creative Alignment:</b></h4>
                                    <p className='credo-desp'>
                                        We use human-driven analysis and creative fusion to identify the business's core values, transforming raw potential into a cohesive vision that aligns purpose with impact.
                                    </p>
                                </div>
                                <div className='st-bx-3' >
                                    <h4 className='credo-title'><b>Innovation Evolution:</b></h4>
                                    <p className='credo-desp'>
                                        We create a strategic roadmap by forecasting shifts and integrating innovative solutions, ensuring businesses evolve, adapt, and realign without losing their core identity.
                                    </p>
                                </div>
                            </Col>
                        </Row>
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
                                    <FieldsetBox legendText="Ready to Kickstart!">
                                        <p className='text-center fs-5 text-white mt-2'>
                                            Share your vision, let's co-create extraordinary
                                        </p>
                                        <Row>
                                            <Col md='2'></Col>
                                            <Col md='8'>
                                                <GetInTouch />
                                            </Col>
                                            <Col md='2'></Col>
                                        </Row>
                                    </FieldsetBox>
                                </ScrollAnimation>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default Credo;
