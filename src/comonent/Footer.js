import React from "react";
import "../assets/css/Footer.css";
import logo from "../assets/images/logo.png"
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="footer">
            <Container fluid>
                <Row>
                <Col md="6" className="text-start">
                  <img src={logo} alt="" width="200px" />
                </Col>
                 <Col md="6" className="text-end">
                   <span className="me-2"> Ahmedabad <a href="tel:+917081266777" className="text-white" style={{fontWeight:'bold',textDecoration:'none'}}>+91 70812 66777</a></span>

                   | 

                   <span className="ms-1"> Delhi NCR <a href="tel:+919871088664" className="text-white" style={{fontWeight:'bold',textDecoration:'none'}}>+91 9871088664</a></span>
                </Col>
               
                    {/* <Col md="12" className="">
                        <img src={logo} alt="" width="200px" />
                        <p className="footer-text">Contact: +91 9871088664</p>
                        <p className="footer-text">Address: 123 Main Street, Your City</p>
                        <div className="">
                            <Link className="text-white">
                                <FaLinkedinIn size={25} />
                            </Link>
                            <Link className="text-white">
                                <FaInstagram size={25} className="ms-2" />
                            </Link>
                        </div>
                    </Col> */}
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
