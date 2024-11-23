



import React from 'react';
import Header from '../comonent/Header';
import { Container, Row, Col } from 'reactstrap';



const WorkFolioDetailOne = () => {
    return (
        <>
            <Header />
            <section className="mb-5 mt-5">
                <Container fluid>
                    <Row  >
                        <Col md="6">
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
                        <Col md="6">
                            <div className='image-place' style={{ height: '400px', width: '100%', backgroundColor: '#aaa' }}>

                            </div>
                        </Col>
                        <Col md="12">
                            <div className='image-place mt-5 mb-3' style={{ height: '400px', width: '100%', backgroundColor: '#aaa' }}>

                            </div>
                        </Col>
                        <Col md="6" className='mt-5'>
                            <p>Lorem ipsum dolor</p>
                            <p>sit amet,</p>
                            <p> consectetur </p>
                            <p>adipiscing elit,</p>
                            <p>sed do eiusmod tempor</p>

                        </Col>
                        <Col md="6">
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
                        <Col md="6">
                            <div className='image-place mt-5 mb-3' style={{ height: '400px', width: '100%', backgroundColor: '#aaa' }}>

                            </div>
                        </Col>
                        <Col md="6">
                            <div className='image-place mt-5 mb-3' style={{ height: '400px', width: '100%', backgroundColor: '#aaa' }}>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default WorkFolioDetailOne;

