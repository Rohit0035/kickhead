import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import '../assets/css/TeamComponent.css'; // Custom styles for your team component
import Header from '../comonent/Header';
import Teamimg from "../assets/images/common/tean-1.jpg";
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaLinkedin, FaXTwitter } from 'react-icons/fa6';

const teamMembers = [
    { name: 'John Doe', designation: 'CEO', description: 'John is the CEO with a passion for leadership and innovation.', socials: { linkedin: '#', twitter: '#', facebook: '#' } },
    { name: 'Jane Smith', designation: 'CTO', description: 'Jane is our CTO, expert in technology and development.', socials: { linkedin: '#', twitter: '#', facebook: '#' } },
    { name: 'Alice Johnson', designation: 'Designer', description: 'Alice is our creative designer who crafts amazing user experiences.', socials: { linkedin: '#', twitter: '#', facebook: '#' } },
    { name: 'Mark Brown', designation: 'Developer', description: 'Mark is a software developer, dedicated to building seamless solutions.', socials: { linkedin: '#', twitter: '#', facebook: '#' } },
];

const Team = () => {
    return (
        <>
            <Header />
            <section className="mb-5">
                <Container fluid>
                    <h1 className="heading-bold text-center">OUR TEAM</h1>
                    <Row>
                        {teamMembers.map((member, index) => (
                            <Col lg={3} md={3} sm={2} xs={12}>
                                <div className="team-member" key={index}>
                                    <div className="flip-container">
                                        <div className="flipper">
                                            {/* Front Side: Image and Name */}
                                            <div className="front">
                                                <div className="image-placeholder">
                                                    <img src={Teamimg} alt="" width='100%' />
                                                </div>
                                                <div className='team-content'>
                                                     <h5>{member.name}</h5>
                                                     <p>{member.designation}</p>
                                                </div>
                                            </div>
                                            
                                            {/* Back Side: Description and Social Links */}
                                            <div className="back">
                                                <div className="team-content">
                                                    <h5 className="team-name">{member.name}</h5>
                                                    <p className="team-designation">{member.designation}</p>
                                                    <p className="team-description">{member.description}</p>
                                                    <div className="social-links">
                                                        <Link className='socil-icons'>
                                                             <FaFacebook/>
                                                        </Link>
                                                        <Link className='socil-icons'>
                                                             <FaInstagram/>
                                                        </Link>
                                                        <Link className='socil-icons'>
                                                             <FaXTwitter/>
                                                        </Link>
                                                        <Link className='socil-icons'>
                                                             <FaLinkedin/>
                                                        </Link>
                                                    </div>
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
        </>
    );
};

export default Team;
