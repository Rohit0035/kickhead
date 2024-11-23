import React, { useState, useEffect } from 'react';
import "../assets/css/kickstart.css";
import { Col, Container, Row } from 'reactstrap';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { PiHorseFill } from "react-icons/pi";
import Header from '../comonent/Header';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css";
import GetInTouch from '../comonent/GetInTouch';
import { FaUser } from 'react-icons/fa';
import logomid from "../assets/images/common/logo.jpg"
import Footer from '../comonent/Footer';

const KickstartFlow = () => {
  return (
    <>
      <Header />
      <section className="sec-kickstart">
        <Container fluid>
          <Row>
            <Col md="1">
            </Col>
            <Col md="10">
              <ScrollAnimation animateIn='fadeIn'>
                <h2 className='text-center heading-bold mb-0 ks-heading-bold'>Kickstart</h2>
                <h2 className='text-center heading-bold mb-0 ks-heading-bold'> 10X Suite</h2>
              </ScrollAnimation>
            </Col>
            <Col md="1">
            </Col>
          </Row>
          <ScrollAnimation animateIn='fadeInLeft'>
            <div className="section-container p-5 mt-0">
              <div className="text-content">
                <p className='fs-5'>
                  Effortlessly scale your business from X to 10X with<br />
                  Kickheads all in one, end-to-end solutions.
                </p>
                <p className='fs-5'>
                  From product discovery to brand launch, get go to <br />
                  market-ready in just a few months.
                </p>
              </div>
              {/* <div className="icon-container">
                <img src={logomid} alt="Zebra Icon" className="zebra-icon" />
              </div> */}
              <div className="">
                <img src={logomid} alt="Zebra Icon" className="zebra-icon" width='120px' />
              </div>
            </div>
          </ScrollAnimation>
        </Container>
      </section>

      <section className='mt-0'>
        <Container fluid>
          <div className='main-gd-bx'>
            <Row>
              <Col md="12">
                <Row className='mb-5 mt-3'>
                  <Col md="2">
                    <h2 className='heading-bold'>01</h2>
                  </Col>
                  <Col md="7" style={{ borderTop: '1px solid#fff' }}>
                    <h4 className='fs-4 mt-2'><b>Discovery:</b> </h4>
                    <p className='fs-5'>Laying the Foundation</p>
                  </Col>
                  <Col md="3">
                    <ul className='fs-4' style={{ marginTop: '-19px' }}>
                      <li>Market Insight </li>
                      <li>Behavioral </li>
                    </ul>
                  </Col>
                </Row>
                <Row className='top-space'>
                  <Col md="2">
                    <h2 className='heading-bold'>02</h2>
                  </Col>
                  <Col md="7" style={{ borderTop: '1px solid#fff' }}>
                    <h4 className='fs-4 mt-2'><b>Decoding: </b></h4>
                    <p className='fs-5'>Sharpening Strategy</p>
                  </Col>
                  <Col md="3">
                    <ul className='fs-4' style={{ marginTop: '-19px' }}>
                      <li>Market Insight </li>
                      <li>Behavioral </li>
                    </ul>
                  </Col>
                </Row>
                <Row className='top-space'>
                  <Col md="2">
                    <h2 className='heading-bold'>03</h2>
                  </Col>
                  <Col md="7" style={{ borderTop: '1px solid#fff' }}>
                    <h4 className='fs-4 mt-2'><b>Decisions:</b> </h4>
                    <p className='fs-5'>Building Vendor Alliances</p>
                  </Col>
                  <Col md="3">
                    <ul className='fs-4' style={{ marginTop: '-19px' }}>
                      <li>Market Insight </li>
                      <li>Behavioral </li>
                    </ul>
                  </Col>
                </Row>
                <Row className='top-space'>
                  <Col md="2">
                    <h2 className='heading-bold'>04</h2>
                  </Col>
                  <Col md="7" style={{ borderTop: '1px solid#fff' }}>
                    <h4 className='fs-4 mt-2'><b>Design:</b></h4>
                    <p className='fs-5'>Perfecting the Product & Brand Identity</p>
                  </Col>
                  <Col md="3">
                    <ul className='fs-4' style={{ marginTop: '-19px' }}>
                      <li>Market Insight </li>
                      <li>Behavioral </li>
                    </ul>
                  </Col>
                </Row>
                <Row className='top-space bottom-space'>
                  <Col md="2">
                    <h2 className='heading-bold'>05</h2>
                  </Col>
                  <Col md="7" style={{ borderTop: '1px solid#fff' }}>
                    <h4 className='fs-4 mt-2'><b>Deployment:</b></h4>
                    <p className='fs-5'>Engaging the Marketplace</p>
                  </Col>
                  <Col md="3">
                    <ul className='fs-4' style={{ marginTop: '-19px' }}>
                      <li>Market Insight </li>
                      <li>Behavioral </li>
                    </ul>
                  </Col>
                </Row>
                <div className="icon-container text-center">
                  <img src={logomid} alt="Zebra Icon" className="zebra-icon" width='120px'/>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      <section className='top-space'>
        <Container fluid>
          <Row>
            <Col md="6">
              <div className=' p-5 grid-mid-2 shadow'>
                <h3 className=''><b>Benefits</b></h3>
                <p className='text-start fs-5 '>
                  Own your entrepreneurial journey with ease, peace, and control. And stay
                  focused on expanding your vision while we manage the rest.
                </p>
              </div>
            </Col>
            <Col md="6">
              <div className=' p-5 grid-mid-2'>
                <h3 className=''><b>Outcomes</b></h3>
                <p className='text-start fs-5'>
                  <b>Streamline business. Reduce time. Optimize cost and Enable smooth growth</b>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>


      <section className='mt-70 mb-50'>
        <Container fluid>
          <Row>
            <Col md="12">
              <ScrollAnimation animateIn='fadeInLeft'>
                <div className=' grid-get-intouch'>
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

      <Footer/>
    </>
  );
};

export default KickstartFlow;
