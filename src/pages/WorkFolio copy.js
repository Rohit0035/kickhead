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
    return (
        <>
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
                        {/* <Row>
                            <h3 className='workfolio-heading mb-3'>AV <span className='text-tyle'>Film</span></h3>
                            <Col xs="12" md="6" lg="3">
                                <div className="project-card">
                                    <div className="image-place" >
                                        <video width="100%" height="100%" autoPlay muted loop >
                                            <source src={AfFilm} type="video/mp4" />
                                        </video>
                                    </div>
                                    <div className="text-place text-center">
                                        <h4 className='fs-5'>Above & Beyond </h4>
                                        <hr></hr>
                                        <h6 className='fs-6'>Rahul Jain</h6>
                                        <p>Director at Sambhav Group </p>
                                        <p>Running for President EO Raipur chapter 2023: Campaign </p>
                                        <p>
                                            How to dial EO core value- ‘Think big, be bold’, to bring out the best in EO member
                                        </p>
                                        <Link to="/work-folio-detail" className='button-primary btn btn-secondary'>Read More</Link>
                                    </div>
                                </div>
                            </Col>

                            <Col xs="12" md="6" lg="3">
                                <div className="project-card">
                                    <div className="image-place" >
                                        <video width="100%" height="100%" autoPlay muted loop >
                                            <source src={AfFilm2} type="video/mp4" />
                                        </video>
                                    </div>
                                    <div className="text-place text-center">
                                        <h4 className='fs-5'>AWE Inspiring </h4>
                                        <hr></hr>
                                        <h6 className='fs-6'>Manoj Lunkad</h6>
                                        <p>Business Owner at Maina Sales and Marketing </p>
                                        <p>Running for President EO Raipur chapter 2023: Campaign </p>
                                        <p>
                                            How to dial growth mindset inspired by nature around to bring the best in EO member
                                        </p>
                                        <Link className='button-primary btn btn-secondary'>Read More</Link>
                                    </div>
                                </div>
                            </Col>

                            <Col xs="12" md="6" lg="3">
                                <div className="project-card">
                                    <div className="image-place" >
                                        <img src={audeothumb}  alt=''  width="100%" className='mt-5'  />
                                    </div>
                                    <div className="text-place text-center">
                                        <h4 className='fs-5'>Handi Tehzeeb </h4>
                                        <hr></hr>
                                        <h6 className='fs-6 mb-5'>Launch rap jingle</h6>
                                        <audio controls style={{width:'100%'}}>
                                            <source src={handiaudio} type="audio/mpeg" />
                                            Your browser does not support the audio element.
                                        </audio>
                                    </div>
                                </div>
                            </Col>
                            <Col xs="12" md="6" lg="3">
                                <div className="project-card">
                                    <div className="image-place" >
                                        <video width="100%" height="100%" autoPlay muted loop >
                                            <source src={AfFilm} type="video/mp4" />
                                        </video>
                                    </div>
                                    <div className="text-place text-center">
                                        <h4 className='fs-5'>Mega blockbuster delivered </h4>
                                        <hr></hr>
                                        <h6 className='fs-6'>SAP India</h6>
                                        <p>Post-event case study: SAP Now 2023 – Mumbai </p>
                                        <p>
                                            Present 6 months: pitch, planning & program delivery magnum opus in a case study
                                        </p>
                                        <Link className='button-primary btn btn-secondary'>Read More</Link>
                                    </div>
                                </div>
                            </Col>
                        </Row> */}
                         <h3 className='workfolio-heading mb-3'>AV <span className='text-tyle'>Film</span></h3>
                        <Slider {...settings}>
                            <div className="project-card">
                                <div className="image-place">
                                    <video width="100%" height="100%" autoPlay muted loop>
                                        <source src={AfFilm} type="video/mp4" />
                                    </video>
                                </div>
                                <div className="text-place text-center">
                                    <h4 className='fs-5'>Above & Beyond</h4>
                                    <hr />
                                    <h6 className='fs-6'>Rahul Jain</h6>
                                    <p>Director at Sambhav Group</p>
                                    <p>Running for President EO Raipur chapter 2023: Campaign</p>
                                    <p>
                                        How to dial EO core value- ‘Think big, be bold’, to bring out the best in EO member
                                    </p>
                                    <Link to="/work-folio-detail" className='button-primary btn btn-secondary'>Read More</Link>
                                </div>
                            </div>
                            <div className="project-card">
                                <div className="image-place">
                                    <video width="100%" height="100%" autoPlay muted loop>
                                        <source src={AfFilm2} type="video/mp4" />
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
                                    <Link className='button-primary btn btn-secondary'>Read More</Link>
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
                            <div className="project-card">
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
                            </div>
                        </Slider>
                    </ScrollAnimation>


                    {/* grid-2 */}

                    <ScrollAnimation animateIn='fadeInLeft'>
                        <Row className='mt-5'>
                            <h3 className='workfolio-heading mb-3 text-end'>Behavioral <span className='text-tyle'>Study</span></h3>
                            {/* Card 1 */}
                            <Col xs="12" md="6" lg="4">
                                <div className="project-card">
                                    <div className="image-place" >
                                        <img src={boximg} alt='' width="100%" />
                                    </div>
                                    <div className="text-place text-center">
                                        <h4 className='fs-5'>Above & Beyond </h4>
                                        <hr></hr>
                                        <h6 className='fs-6'>Rahul Jain</h6>
                                        <p>Director at Sambhav Group </p>
                                        <p>Running for President EO Raipur chapter 2023: Campaign  </p>
                                        <p>
                                            How to dial EO core value- ‘Think big, be bold’, to bring out the best in EO member
                                        </p>
                                        <Link to="/work-folio-detail" className='button-primary btn btn-secondary'>Read More</Link>
                                    </div>
                                </div>
                            </Col>
                            {/* Card 2 */}
                            <Col xs="12" md="6" lg="4">
                                <div className="project-card">
                                    <div className="image-place" >
                                        <video width="100%" height="100%" autoPlay muted loop >
                                            <source src={AfFilm} type="video/mp4" />
                                        </video>
                                    </div>
                                    <div className="text-place text-center">
                                        <h4 className='fs-5'>Comfort in motion </h4>
                                        <hr></hr>
                                        <h6 className='fs-6'>Edrio</h6>
                                        <p>Oswal Group  </p>
                                        <p>Decode athleisure and find a sharp stand for the brand</p>
                                        <p>
                                            Create a brand book that prompts energized living & movement
                                        </p>
                                        <Link to="/work-folio-detail" className='button-primary btn btn-secondary'>Read More</Link>
                                    </div>
                                </div>
                            </Col>
                            {/* Card 3 */}
                            <Col xs="12" md="6" lg="4">
                                <div className="project-card">
                                    <div className="image-place" >
                                        <video width="100%" height="100%" autoPlay muted loop >
                                            <source src={AfFilm} type="video/mp4" />
                                        </video>
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
                                        <Link to="/work-folio-detail" className='button-primary btn btn-secondary'>Read More</Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </ScrollAnimation>

                    {/* grid-3 */}
                    <ScrollAnimation animateIn='fadeIn'>
                        <Row className='mt-5'>
                            <h3 className='workfolio-heading mb-3'>Brand <span className='text-tyle'>Credential</span></h3>
                            <Col xs="12" md="6" lg="3">
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
                            </Col>
                            {/* Card 1 */}

                            {/* Card 2 */}
                            <Col xs="12" md="6" lg="3">
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
                            </Col>
                            {/* Card 3 */}

                            {/* Card 4 */}
                            <Col xs="12" md="6" lg="3">
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
                            </Col>
                            <Col xs="12" md="6" lg="3">
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
                            </Col>
                        </Row>
                    </ScrollAnimation>

                    {/* grid-4 */}
                    <ScrollAnimation animateIn='fadeInLeft'>
                        <Row className='mt-5'>
                            <h3 className='workfolio-heading mb-3 text-end'>Brand <span className='text-tyle'>Identity</span></h3>
                            <Col xs="12" md="6" lg="4">
                                <div className="project-card">
                                    <div className="image-place" >
                                        <img src={brandidentityone} alt='' width="100%" className='mt-5' />
                                    </div>
                                    <div className="text-place text-center">
                                        <h4 className='fs-5'>Above & Beyond </h4>
                                        <hr></hr>
                                        <h6 className='fs-6'>Rahul Jain</h6>
                                        <p>Director at Sambhav Group </p>
                                        <p>Running for President EO Raipur chapter 2023: Campaign  </p>
                                        <p>
                                            How to dial EO core value- ‘Think big, be bold’, to bring out the best in EO member
                                        </p>
                                        <a href={pdfaivin} className='button-primary btn btn-secondary'>Read More</a>
                                    </div>
                                </div>
                            </Col>
                            {/* Card 2 */}
                            <Col xs="12" md="6" lg="4">
                                <div className="project-card">
                                    <div className="image-place" >
                                        <img src={brandidentitytwo} alt='' width="100%" className='mt-5' />
                                    </div>
                                    <div className="text-place text-center">
                                        <h4 className='fs-5'>Comfort in motion </h4>
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
                            </Col>
                            {/* Card 3 */}
                            <Col xs="12" md="6" lg="4">
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
                            </Col>
                        </Row>
                    </ScrollAnimation>


                    {/* grid-5 */}
                    <ScrollAnimation animateIn='fadeIn'>
                        <Row className='mt-5'>
                            <h3 className='workfolio-heading mb-3'>Logo <span className='text-tyle'>Design</span></h3>
                            <Col xs="12" md="6" lg="6">
                                <div className="project-card">
                                    <div className="image-place" >
                                        <img src={logodesignimg} alt='' width='100%' className='mt-1' />
                                    </div>
                                    <div className="text-place text-center">
                                        <h4 className='fs-5'>Finding yourself </h4>
                                        <hr></hr>
                                        <h6 className='fs-6'>Swati Kasliwal</h6>
                                        <p>Founder Hunarbagh</p>
                                        <p>Create a brand that celebrates handmade Indian art forms in a personalized way </p>
                                        <p>
                                            A name & design that celebrated Indian art forms & culture
                                        </p>
                                        <a href={pdflogodesign1} className='button-primary btn btn-secondary'>Read More</a>
                                    </div>
                                </div>
                            </Col>
                            {/* Card 1 */}

                            {/* Card 2 */}
                            <Col xs="12" md="6" lg="6">
                                <div className="project-card">
                                    <div className="image-place" >
                                        <img src={BrandCredicialTwo} alt='' width='100%' className='mt-1' />
                                        BrandCredicialTwo
                                    </div>
                                    <div className="text-place text-center">
                                        <h4 className='fs-5'>Digital Awesomeness  </h4>
                                        <hr></hr>
                                        <h6 className='fs-6'>Kalpit Dwivedi</h6>
                                        <p>Founder & Sumit Grover Co-founder, Pixel Party  </p>
                                        <p>Design to attract new-age creatives and start-up  </p>
                                        <p>
                                            Create an identity that celebrates content in every pixel every single time.
                                        </p>
                                        <a href={pdflogodesign2} className='button-primary btn btn-secondary'>Read More</a>
                                    </div>
                                </div>
                            </Col>
                            {/* Card 3 */}


                        </Row>
                    </ScrollAnimation>


                    {/* grid-6 */}
                    <ScrollAnimation animateIn='fadeInLeft'>
                        <Row className='mt-5'>
                            <h3 className='workfolio-heading mb-3 text-end'>Pitch <span className='text-tyle'>Deck</span></h3>
                            {/* Card 1 */}
                            <Col xs="12" md="6" lg="6">
                                <div className="project-card">
                                    <div className="image-place" >
                                        <video width="100%" height="100%" autoPlay muted loop >
                                            <source src={AfFilm} type="video/mp4" />
                                        </video>
                                    </div>
                                    <div className="text-place text-center">
                                        <h4 className='fs-5'>Zindagi Chunav hai </h4>
                                        <hr></hr>
                                        <h6 className='fs-6'>Dainik Bhaskar </h6>
                                        <p>Noida </p>
                                        <p>To launch Dainik Bhaskar hindi app in UP  </p>
                                        <p>
                                            To launch Dainik Bhaskar hindi app in UP
                                        </p>
                                        <a href={pitchpdf1} className='button-primary btn btn-secondary'>Read More</a>
                                    </div>
                                </div>
                            </Col>
                            {/* Card 2 */}
                            <Col xs="12" md="6" lg="6">
                                <div className="project-card">
                                    <div className="image-place" >
                                        <video width="100%" height="100%" autoPlay muted loop >
                                            <source src={AfFilm} type="video/mp4" />
                                        </video>
                                    </div>
                                    <div className="text-place text-center">
                                        <h4 className='fs-5'>Digital Awesomeness  </h4>
                                        <hr></hr>
                                        <h6 className='fs-6'>Kalpit Dwivedi </h6>
                                        <p>Founder  </p>
                                        <p>Design to attract new-age creatives and start-up  </p>
                                        <p>
                                            Create an identity that celebrates content in every pixel every single time.
                                        </p>
                                        <a href={pitchpdf2} className='button-primary btn btn-secondary'>Read More</a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </ScrollAnimation>


                    {/* grid-7 */}
                    <ScrollAnimation animateIn='fadeIn'>
                        <Row className='mt-5'>
                            <h3 className='workfolio-heading mb-3'>Brand <span className='text-tyle'>Websites</span></h3>
                            <Col xs="12" md="3" lg="3">
                                <div className="project-card" style={{ height: 'auto' }}>
                                    <div className="image-place" >
                                        <img src={hunger1} alt='' width='100%' className='mt-1' />
                                    </div>
                                    <div className="text-place text-center">
                                        <h4 className='fs-5'>Hunarbagh </h4>
                                        <hr></hr>
                                        {/* <h6 className='fs-6'>Swati Kasliwal</h6> */}
                                        {/* <p>Founder Hunarbagh</p>
                                        <p>Create a brand that celebrates handmade Indian art forms in a personalized way </p>
                                        <p>
                                            A name & design that celebrated Indian art forms & culture
                                        </p> */}
                                        <a href="https://hunarbagh.com/" className='button-primary btn btn-secondary'>Visit Now</a>
                                    </div>
                                </div>
                            </Col>
                            {/* Card 1 */}

                            {/* Card 2 */}
                            <Col xs="12" md="3" lg="3">
                                <div className="project-card" style={{ height: 'auto' }}>
                                    <div className="image-place" >
                                        <img src={mind1} alt='' width='100%' className='mt-1' />
                                    </div>
                                    <div className="text-place text-center">
                                        <h4 className='fs-5'>Mind Purpose  </h4>
                                        <hr></hr>
                                        {/* <h6 className='fs-6'>Kalpit Dwivedi</h6> */}
                                        {/* <p>Founder & Sumit Grover Co-founder, Pixel Party  </p>
                                        <p>Design to attract new-age creatives and start-up  </p>
                                        <p>
                                            Create an identity that celebrates content in every pixel every single time.
                                        </p> */}
                                        <a href="https://www.mindpurpose.in/" className='button-primary btn btn-secondary'>Visit Now</a>
                                    </div>
                                </div>
                            </Col>
                            {/* Card 3 */}
                            <Col xs="12" md="3" lg="3">
                                <div className="project-card" style={{ height: 'auto' }}>
                                    <div className="image-place" >
                                        <img src={pklogo1} alt='' width='100%' className='mt-1' />
                                    </div>
                                    <div className="text-place text-center">
                                        <h4 className='fs-5'>Pankaj Kankar  </h4>
                                        <hr></hr>
                                        {/* <h6 className='fs-6'>Kalpit Dwivedi</h6>
                                        <p>Founder & Sumit Grover Co-founder, Pixel Party  </p>
                                        <p>Design to attract new-age creatives and start-up  </p>
                                        <p>
                                            Create an identity that celebrates content in every pixel every single time.
                                        </p> */}
                                        <a href="https://pankajkankar.com/" className='button-primary btn btn-secondary'>Visit Now</a>
                                    </div>
                                </div>
                            </Col>
                            <Col xs="12" md="3" lg="3">
                                <div className="project-card" style={{ height: 'auto' }}>
                                    <div className="image-place" >
                                        <img src={pixelpt} alt='' width='100%' className='mt-1' />
                                    </div>
                                    <div className="text-place text-center">
                                        <h4 className='fs-5'>  Pixel Party</h4>
                                        <hr></hr>
                                        {/* <p>Founder & Sumit Grover Co-founder, Pixel Party  </p>
                                        <p>Design to attract new-age creatives and start-up  </p>
                                        <p>
                                            Create an identity that celebrates content in every pixel every single time.
                                        </p> */}
                                        <a href="https://pixelparty.co.in/" className='button-primary btn btn-secondary'>Visit Now</a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
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
