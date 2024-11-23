


import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card, Col, Container, Row } from 'reactstrap';
import "../assets/css/freekick.css"
import Header from '../comonent/Header';
import { FaAngleDown } from "react-icons/fa6";
import ScrollAnimation from 'react-animate-on-scroll';
import Footer from '../comonent/Footer';
import GetInTouch from '../comonent/GetInTouch';

const Freekick = () => {

    const [openIndex, setOpenIndex] = useState(null);

    // Toggle the Collapse
    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const resources = [
        { id: 1, name: "RESOURCE 1", link: "/resource1.pdf" },
        { id: 2, name: "RESOURCE 2", link: "/resource2.pdf" },
        { id: 3, name: "RESOURCE 3", link: "/resource3.pdf" },
        { id: 4, name: "RESOURCE 4", link: "/resource4.pdf" },
        { id: 5, name: "RESOURCE 5", link: "/resource5.pdf" },
    ];
    return (
        <>
            <Header />
            <section className="sec-freekic">
                <Container fluid>
                    <ScrollAnimation animateIn='fadeInLeft'>
                        <div>
                            <h2 className='heading-bold text-white mb-0'>FREEKICKS</h2>
                        </div>

                    </ScrollAnimation>

                    {/* <Row>
                        <Col md="5">
                            <Row>
                                <Col md="6" className='p-2'>
                                    <div className='image-place' style={{ height: '620px', width: '100%', backgroundColor: '#aaa' }}>
                                    </div>
                                </Col>
                                <Col md="6" className='p-2'>
                                    <div className='image-place mb-2' style={{ height: '200px', width: '100%', backgroundColor: '#aaa' }}>
                                    </div>
                                    <div className='image-place mb-2' style={{ height: '200px', width: '100%', backgroundColor: '#aaa' }}>
                                    </div>
                                    <div className='image-place' style={{ height: '200px', width: '100%', backgroundColor: '#aaa' }}>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col md="7">
                            <h3 className='fs-1 mb-0'><b>01</b></h3>
                            <h3 className='fs-1 mb-0 mt-0'><b>WORK WITH US !</b></h3>
                        </Col>
                    </Row> */}

                    <Row className='mt-5'>
                        <Col md="6">
                            <Row>
                                <Col md="6" className='p-1'>
                                    <div className='image-place' style={{ height: '620px', width: '100%', backgroundColor: '#aaa' }}>
                                    </div>
                                </Col>

                                <Col md="6" className=''>
                                    <Row>
                                        <Col lg={12} md={6} sm={4} xs={4} className='p-1'>
                                            <div className='image-place mb-0' style={{ height: '200px', width: '100%', backgroundColor: '#aaa' }}>
                                            </div>
                                        </Col>
                                        <Col lg={12} md={6} sm={4} xs={4} className='p-1'>
                                            <div className='image-place mb-0' style={{ height: '200px', width: '100%', backgroundColor: '#aaa' }}>
                                            </div>
                                        </Col>
                                        <Col lg={12} md={6} sm={4} xs={4} className='p-1'>
                                            <div className='image-place mb-0' style={{ height: '200px', width: '100%', backgroundColor: '#aaa' }}>
                                            </div>
                                        </Col>
                                    </Row>

                                    {/* <div className='image-place mb-2' style={{ height: '200px', width: '100%', backgroundColor: '#aaa' }}>
                                    </div>
                                    <div className='image-place' style={{ height: '200px', width: '100%', backgroundColor: '#aaa' }}>
                                    </div> */}
                                </Col>
                            </Row>
                        </Col>
                        <Col md="6" className='st-mt-1'>
                            <h3 className='fs-1 mb-0'><b>02</b></h3>
                            <h3 className='fs-1 mb-5 mt-0'><b>RESOURCES !</b></h3>
                            <div className="">
                                {resources.map((resource, index) => (
                                    <div key={resource.id} className="mb-3">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <p
                                                color="black"
                                                className='text-white fs-4'
                                                onClick={() => toggle(index)}
                                                style={{ textAlign: "left", borderBottom: '1px solid#fff', cursor: 'pointer', }}
                                            >
                                                {resource.name}
                                                <FaAngleDown className='ms-5' />
                                            </p>
                                            <a href={resource.link} download className="button-primary btn btn-secondary ms-2">
                                                Download
                                            </a>
                                        </div>
                                        <Collapse isOpen={openIndex === index} >
                                            <Card style={{ border: 'none' }}>
                                                <CardBody
                                                    className="d-flex justify-content-between align-items-center"
                                                    style={{ backgroundColor: "black", color: "white" }}
                                                >
                                                    <span className='fs-5'>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad  dolor sit amet {resource.name}</span>
                                                </CardBody>
                                            </Card>
                                        </Collapse>
                                    </div>
                                ))}
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

export default Freekick;
