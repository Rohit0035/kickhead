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
                    <Col md="12" className="">
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
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
