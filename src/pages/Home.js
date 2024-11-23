import React from 'react';
import { Container } from 'reactstrap';
import "animate.css/animate.compat.css";
import KickVideo from '../assets/images/common/KickHead.mp4';
import AboutVedeo from '../assets/images/common/about-video.mp4';
import HeaderHome from '../comonent/HeaderHome';
import arrow from '../assets/images/common/arrow.png'
import Footer from '../comonent/Footer';
const Home = () => {
    // Scroll handler function to scroll to the "about-section"
    const scrollToAboutSection = () => {
        document.getElementById('about-section').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <section>
                <div className='bg-main' style={{ position: 'relative', overflow: 'hidden' }}>
                    {/* Background video */}
                    <video loop autoPlay
                        style={{
                            width: '100%',
                            height: '600px',
                            objectFit: 'cover',
                            zIndex: '-1'
                        }}
                    >
                        <source src={KickVideo} type="video/mp4" />
                    </video>
                    {/* Overlay div */}
                    <div style={{
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        width: '100%',
                        height: '100%'
                    }}>
                        <HeaderHome />
                        <Container fluid>
                            <div className='pt-5 pb-5'>
                                {/* Scroll down button */}
                                <div onClick={scrollToAboutSection} style={{ position: 'absolute', bottom: '20px', width: '100%', textAlign: 'center', cursor: 'pointer', }}>
                                    <button
                                        style={{
                                            background: '#000',
                                            cursor: 'pointer',
                                            width: '70px',
                                            height: '70px',
                                            animation: 'bounce 2s infinite',
                                            borderRadius: '100px',
                                            border: '5px solid#000',
                                            padding: '2px'
                                        }}
                                    >
                                        <span>
                                            <img src={arrow} alt='' width='40px' />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </Container>
                    </div>
                </div>
            </section>

            {/* Hidden "about section" */}
            <section
                style={{
                    height: '100vh',
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

            <Footer/>
        </>
    );
};

export default Home;


