import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import '../assets/css/TeamComponent.css'; // Custom styles for your team component
import Header from '../comonent/Header';
import Teamimg from "../assets/images/common/tean-1.jpg";
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from 'react-icons/fa';
import asif1 from "../assets/images/common/asif2.jpeg"
import udit1 from "../assets/images/common/Udit1.jpg"
import Footer from '../comonent/Footer';
import ScrollAnimation from 'react-animate-on-scroll';
import GetInTouch from '../comonent/GetInTouch';

const teamMembers = [
    {
        name: 'Asif Shakeel',
        designation: 'Creative Strategist',
        description: '20+ years of expertise in strategy, design & storytelling with global creative agencies. Worked with 20+ startups, entrepreneurs, and  C-suites in kickstarting biz. I love food, films, and spoken words',
        image: asif1, // Add image here
        socials: { linkedin: 'https://www.linkedin.com/in/asif-shakeel-39492b13/', instagram: '#', facebook: '#' }
    },
    {
        name: 'Udit Bhattacharya ',
        designation: 'Behavior Research & Innovation ',
        description: '10+ expertise extend beyond product creation, behavioral science, semiotic & design. Have transformed corporate to mid level startup to industry powerhouse ( featured in Shark tank)',
        image: udit1, // Add image here
        socials: { linkedin: 'https://www.linkedin.com/in/udit-co-founder-creative-tr/', twitter: '#', facebook: '#' }
    },
    {
        name: 'Udit Bhattacharya ',
        designation: 'Behavior Research & Innovation ',
        description: '10+ expertise extend beyond product creation, behavioral science, semiotic & design. Have transformed corporate to mid level startup to industry powerhouse ( featured in Shark tank)',
        image: asif1, // Add image here
        socials: { linkedin: 'https://www.linkedin.com/in/udit-co-founder-creative-tr/', twitter: '#', facebook: '#' }
    },
    {
        name: 'Mark Brown',
        designation: 'Developer',
        description: 'Mark is a software developer, dedicated to building seamless solutions.',
        image: udit1, // Add image here
        socials: { linkedin: '#', twitter: '#', facebook: '#' }
    },
];

const Team = () => {
    return (
        <>
            <Header />
            <section className="sec-team">
                <Container fluid>
                    <ScrollAnimation animateIn='fadeInLeft'>
                        <div className=''>
                            <h1 className="heading-bold text-center mb-5">OUR TEAM</h1>
                        </div>
                    </ScrollAnimation>
                    <Row>
                        {teamMembers.map((member, index) => (
                            <Col lg={3} md={6} sm={6} xs={6} key={index}>
                                <div className="team-member">
                                    <div className="image-container">
                                        <img src={member.image} alt={`${member.name}`} className="team-image" />

                                        <div className="overlay">
                                            <div className="overlay-content">
                                                <h5 className="team-name fs-4">{member.name}</h5>
                                                <p className="team-designation"><b>{member.designation}</b></p>
                                                <p className="team-description fs-6">{member.description}</p>
                                                <div className="social-links">
                                                    <Link to={member.socials.linkedin} className="socil-icons"><FaLinkedin /></Link>
                                                    <Link to="#" className="socil-icons"><FaInstagram /></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
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

export default Team;
