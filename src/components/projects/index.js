import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from "../footer";
import projectList from "../../utils/projectList";
import ProjectCard from "./projectCard";
class Projects extends Component {
    render() {
        return (
            <div>
            <Container>
                <Row>
                    <h1 className="headerStyle landingGrid">Projects</h1>
                </Row>
                <Row>
                    {projectList.map((project) => (
                        <Col className="projectCard" xs={12} sm={6} md={4}>
                            <ProjectCard project = {project}></ProjectCard>
                        </Col>
                    ))}
                </Row>
                </Container>
                <div className="push"></div>
                <Footer></Footer>
                </div>
        )
    }
}

export default Projects;