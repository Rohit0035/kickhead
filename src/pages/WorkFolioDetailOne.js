



import React from 'react';
import Header from '../comonent/Header';
import { Container, Row, Col } from 'reactstrap';
import Footer from "../comonent/Footer"


const WorkFolioDetailOne = () => {
    return (
        <>
            <Header />
            <section className="sec-workfolio-detail" >
                <Container fluid>
                    <Row  >
                        <Col lg={6} md={12} sm={12} xs={12}>
                            <h1 className='heading-bold mb-5 fw-300'>
                                PROJECT NAME
                            </h1>
                            <p className='mt-5'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                                aute irure dolor in reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                non proident, sunt in culpa qui officia deserunt mollit anim id est
                                laborum
                            </p>
                        </Col>
                        <Col lg={6} md={12} sm={12} xs={12}>
                            <div className='image-place' style={{ height: '400px', width: '100%', backgroundColor: '#aaa' }}>

                            </div>
                        </Col>
                        <Col lg={12} md={6} sm={6} xs={6}>
                            <div className='image-place mt-5 mb-3' style={{ height: '400px', width: '100%', backgroundColor: '#aaa' }}>

                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={6} xs={6}>
                            <div className='list-p mt-5 mb-3'>
                                <p>Lorem ipsum dolor</p>
                                <p>sit amet,</p>
                                <p> consectetur </p>
                                <p>adipiscing elit,</p>
                                <p>sed do eiusmod tempor</p>
                            </div>
                        </Col>
                        <Col lg={6} md={12} sm={12} xs={12}>
                            <p className='mt-5'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum
                            </p>
                            <p className='mt-1'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum
                            </p>
                        </Col>
                        <Col lg={6} md={6} sm={6} xs={6}>
                            <div className='image-place mt-5 mb-3' style={{ height: '400px', width: '100%', backgroundColor: '#aaa' }}>

                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={6} xs={6}>
                            <div className='image-place mt-5 mb-3' style={{ height: '400px', width: '100%', backgroundColor: '#aaa' }}>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    );
};

export default WorkFolioDetailOne;

