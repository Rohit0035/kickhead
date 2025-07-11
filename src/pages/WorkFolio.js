import React from 'react';
import '../assets/css/WorkFolio.css';
import { Container, Row, Col, Button } from 'reactstrap';
import Header from '../comonent/Header';
import boximg from '../assets/images/common/boximg.jpg'
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import AfFilm from "../assets/images/workfolio/avfilm-1.mp4"
import AfFilm2 from "../assets/images/workfolio/avfilm-2.mp4"
import BrandCredicialone from "../assets/images/workfolio/br_cr_Mind.jpg"
import BrandCredicialTwo from "../assets/images/workfolio/br_cr_digi.jpg"
import BrandCredicialthird from "../assets/images/workfolio/br_cr_baramdaah.jpg"
import BrandCredicialfour from "../assets/images/workfolio/br_cr_metapractice.jpg"
import pdf1 from "../assets/pdf/Pixelparty.pdf"
import pdfmatapractice from "../assets/pdf/MetaPractice.pdf"
import pdfbramdhaa from "../assets/pdf/Baramdaah.pdf"
import pdfMind from "../assets/pdf/Mindpurpose.pdf"
import brandidentityone from "../assets/images/workfolio/br-identity-aivin.jpg"
import brandidentitytwo from "../assets/images/workfolio/br-identity-edrio.jpg"
import brandidentitythree from "../assets/images/workfolio/br-id-hunger.jpg"
import pdfhunger from "../assets/pdf/Hunarbagh.pdf"
import pdfEdrio from "../assets/pdf/Edrio.pdf"
import pdfaivin from "../assets/pdf/Aivin.pdf"
import pdflogodesign1 from "../assets/pdf/logodesign1.pdf"
import pdflogodesign2 from "../assets/pdf/logodesignhunarbagh.pdf"
import logodesignimg from "../assets/images/workfolio/logo-design-1.jpg"
import pitchpdf1 from "../assets/pdf/pd_Dainik bhaskar@UP.pdf"
import pitchpdf2 from "../assets/pdf/pd_WebD.pdf"
import Footer from '../comonent/Footer';
import GetInTouch from '../comonent/GetInTouch';
import FieldsetBox from '../comonent/FieldsetBox';
import hunger1 from "../assets/images/common/hungerbagh.jpg"
import mind1 from "../assets/images/common/mind-img.jpg"
import pklogo1 from "../assets/images/common/pk-logo.jpg"
import pixelpt from "../assets/images/common/pixel-pt.jpg"
import handiaudio from "../assets/images/common/HANDI_TEHZEEB.mp3"
import audeothumb from "../assets/images/common/audio-thum.jpeg"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Helmet } from 'react-helmet';
import aweinspire from "../assets/images/common/AWEvideo.mp4"

// pitch deck
import thumnail1 from "../assets/images/pitchdeck/WebD_thumnail.png"
import thumnail2 from "../assets/images/pitchdeck/kraftshila_thumnail.png"
import thumnail3 from "../assets/images/pitchdeck/FBParKhoj_thumnail.png"
import thumnail4 from "../assets/images/pitchdeck/DB_UP_thumnail.png"
import pitchdeckwebd from "../assets/images/pitchdeck/WebD.pdf"
import pitchdeckkrafyshila from "../assets/images/pitchdeck/Kraftshala.pdf"
import pitchdeckFbpe from "../assets/images/pitchdeck/FB Pe Khoj.pdf"
import pitchdeckdaink from "../assets/images/pitchdeck/Dainik bhaskar@UP.pdf"

// logodesign
import thumkick from "../assets/images/common/kickhead-tbumnail.jpg"
import khthumnail2 from "../assets/images/common/KH-thumevfilm.png"
import kickvideo from "../assets/images/common/videokick.mp4"
import hbdlogo from "../assets/images/common/HBLOgo.jpg"
import pixellogo from "../assets/images/common/PixelPartyLogo.jpg"

// behavestudy
import beave1 from "../assets/images/behavestudy/KiTchen.png"
import beave1pdf from "../assets/images/behavestudy/I N D I A N K I T C H E N _ D O C.pdf"
import beave2 from "../assets/images/behavestudy/Crossword.png"
import beave2pdf from "../assets/images/behavestudy/behaviour research_Crossword.pdf"
import beave3 from "../assets/images/behavestudy/Jugadu_sharktank.png"
import beave3pdf from "../assets/images/behavestudy/Behaviourresearch_Sharktank.pdf"
import beave4 from "../assets/images/behavestudy/Move_decode.png"
import beave4pdf from "../assets/images/behavestudy/Decode Athleisure.pdf"

import Kickcricket from "../assets/images/common/kick-cricket.mp4"
import Kicktvserial from "../assets/images/common/kick-tvserial.mp4"



const ProjectsLayout = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const bevaheStudy = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };


    const brandcredential = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const brandidentity = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const logodesign = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const pichdeack = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const websettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };




    return (
        <>
            <Helmet>
                <title>Kickhead Work | Transforming Startups into Icons</title>
                <meta
                    name="description"
                    content="Explore our transformative work that scales startups into recognizable brands. From branding to campaigns, we turn ideas into lasting impacts for a smooth entrepreneurial journey"
                />
                <meta
                    name="keywords"
                    content="portfolio, startup branding, creative campaigns, impactful work, Kickhead success stories."
                />
            </Helmet>
            <Header />
            <section className="projects-layout pb-5 sec-work ">
                <Container fluid>
                    <ScrollAnimation animateIn='fadeInLeft'>
                        <Row>
                            <Col md="12">
                                <h1 className='heading-bold text-center text-white'>
                                    WORKFOLIO
                                </h1>
                            </Col>
                        </Row>
                    </ScrollAnimation>

                    {/* grid-1 */}
                    <ScrollAnimation animateIn='fadeIn'>
                        <h3 className='workfolio-heading mb-3'>AV <span className='text-tyle'>Film</span></h3>
                        <Slider {...settings} className='mb-5'>
                            <div className="project-card">
                                <div className="image-place">
                                    <video width="100%" height="100%" autoPlay muted loop>
                                        <source src={AfFilm} type="video/mp4" />
                                    </video>
                                </div>
                                <div className="text-place text-center">
                                    <h4 className='fs-5'>Above & Beyond </h4>
                                    <hr />
                                    <h6 className='fs-6'>Rahul Jain</h6>
                                    <p>Director at Sambhav Group </p>
                                    <p>Running for President EO Raipur chapter 2023: Campaign </p>
                                    <p>
                                        How to dial EO core value- ‘Think big, be bold’, to bring out the best in EO member
                                    </p>
                                    {/* <Link to="/work-folio-detail" className='button-primary btn btn-secondary'>Read More</Link> */}
                                </div>
                            </div>
                            <div className="project-card">
                                <div className="image-place">
                                    <video width="100%" height="100%" autoPlay muted loop>
                                        <source src={aweinspire} type="video/mp4" />
                                    </video>
                                </div>
                                <div className="text-place text-center">
                                    <h4 className='fs-5'>AWE Inspiring</h4>
                                    <hr />
                                    <h6 className='fs-6'>Manoj Lunkad</h6>
                                    <p>Business Owner at Maina Sales and Marketing</p>
                                    <p>Running for President EO Raipur chapter 2023: Campaign</p>
                                    <p>
                                        How to dial growth mindset inspired by nature around to bring the best in EO member
                                    </p>
                                    {/* <Link className='button-primary btn btn-secondary'>Read More</Link> */}
                                </div>
                            </div>
                            <div className="project-card">
                                <div className="image-place">
                                    <img src={audeothumb} alt='' width="100%" className='mt-5' />
                                </div>
                                <div className="text-place text-center">
                                    <h4 className='fs-5'>Handi Tehzeeb</h4>
                                    <hr />
                                    <h6 className='fs-6 mb-5'>Launch rap jingle</h6>
                                    <audio controls style={{ width: '100%' }}>
                                        <source src={handiaudio} type="audio/mpeg" />
                                        Your browser does not support the audio element.
                                    </audio>
                                </div>
                            </div>
                            {/* <div className="project-card">
                                <div className="image-place">
                                    <video width="100%" height="100%" autoPlay muted loop>
                                        <source src={AfFilm} type="video/mp4" />
                                    </video>
                                </div>
                                <div className="text-place text-center">
                                    <h4 className='fs-5'>Mega blockbuster delivered</h4>
                                    <hr />
                                    <h6 className='fs-6'>SAP India</h6>
                                    <p>Post-event case study: SAP Now 2023 – Mumbai</p>
                                    <p>
                                        Present 6 months: pitch, planning & program delivery magnum opus in a case study
                                    </p>
                                    <Link className='button-primary btn btn-secondary'>Read More</Link>
                                </div>
                            </div> */}
                            <div className="project-card">
                                <div className="image-place">
                                   <video width="100%" height="100%" autoPlay muted loop>
                                        <source src={kickvideo} type="video/mp4" />
                                    </video>
                                </div>
                                <div className="text-place text-center">
                                    <h4 className='fs-5'>Makers of New</h4>
                                    <hr />
                                    <h6 className='fs-6'>Kickhead</h6>
                                    <p>Start Up inspired creative agency</p>
                                    <p>Showcase Kickhead's way of thinking, and life</p>
                                    <p>
                                       Manifest the importance of Kick by announcing the launch of Kickhead 
                                    </p>
                                    {/* <a href='https://youtu.be/n9Jo9fVF_uw ' className='button-primary btn btn-secondary'>View More</a> */}
                                </div>
                            </div>
                             <div className="project-card">
                                <div className="image-place">
                                   <video width="100%" height="100%" autoPlay muted loop>
                                        <source src={Kickcricket} type="video/mp4" />
                                    </video>
                                </div>
                                <div className="text-place text-center">
                                    <h4 className='fs-5'>Chatkara Lagao I</h4>
                                    <hr />
                                    <h6 className='fs-6'>Kickhead's first (feels like first kiss):</h6>
                                    <p>Cricket film for Hawaban Harde</p>
                                    <p>Har Koi Khicha Chala Aaye</p>
                                    {/* <a href='https://youtu.be/n9Jo9fVF_uw ' className='button-primary btn btn-secondary'>View More</a> */}
                                </div>
                            </div>
                             <div className="project-card">
                                <div className="image-place">
                                   <video width="100%" height="100%" autoPlay muted loop>
                                        <source src={Kicktvserial} type="video/mp4" />
                                    </video>
                                </div>
                                <div className="text-place text-center">
                                    <h4 className='fs-5'>Chatkara Lagao II</h4>
                                    <hr />
                                    <h6 className='fs-6'>Kickhead's two to tango:</h6>
                                    <p>TV serial film for Hawaban Harde</p>
                                    <p>Har Koi Khicha Chala Aaye</p>
                                    {/* <a href='https://youtu.be/n9Jo9fVF_uw ' className='button-primary btn btn-secondary'>View More</a> */}
                                </div>
                            </div>
                        </Slider>
                    </ScrollAnimation>


                    {/* grid-2 */}

                    <ScrollAnimation animateIn='fadeInLeft'>
                        <h3 className='workfolio-heading mb-3 text-end'>Behavioral <span className='text-tyle'>Study</span></h3>
                        {/* Card 1 */}

                        <Slider {...bevaheStudy} className='mb-5'>
                            <div className="project-card">
                                <div className="image-place" >
                                    <img src={beave1} alt='' width="100%" className='mt-5' />
                                </div>
                                <div className="text-place text-center">
                                    <h4 className='fs-5'>Indian kitchen  </h4>
                                    <hr></hr>
                                    {/* <h6 className='fs-6'>Edrio</h6> */}
                                    <p>12 cities' socio-cultural understanding of evolving Indian kitchen   </p>
                                    {/* <p>Decode & discover codes of Athleisure  </p> */}
                                    {/* <p>
                                        Cultural effect on consumer behavior and category know-how
                                    </p> */}
                                     <a href={beave1pdf} className='button-primary btn btn-secondary'>Read More</a>
                                </div>
                            </div>
                            <div className="project-card">
                                <div className="image-place" >
                                    <img src={beave4} alt='' width="100%" className='mt-5' />
                                </div>
                                <div className="text-place text-center">
                                    <h4 className='fs-5'>Movement & Mobility </h4>
                                    <hr></hr>
                                    <h6 className='fs-6'>Edrio</h6>
                                    <p>Oswal Group  </p>
                                    <p>Decode & discover codes of Athleisure  </p>
                                    <p>
                                        Cultural effect on consumer behavior and category know-how
                                    </p>
                                    <a href={beave3pdf} className='button-primary btn btn-secondary'>Read More</a>
                                </div>
                            </div>
                            <div className="project-card">
                                <div className="image-place" >
                                    <img src={beave2} alt='' width="100%" className='mt-5' />
                                </div>
                                <div className="text-place text-center">
                                    <h4 className='fs-5'>A theme-based game on an Indian intelligence agency  </h4>
                                    <hr></hr>
                                    <h6 className='fs-6'>India’s largest crossword </h6>

                                    <p>Research and develop the product portfolio for ILC building engagement
                                    </p>
                                    <p>
                                        To establish ILC as a consumable product
                                    </p>
                                    <a href={beave2pdf} className='button-primary btn btn-secondary'>Read More</a>
                                </div>
                            </div>
                            <div className="project-card">
                                <div className="image-place" >
                                   <img src={beave3} alt='' width="100%" className='mt-5' />
                                </div>
                                <div className="text-place text-center">
                                    <h4 className='fs-5'>High-end farm equipment to the lower and mid-level farmers  </h4>
                                    <hr></hr>
                                    <h6 className='fs-6'>Kg agrotech</h6>
                                    <p>Designing a product portfolio for mid to low-income farmers  </p>
                                    <p>
                                        To establish KG-agrotech as an innovative agrotech company
                                    </p>
                                    <a href={beave4pdf} className='button-primary btn btn-secondary'>Read More</a>
                                </div>
                            </div>
                        </Slider>
                    </ScrollAnimation>

                    {/* grid-3 */}
                    <ScrollAnimation animateIn='fadeIn'>
                        <h3 className='workfolio-heading mb-3'>Brand <span className='text-tyle'>Credential</span></h3>
                        <Slider {...brandcredential} className='mb-5'>
                            <div className="project-card">
                                <div className="image-place" >
                                    <img src={BrandCredicialone} alt='' width='100%' className='mt-5' />
                                </div>
                                <div className="text-place text-center">
                                    <h4 className='fs-5'>Be limitless  </h4>
                                    <hr></hr>
                                    <h6 className='fs-6'>Mandeep Yadav</h6>
                                    <p>Create a transformation coach practice for C suite preparing for tomorrow </p>
                                    <p>Dial design in building trust and credibility as a premium service provider</p>
                                    <a href={pdfMind} className='button-primary btn btn-secondary'>Read More</a>
                                </div>
                            </div>

                            <div className="project-card">
                                <div className="image-place">
                                    <img src={BrandCredicialTwo} alt='' width='100%' className='mt-5' />
                                </div>
                                <div className="text-place text-center">
                                    <h4 className='fs-5'>Digital Awesomeness</h4>
                                    <hr></hr>
                                    <h6 className='fs-6'>Kalpit Dwivedi </h6>
                                    <p>Founder & Sumit Grover Co-founder, Pixel Party  </p>
                                    <p>Change perception from production company to new age digital creator </p>
                                    <p>
                                        Create a whole dialect, narrative, and design to attract new-age creatives and start-up
                                    </p>
                                    <a href={pdf1} className='button-primary btn btn-secondary'>Read More</a>
                                </div>
                            </div>

                            <div className="project-card">
                                <div className="image-place" >
                                    <img src={BrandCredicialthird} alt='' width='100%' className='mt-5' />
                                </div>
                                <div className="text-place text-center">
                                    <h4 className='fs-5'>A dream Called Wedding </h4>
                                    <hr></hr>
                                    <h6 className='fs-6'>Nishi Agrawal</h6>
                                    <p>Founder Baramdaah </p>
                                    <p>Create a popup cum space for experiential wedding curation in central India  </p>
                                    <p>
                                        Create a popup cum space for experiential wedding curation in central India
                                    </p>
                                    <a href={pdfbramdhaa} className='button-primary btn btn-secondary'>Read More</a>
                                </div>
                            </div>

                            <div className="project-card">
                                <div className="image-place" >
                                    <img src={BrandCredicialfour} alt='' width='100%' className='mt-5' />
                                </div>
                                <div className="text-place text-center">
                                    <h4 className='fs-5'>Find your butterfly </h4>
                                    <hr></hr>
                                    <h6 className='fs-6'>Amit Kasliwal</h6>
                                    <p>Founder Dehurdle earlier called MetaPractice </p>
                                    <p>Build relevance and importance of MetaPractice in the life of individual and corporate </p>
                                    <p>
                                        Create a case for building trust and come across as a credible experience provider
                                    </p>
                                    <a href={pdfmatapractice} className='button-primary btn btn-secondary'>Read More</a>
                                </div>
                            </div>

                        </Slider>

                    </ScrollAnimation>

                    {/* grid-4 */}
                    <ScrollAnimation animateIn='fadeInLeft'>
                        <h3 className='workfolio-heading mb-3 text-end'>Brand <span className='text-tyle'>Identity</span></h3>
                        <Slider {...brandidentity} className='mb-5'>
                            <div className="project-card">
                                <div className="image-place" >
                                    <img src={brandidentityone} alt='' width="100%" className='mt-5' />
                                </div>
                                <div className="text-place text-center">
                                    <h4 className='fs-5'>Dynamic metal energy</h4>
                                    <hr></hr>
                                    <h6 className='fs-6'>Aivin</h6>
                                    <p>To establish Aivin as India’s first service-based home hard furnishing company </p>
                                    <p>Define AIVIN's commitment to quality in the world of door hardware.</p>
                                    <a href={pdfaivin} className='button-primary btn btn-secondary'>Read More</a>
                                </div>
                            </div>
                            <div className="project-card">
                                <div className="image-place" >
                                    <img src={brandidentitytwo} alt='' width="100%" className='mt-5' />
                                </div>
                                <div className="text-place text-center">
                                    <h4 className='fs-5'>Comfort in motion</h4>
                                    <hr></hr>
                                    <h6 className='fs-6'>Edrio</h6>
                                    <p>Oswal Group  </p>
                                    <p>Decode athleisure and find a sharp stand for the brand</p>
                                    <p>
                                        Create a brand book that prompts energized living & movement
                                    </p>
                                    <a href={pdfEdrio} className='button-primary btn btn-secondary'>Read More</a>
                                </div>
                            </div>
                            <div className="project-card">
                                <div className="image-place" >
                                    <img src={brandidentitythree} alt='' width='100%' className='mt-5' />
                                </div>
                                <div className="text-place text-center">
                                    <h4 className='fs-5'>Finding yourself </h4>
                                    <hr></hr>
                                    <h6 className='fs-6'>Swati Kasliwal</h6>
                                    <p>Founder Hunarbagh </p>
                                    <p>Create a brand that celebrates handmade Indian art forms in a personalized way </p>
                                    <p>
                                        Create a brand book that traverses home to fashion lifestyle in preserving culture
                                    </p>
                                    <a href={pdfhunger} className='button-primary btn btn-secondary'>Read More</a>
                                </div>
                            </div>
                        </Slider>
                    </ScrollAnimation>


                    {/* grid-5 */}
                    <ScrollAnimation animateIn='fadeIn'>
                        <h3 className='workfolio-heading mb-3'>Logo <span className='text-tyle'>Design</span></h3>
                        <Slider {...logodesign} className='mb-5'>
                            <div className="project-card">
                                <div className="image-place" >
                                    <img src={hbdlogo} alt='' width='100%' className='mt-2' />
                                </div>
                                <div className="text-place text-center">
                                    <h4 className='fs-5'>Finding yourself</h4>
                                    <hr></hr>
                                    <h6 className='fs-6'>Swati Kasliwal</h6>
                                    <p>Founder Hunarbagh</p>
                                    <p>Create a brand that celebrates handmade Indian art forms in a personalized way</p>
                                    <p>A name & design that celebrated Indian art forms & culture </p>
                                    <a href={pdflogodesign2} className='button-primary btn btn-secondary'>Read More</a>
                                </div>
                            </div>
                            <div className="project-card">
                                <div className="image-place" >
                                    <img src={pixellogo} alt='' width='100%' className='mt-2' />
                                </div>
                                <div className="text-place text-center">
                                    <h4 className='fs-5'>Digital Awesomeness </h4>
                                    <hr></hr>
                                    <h6 className='fs-6'>Kalpit Dwivedi</h6>
                                    <p>Founder & Sumit Grover Co-founder, Pixel Party  </p>
                                    <p>Design to attract new-age creatives and start-up  </p>
                                    <p>
                                        Create an identity that celebrates content in every pixel every single time.

                                    </p>
                                    <a href={pdflogodesign1} className='button-primary btn btn-secondary'>Read More</a>
                                </div>
                            </div>
                            {/* <div className="project-card">
                                <div className="image-place" >
                                    <img src={BrandCredicialTwo} alt='' width='100%' className='mt-5' />
                                </div>
                                <div className="text-place text-center">
                                    <h4 className='fs-5'>To establish 24 karat as a springboard to luxury for new homeowners </h4>
                                    <hr></hr>
                                    <h6 className='fs-6'>24 karat </h6>
                                    <p>Designing the brand identity </p>
                                    <p>To establish 24 karat as a springboard to luxury for new homeowners
                                    </p>
                                    <a href={pdflogodesign2} className='button-primary btn btn-secondary'>Read More</a>
                                </div>
                            </div> */}
                            <div className="project-card">
                                <div className="image-place" >
                                    <img src={thumkick} alt='' width='100%' className='mt-5' />
                                </div>
                                <div className="text-place text-center">
                                    <h4 className='fs-5'>Kickhead | Makers of New</h4>
                                    <hr></hr>
                                    <h6 className='fs-6'>Kickhead</h6>
                                    <p>Start Up inspired creative agency</p>
                                    <p>Create a challenger brand with distinctive and creative 'kicks' that help clients stand out and thrive.
                                    </p>
                                    <p>
                                        Powerful, authentic, and unique inspired by Zebra
                                    </p>
                                    {/* <a href={pdflogodesign2} className='button-primary btn btn-secondary'>Read More</a> */}
                                </div>
                            </div>
                        </Slider>
                    </ScrollAnimation>


                    {/* grid-6 */}
                    <ScrollAnimation animateIn='fadeInLeft'>
                        <h3 className='workfolio-heading mb-3 text-end'>Pitch <span className='text-tyle'>Deck</span></h3>
                        <Slider {...pichdeack} className='mb-5'>
                            <div className="project-card">
                                <div className="image-place" >
                                    {/* <video width="100%" height="100%" autoPlay muted loop >
                                        <source src={AfFilm} type="video/mp4" />
                                    </video> */}
                                    <img src={thumnail4}  alt='' width="100%" className='mt-5'/>
                                </div>
                                <div className="text-place text-center">
                                    <h4 className='fs-5'>Zindagi Chunav hai </h4>
                                    <hr></hr>
                                    <h6 className='fs-6'>Dainik Bhaskar</h6>
                                    <p>Noida </p>
                                    <p>To launch Dainik Bhaskar hindi app in UP  </p>
                                    <a href={pitchdeckdaink} className='button-primary btn btn-secondary'>Read More</a>
                                </div>
                            </div>
                            <div className="project-card">
                                <div className="image-place" >
                                    <img src={thumnail1}  alt='' width="100%" className='mt-5'/>
                                </div>
                                <div className="text-place text-center">
                                    <h4 className='fs-5'>Digital Awesomeness </h4>
                                    <hr></hr>
                                    <h6 className='fs-6'>Kalpit Dwivedi </h6>
                                    <p>Founder WebD</p>
                                    <p>Design to attract new-age creatives and start-up  </p>
                                    <p>
                                        Create an identity that celebrates content in every pixel every single time
                                    </p>
                                    <a href={pitchdeckwebd} className='button-primary btn btn-secondary'>Read More</a>
                                </div>
                            </div>
                            <div className="project-card">
                                <div className="image-place" >
                                    <img src={thumnail3}  alt='' width="100%" className='mt-5'/>
                                </div>
                                <div className="text-place text-center">
                                    <h4 className='fs-5'>FB Pe Khoj
                                    </h4>
                                    <hr></hr>
                                    <h6 className='fs-6'>Kalpit Dwivedi </h6>
                                    <p>Founder WebD</p>
                                    <p>Historical treasures are unable to connect with young millennials becoming blind spots and mere selfie backdrops
                                    </p>
                                    <p>
                                        Now don’t just view or see the monuments but experience storytelling with AR
                                    </p>
                                    <a href={pitchdeckFbpe} className='button-primary btn btn-secondary'>Read More</a>
                                </div>
                            </div>
                            <div className="project-card">
                                <div className="image-place" >
                                     <img src={thumnail2}  alt='' width="100%" className='mt-5'/>
                                </div>
                                <div className="text-place text-center">
                                    <h4 className='fs-5'>Jobfirst: Learn, Earn, Pay</h4>
                                    <hr></hr>
                                    <h6 className='fs-6'>Kraftshala </h6>
                                    <p>Founder WebD</p>
                                    <p>To create a content strategy that amplifies positioning</p>
                                    <p>
                                        Bring it alive: Education so good, that you only pay after placement
                                    </p>
                                    <a href={pitchdeckkrafyshila} className='button-primary btn btn-secondary'>Read More</a>
                                </div>
                            </div>
                        </Slider>

                    </ScrollAnimation>


                    {/* grid-7 */}
                    <ScrollAnimation animateIn='fadeIn'>
                        <h3 className='workfolio-heading mb-3'>Brand <span className='text-tyle'>Websites</span></h3>
                        <Slider {...websettings} className=''>
                            <div className="project-card" style={{ height: 'auto' }}>
                                <div className="image-place mt-5" >
                                    <img src={hunger1} alt='' width='100%' className='mt-1' />
                                </div>
                                <div className="text-place text-center">
                                    <h4 className='fs-5'>Hunarbagh </h4>
                                    <hr></hr>

                                    <a href="https://hunarbagh.com/" className='button-primary btn btn-secondary'>Visit Now</a>
                                </div>
                            </div>
                            <div className="project-card" style={{ height: 'auto' }}>
                                <div className="image-place mt-5" >
                                    <img src={mind1} alt='' width='100%' className='mt-1' />
                                </div>
                                <div className="text-place text-center">
                                    <h4 className='fs-5'>Mind Purpose  </h4>
                                    <hr></hr>

                                    <a href="https://www.mindpurpose.in/" className='button-primary btn btn-secondary'>Visit Now</a>
                                </div>
                            </div>
                            <div className="project-card" style={{ height: 'auto' }}>
                                <div className="image-place mt-5" >
                                    <img src={pklogo1} alt='' width='100%' className='mt-1' />
                                </div>
                                <div className="text-place text-center">
                                    <h4 className='fs-5'>Pankaj Kankar  </h4>
                                    <hr></hr>

                                    <a href="https://pankajkankar.com/" className='button-primary btn btn-secondary'>Visit Now</a>
                                </div>
                            </div>
                            <div className="project-card" style={{ height: 'auto' }}>
                                <div className="image-place mt-5" >
                                    <img src={pixelpt} alt='' width='100%' className='mt-1' />
                                </div>
                                <div className="text-place text-center">
                                    <h4 className='fs-5'>  Pixel Party</h4>
                                    <hr></hr>

                                    <a href="https://pixelparty.co.in/" className='button-primary btn btn-secondary'>Visit Now</a>
                                </div>
                            </div>
                        </Slider>
                    </ScrollAnimation>

                </Container>
            </section>

            <section className='mt-5 mb-5'>
                <Container fluid>
                    <Row>
                        <Col md="12">
                            <ScrollAnimation animateIn='fadeInLeft'>
                                <FieldsetBox legendText="Brief us ">
                                    <p className='text-center fs-5 text-white mt-2'>
                                        Let's create awesomeness together
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

export default ProjectsLayout;
