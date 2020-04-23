import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
class Contact extends Component {
    render() {
        return (
            <div className="gridDiv">
                <div className="contactText">
                    <Container>
                        <Row className="rowStyle">
                            <Col className="contactStyle" xs={12} md={6}>
                                <Container>
                                    <Row>
                                        <Col className="iconStyle" xs={4}>
                                            <p><i className="fa fa-phone"></i></p>
                                        </Col>
                                        <Col xs={8}>
                                            <p className="contactHeader">Phone:</p>
                                            <p>
                                                +61 431 051 442
                                            </p>
                                            <p>
                                                +61 422 262 565
                                            </p>
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>
                            <Col className="contactStyle" xs={12} md={6}>
                                <Container>
                                    <Row>
                                        <Col className="iconStyle" xs={4}>
                                            <p><i className="fa fa-envelope"></i></p>
                                        </Col>
                                        <Col xs={8}>
                                            <p className="contactHeader">Email:</p>
                                            <p>1992ananya@gmail.com</p>
                                            <p>ananyapramanik@utexas.edu</p>
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>
                        </Row>
                        <Row className="rowStyle">
                            <Col className="contactStyle" xs={12} md={6}>
                                <Container>
                                    <Row>
                                        <Col className="iconStyle" xs={4}>
                                            <p>
                                                <i className="fa fa-map-marker"></i>
                                            </p>
                                        </Col>
                                        <Col xs={8}>
                                            <p className="contactHeader">Address:</p>
                                            <p>
                                                West Beach, Adelaide,
                                            </p>
                                            <p>SA, Australia, 5024</p>
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>
                            <Col className="contactStyle" xs={12} md={6}>
                                <Container>
                                    <Row>
                                        <Col className="iconStyle" xs={4}>
                                            <p>
                                                <i className="fa fa-linkedin-square"></i>
                                            </p>
                                            <p>
                                                <i className="fa fa-github-square"></i>
                                            </p>
                                        </Col>
                                        <Col xs={8}>
                                            <p className="contactHeader">Other links:</p>
                                            <p>
                                                <a href="https://www.linkedin.com/in/ananya-pramanik-16406b7a/" rel="noopenner noreferrer" target="_blank">
                                                linkedin.com/in/ananya-pramanik-16406b7a/
                                                </a>
                                            </p>
                                            <p>
                                                <a href="https://github.com/ananya92" rel="noopenner noreferrer" target="_blank">
                                                github.com/ananya92
                                                </a>
                                            </p>
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="push"></div>
                <div className="header-gradient">
                    <Container className="footer">
                    </Container>
                </div>
            </div>
        )
    }
}

export default Contact;