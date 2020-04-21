import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Card, CardDeck, Image } from 'react-bootstrap';
import Footer from "./footer";

class AboutMe extends Component {
    render() {
        return (
            <div className="gridDiv">
                <div>
                    <Grid className="landingGrid">
                        <Cell col={12}>
                            <h1 className="headerStyle">Key skills</h1>
                            <CardDeck>
                                <Card className="styleCard" style={{ width: '30%'}}>
                                    <div className="wrapper">
                                        <Card.Img variant="top" src="images/java.png" />
                                    </div>
                                    <Card.Body>
                                        <Card.Title>Backend Java Development</Card.Title>
                                        <Card.Text>
                                            Experienced in programming in core Java, developing backend Java CLI tools and software plugins for Java framework.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className="styleCard" style={{ width: '30%'}}>
                                    <div className="wrapper">
                                        <Card.Img variant="top" src="images/mern.jpg" />
                                    </div>
                                    <Card.Body>
                                        <Card.Title>React / Javascript Development</Card.Title>
                                        <Card.Text>
                                            MERN stack web application development with a responsive front-end in React and flexible backend using Node, Express and MongoDB.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className="styleCard" style={{ width: '30%'}}>
                                    <div className="wrapper">
                                        <Card.Img variant="top" src="images/database.jpg" />
                                    </div>
                                    <Card.Body>
                                        <Card.Title>MongoDB and MySQL Database</Card.Title>
                                        <Card.Text>
                                            Database design and implementation using MySQL and MongoDB.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </CardDeck>
                        </Cell>
                    </Grid>
                    <Grid className="landingGrid" style={{ width: '100%', background: 'url(/images/tech_background.jpg) center / cover' }}>
                        <Cell className="gridTech" col={12}>
                            <h1 className="headerStyle" style={{ color: "white" }}>Technologies</h1>
                        </Cell>
                    </Grid>
                    <Grid className="landingGrid">
                        <Cell col={2}><div></div></Cell>
                        <Cell col={8}>
                            <h1 className="headerStyle">Education</h1>
                        </Cell>
                        <Cell col={2}><div></div></Cell>
                    </Grid>
                    <Grid className="landingGrid">
                        <Cell col={2}><div></div></Cell>
                        <Cell col={8}>
                            <h1 className="headerStyle">Professional Experience</h1>
                        </Cell>
                        <Cell col={2}><div></div></Cell>
                    </Grid>
                    <Grid className="landingGrid">
                        <Cell col={2}><div></div></Cell>
                        <Cell col={8}>
                            <h1 className="headerStyle">Internships</h1>
                        </Cell>
                        <Cell col={2}><div></div></Cell>
                    </Grid>
                </div>
                <div className="push"></div>
                <Footer></Footer>
            </div>
        )
    }
}

export default AboutMe;