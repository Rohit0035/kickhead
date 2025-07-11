import React, { } from 'react';
import "../assets/css/kickstart.css";
import { Col, Container, Row } from 'reactstrap';
import 'react-vertical-timeline-component/style.min.css';
import Header from '../comonent/Header';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css";
import GetInTouch from '../comonent/GetInTouch';
import logomid from "../assets/images/common/logo-1.jpg"
import Footer from '../comonent/Footer';
import FieldsetBox from '../comonent/FieldsetBox';
import { Helmet } from 'react-helmet';

const KickstartFlow = () => {
  return (
    <>
      <Helmet>
        <title>Kickstart Your Growth | Kickhead’s Strategic Launchpad</title>
        <meta
          name="description"
          content=" Kickhead offers strategic solutions for startups. From branding to growth marketing, we provide the tools to propel your business from X to 10X."
        />
        <meta
          name="keywords"
          content="startup kickstart, growth solutions, business scaling, strategic branding, Kickhead launchpad."
        />
      </Helmet>
      <Header />
      <section className="sec-kickstart">
        <Container fluid>
          <Row>
            <Col md="1">
            </Col>
            <Col md="10">
              <ScrollAnimation animateIn='fadeIn'>
                <h2 className='text-center heading-bold mb-0 ks-heading-bold'>Kickstart</h2>
                <h2 className='text-center heading-bold mb-5 ks-heading-bold'> 10X Suite</h2>
              </ScrollAnimation>
            </Col>
            <Col md="1">
            </Col>
          </Row>
          <ScrollAnimation animateIn='fadeInLeft'>
            <div className="section-container">
              <p className='fs-5 mt-2'>
                Effortlessly scale your business from X to 10X with<br />
                Kickheads all in one, end-to-end solutions.
              </p>
              <p className='fs-5 '>
                From product discovery to brand launch, get go to <br />
                market-ready in just a few months.
              </p>
              <div className="icon-container text-center">
                <img src={logomid} alt="Zebra Icon" className="zebra-icon" width='120px' />
              </div>
            </div>
          </ScrollAnimation>
        </Container>
      </section>

      <section className='mt-100'>
        <Container fluid>
          <div className='main-gd-bx'>
            <Row>
              <Col md="12">
                <Row className='mb-5 mt-3'>
                  <Col lg={2} md={2} sm={2} xs={2} >
                    <h2 className='heading-bold kick-num'>01</h2>
                  </Col>
                  <Col lg={6} md={5} sm={5} xs={5} style={{ borderTop: '1px solid#fff' }}>
                    <h4 className='mt-2  kick-st-h4'><b>Discovery:</b> </h4>
                    <p className='kick-sub-title'>Laying the Foundation</p>
                  </Col>
                  <Col lg={4} md={5} sm={5} xs={5}>
                    <ul className='kick-st-ul' style={{ marginTop: '-19px' }}>
                      <li>Market Insight </li>
                      <li>Behavioral Study</li>
                    </ul>
                  </Col>
                </Row>
                <Row className='top-space'>
                  <Col lg={2} md={2} sm={2} xs={2} >
                    <h2 className='heading-bold kick-num'>02</h2>
                  </Col>
                  <Col lg={6} md={5} sm={5} xs={5} style={{ borderTop: '1px solid#fff' }}>
                    <h4 className='mt-2  kick-st-h4'><b>Decoding: </b></h4>
                    <p className='kick-sub-title'>Sharpening Strategy</p>
                  </Col>
                  <Col lg={4} md={5} sm={5} xs={5}>
                    <ul className='kick-st-ul' style={{ marginTop: '-19px' }}>
                      <li>Product Selection & Strategy </li>
                      <li>Customer Value Proposition </li>
                    </ul>
                  </Col>
                </Row>
                <Row className='top-space'>
                  <Col lg={2} md={2} sm={2} xs={2} >
                    <h2 className='heading-bold kick-num'>03 </h2>
                  </Col>
                  <Col lg={6} md={5} sm={5} xs={5} style={{ borderTop: '1px solid#fff' }}>
                    <h4 className=' mt-2  kick-st-h4'><b>Decisions:</b> </h4>
                    <p className='kick-sub-title'>Building Vendor Alliances</p>
                  </Col>
                  <Col lg={4} md={5} sm={5} xs={5}>
                    <ul className='kick-st-ul' style={{ marginTop: '-19px' }}>
                      <li>Vendor Network Development </li>
                      <li>Quality Assurance </li>
                    </ul>
                  </Col>
                </Row>
                <Row className='top-space'>
                  <Col lg={2} md={2} sm={2} xs={2} >
                    <h2 className='heading-bold kick-num'>04</h2>
                  </Col>
                  <Col lg={6} md={5} sm={5} xs={5} style={{ borderTop: '1px solid#fff' }}>
                    <h4 className=' mt-2  kick-st-h4'><b>Design:</b></h4>
                    <p className=' kick-sub-title'>Perfecting the Product & Brand Identity</p>
                  </Col>
                  <Col lg={4} md={5} sm={5} xs={5}>
                    <ul className=' kick-st-ul' style={{ marginTop: '-19px' }}>
                      <li>Golden Sample & Production </li>
                      <li>Brand Identity & Digital Presence </li>
                    </ul>
                  </Col>
                </Row>
                <Row className='top-space bottom-space'>
                  <Col lg={2} md={2} sm={2} xs={2} >
                    <h2 className='heading-bold kick-num'>05</h2>
                  </Col>
                  <Col lg={6} md={5} sm={5} xs={5} style={{ borderTop: '1px solid#fff' }}>
                    <h4 className=' mt-2  kick-st-h4'><b>Deployment:</b></h4>
                    <p className=' kick-sub-title'>Engaging the Marketplace</p>
                  </Col>
                  <Col lg={4} md={5} sm={5} xs={5}>
                    <ul className=' kick-st-ul' style={{ marginTop: '-19px' }}>
                      <li>Market Activation </li>
                      <li>Platform Optimization </li>
                    </ul>
                  </Col>
                </Row>
                <div className="icon-container text-center">
                  <img src={logomid} alt="Zebra Icon" className="zebra-icon" width='120px' />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      <section className='top-space'>
        <Container fluid>
          <Row>
            <Col md="6" className='mb-4'>
              {/* <div className=' border p-5 grid-mid-2'>
                <h3 className='top-text'><b>Benefits</b></h3>
                <p className='text-start fs-5 '>
                  Own your entrepreneurial journey with ease, peace, and control. And stay
                  focused on expanding your vision while we manage the rest.
                </p>
              </div> */}
              <FieldsetBox legendText="Benefits">
                <p className='text-start text-white fs-5 p-4 st-st-width'>
                  Own your entrepreneurial journey with ease, peace, and control. And stay
                  focused on expanding your vision while we manage the rest.
                </p>
              </FieldsetBox>
            </Col>
            <Col md="6" className='mb-3'>
              <FieldsetBox legendText="Outcomes">
                <ul className='text-start text-white fs-5 p-4 st-st-width '>
                  <li>Streamline business</li>
                  <li>Reduce time</li>
                  <li>Optimize cost</li>
                  <li>Enable smooth growth</li>
                </ul>
              </FieldsetBox>
              {/* <div className='border p-5 grid-mid-2'>
                <h3 className='top-text'><b></b></h3>
                <p className='text-start fs-5'>
                  <b>Streamline business. Reduce time. Optimize cost and Enable smooth growth</b>
                </p>
              </div> */}
            </Col>
          </Row>
        </Container>
      </section>


      <section className='mt-70 mb-50'>
        <Container fluid>
          <Row>
            <Col md="12">
              <ScrollAnimation animateIn='fadeInLeft'>
                <FieldsetBox legendText="Excited !">
                  <p className='text-center fs-5 text-white mt-2'>
                    Let’s create awesomeness, share your vision
                  </p>
                  <Row>
                    <Col md='2'></Col>
                    <Col md='8'>
                      <GetInTouch />
                    </Col>
                    <Col md='2'></Col>
                  </Row>
                </FieldsetBox>
                {/* <div className='grid-get-intouch'>
                  <h3 className='top-text-form'>Excited !</h3>
                  <p className='text-center fs-5 text-white mt-5'>
                    Let’s create awesomeness, share your vision
                  </p>
                  <Row>
                    <Col md='2'></Col>
                    <Col md='8'>
                      <GetInTouch />
                    </Col>
                    <Col md='2'></Col>
                  </Row>
                </div> */}
              </ScrollAnimation>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
};

export default KickstartFlow;
