import React, { useState } from 'react';
import { Card, Image, Button, Modal } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
function ProjectCard(props) {
    const [modalShow, setModalShow] = useState(false);
    return (
        <div>
            <div className="thumbnail">
                <Card className="styleCard" style={{ width: '100%' }}>
                    <div className="wrapper">
                        <Card.Img variant="top" src={props.project.image[0]} />
                    </div>
                    <Card.Body>
                        <Card.Title>{props.project.title}</Card.Title>
                        <Card.Text>
                         {props.project.intro}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <div className="overlay">
                    <div>
                        <span className="social-links">
                            <a href={props.project.github} rel="noopenner noreferrer" target="_blank">
                                <i class="fa fa-github-square" aria-hidden="true"></i>
                            </a>
                            <a href={props.project.appLink} rel="noopenner noreferrer" target="_blank">
                                <i class="fa fa-link" aria-hidden="true"></i>
                            </a>
                            <Button variant="primary" onClick={() => setModalShow(true)}>
                                Details
                            </Button>
                        </span>
                    </div>
                </div>
            </div>
            <Modal
                size="lg"
                show={modalShow}
                onHide={() => setModalShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
                centered
            >
                <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    {props.project.title}
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col>
                                {props.project.desc.map(text => (
                                    <p style={{color: "black"}}>{text}</p>
                                ))}
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={0} sm={2}></Col>
                            <Col>
                                <p style={{color: "black"}}>Technologies used:</p>
                                <ul>
                                    {props.project.tech.map(tech => (
                                        <li>{tech}</li>
                                    ))}
                                </ul>
                            </Col>
                            <Col xs={0} sm={2}></Col>
                        </Row>
                        <Row>
                            <span className="project-links">
                                Github link:
                                <a href={props.project.github} rel="noopenner noreferrer" target="_blank">
                                    <i class="fa fa-github-square" aria-hidden="true"></i>
                                </a>
                                Application link:
                                <a href={props.project.appLink} rel="noopenner noreferrer" target="_blank">
                                    <i class="fa fa-link" aria-hidden="true"></i>
                                </a>
                            </span>
                        </Row>
                        <Row>
                        {props.project.image.map((image) => (
                            <Col className="projectImg" xs={12}>
                                <Image src={image} fluid thumbnail></Image>
                            </Col>
                        ))}
                    </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default ProjectCard;