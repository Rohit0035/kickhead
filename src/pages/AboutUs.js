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
import FieldsetBox from '../comonent/FieldsetBox';
import AboutVedeo from '../assets/images/common/about-video.mp4';

const AboutUs = () => {
    return (
        <>
            <Header />
            <section
                style={{
                    height: '100vh',
                    paddingTop:'120px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                className="about-section text-center"
                id="about-section"
            >
                <Container fluid>
                    <video autoPlay loop muted
                        style={{
                            width: '100%',
                            // height: '600px',
                            objectFit: 'cover',
                            zIndex: '-1'
                        }}
                    >
                        <source src={AboutVedeo} type="video/mp4" />
                    </video>
                </Container>
            </section>
           
          </>
    );
};

export default AboutUs;
