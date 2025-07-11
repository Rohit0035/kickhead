


import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card, Col, Container, Row } from 'reactstrap';
import "../assets/css/freekick.css"
import Header from '../comonent/Header';
import { FaAngleDown } from "react-icons/fa6";
import ScrollAnimation from 'react-animate-on-scroll';
import Footer from '../comonent/Footer';
import GetInTouch from '../comonent/GetInTouch';
import FieldsetBox from '../comonent/FieldsetBox';
import pdfkickservice from "../assets/pdf/kickhead@services.pdf"
import pdfkickshrt from "../assets/pdf/KH@Shrt.pdf"
import kickheadintro from "../assets/images/common/kickheadintro (1).jpg"
import kickheadservice from "../assets/images/common/kickheadservice -1.jpg"
import { Helmet } from 'react-helmet';


const Freekick = () => {

    // const [openIndex, setOpenIndex] = useState(null);

    // const toggle = (index) => {
    //     setOpenIndex(openIndex === index ? null : index);
    // };

    // const resources = [
    //     {
    //         id: 1,
    //         name: "#1 Meet Kickhead: Your Startup Game-Changer.",
    //         pdf: pdfkickservice,
    //         desp: 'We craft brave, impactful solutions fueled by authentic imagination. From brand strategy to design and innovation, we’re here to help you scale from X to 10X.',
    //         desp2: 'Download and elevate your brand with the challenger spirit!'
    //     },
    //     {
    //         id: 2,
    //         name: "#2 Meet Kickhead:  Startup-inspired agency",
    //         pdf: pdfkickshrt,
    //         desp: 'We understand the effort, the passion, and the desire to develop from X to 10X. Kickhead is where vision meets execution, and bold thinking produces thriving brands.',
    //         desp2: 'Ready to kickstart? Let’s shake things up together.'
    //     },
    // ];
    return (
        <>
            <Helmet>
                <title>Freekicks | Fresh Ideas and Insights by Kickhead</title>
                <meta
                    name="description"
                    content=" Explore Freekicks, our hub for fresh ideas, innovative insights, and creative solutions to inspire startups and innovators."
                />
                <meta
                    name="keywords"
                    content="creative insights, startup ideas, Freekicks by Kickhead, inspiration hub, innovation stories, startup trends."
                />
            </Helmet>
            <Header />
            <section className="sec-freekic">
                <Container fluid>
                    <ScrollAnimation animateIn='fadeInLeft'>
                        <div>
                            <h2 className='heading-bold text-white mb-0'>FREEKICKS</h2>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='fadeIn'>
                        <Row className='mt-5'>
                            <Col xs="12" md="6" lg="6">
                                <div className="project-card mb-3 st-height-card" style={{ height: 'auto' }}>
                                    <h4 className='mt-2'><b>Kickhead Services deck</b></h4>
                                    <div className="image-place" >
                                        <img src={kickheadintro} alt='' width='100%' className='mt-1' />
                                    </div>
                                    <div className="text-place text-center">
                                        <h4 className='fs-5'><b>Kickhead Services: Your Startup Game-Changer</b> </h4>
                                        <hr></hr>
                                        <p className='mt-5'>
                                            We craft innovative solutions fueled by authentic
                                            imagination to help you scale from X to 10X.
                                        </p>
                                        <p>Download and elevate your brand with the challenger spirit!</p>
                                        <a href={pdfkickservice} download className="button-primary btn btn-secondary ms-2">
                                            Download
                                        </a>
                                    </div>
                                </div>
                            </Col>
                            {/* Card 1 */}

                            {/* Card 2 */}
                            <Col xs="12" md="6" lg="6">
                                <div className="project-card mb-3 st-height-card" style={{ height: 'auto' }}>
                                    <h4 className='mt-2'><b>Kickhead Short intro</b></h4>
                                    <div className="image-place" >
                                        <img src={kickheadservice} alt='' width='100%' className='mt-1' />
                                    </div>
                                    <div className="text-place text-center">
                                        <h4 className='fs-5'><b>Kickhead Intro:  Startup-inspired agency</b>  </h4>
                                        <hr></hr>
                                        <p className='mt-5'>
                                            It’s where vision meets execution, and bold
                                            thinking produces thriving brands.
                                        </p>
                                        <p>
                                            Ready to kickstart? Let’s shake things up together.
                                        </p>
                                        <a href={pdfkickshrt} download className="button-primary btn btn-secondary ms-2">
                                            Download
                                        </a>
                                    </div>
                                </div>
                            </Col>
                            {/* Card 3 */}
                        </Row>
                    </ScrollAnimation>

                    {/* <Row className='mt-5'>
                        <Col md="6">
                            <Row>
                                <Col lg={6} md={12} sm={12} xs={12} className='p-1'>
                                    <div className='image-place mb-0'>
                                        <img src={kickheadintro} alt='' width="100%" />
                                    </div>
                                </Col>
                                <Col lg={6} md={12} sm={12} xs={12} className='p-1'>
                                    <div className='image-place mb-3'>
                                        <img src={kickheadservice} alt='' width="100%" />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col md="6" className='st-mt-1'>
                            <h3 className='fs-1 mb-5 mt-0'><b>RESOURCES !</b></h3>
                            <div className="">
                                {resources.map((resource, index) => (
                                    <div key={resource.id} className="mb-3">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <p
                                                color="black"
                                                className='text-white fs-5'
                                                onClick={() => toggle(index)}
                                                style={{ textAlign: "left", borderBottom: '1px solid#fff', cursor: 'pointer', }}
                                            >
                                                <b>{resource.name}</b>
                                                <FaAngleDown className='ms-5' />
                                            </p>
                                            <a href={resource.pdf} download className="button-primary btn btn-secondary ms-2">
                                                Download
                                            </a>
                                        </div>
                                        <Collapse isOpen={openIndex === index} >
                                            <Card style={{ border: 'none' }}>
                                                <CardBody
                                                    className="align-items-center"
                                                    style={{ backgroundColor: "black", color: "white" }}
                                                >
                                                    <span className='fs-5'>
                                                        {resource.desp}
                                                    </span>
                                                    <p className='mt-3'>{resource.desp2}</p>
                                                </CardBody>
                                            </Card>
                                        </Collapse>
                                    </div>
                                ))}
                            </div>
                        </Col>
                    </Row> */}
                </Container>


            </section>

            <section className='mb-70 mt-70'>
                <Container fluid>
                    <Row>
                        <Col md="6">
                            {/* YouTube Video Embed with Rounded Border */}
                            <div className="video-box">
                                <iframe
                                    className='frame-video'
                                    src="https://www.youtube.com/embed/kbsPaa3PwSc"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </Col>
                        <Col md="6">
                            {/* YouTube Video Embed with Rounded Border */}
                            <div className="video-box">
                                <iframe
                                    className='frame-video'
                                    src="https://www.youtube.com/embed/MluQtZlphXI"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </Col>
                        <Col md="6">
                            {/* YouTube Video Embed with Rounded Border */}
                            <div className="video-box">
                                <iframe
                                    className='frame-video'
                                    src="https://www.youtube.com/embed/oaTWZl-H1UU"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section className='mt-50 mb-5'>
                <Container fluid>
                    <Row>
                        <Col md="12">
                            <ScrollAnimation animateIn='fadeInLeft'>
                                <FieldsetBox legendText="Block Time">
                                    <p className='text-center fs-5 text-white mt-2'>
                                        with founder
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


            <Footer />
        </>
    );
};

export default Freekick;
