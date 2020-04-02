import React, { Component } from 'react';
import { Grid, Cell, Button } from 'react-mdl';
class Home extends Component {
    render() {
        return (
            <div>
                <div className="alignDiv" style={{width: '100%', background: 'url(/images/b1.jpeg) center / cover', height:'100vh'}}>
                    <Grid className="landingGrid">
                        <Cell align="top" col={4} tablet={8}>
                            <img src="/images/picture.jpg" alt="profile" className="avatarImg"/>
                        </Cell>
                        <Cell align="top" col={8} tablet={8}>
                            <div className="banner-text">
                                <p className="p1" style={{marginBottom: "-10px"}}>Welcome to my website! I am a</p>
                                <h2>Full Stack Developer,</h2>
                                <h4 style={{marginTop: "-10px"}}>A coding enthusiast,</h4>
                                <p className="p2">And an optimist with a positive outlook towards life!</p>
                                <Button style={{fontSize: "14px"}}>Know more</Button>
                            </div>
                        </Cell>
                    </Grid>
                </div>
                <div className="push"></div>
                <div className="header-gradient">
                    <Grid className="footerGrid" style={{color: "white"}}>
                        <Cell col={6} tablet={4} className="social-links">
                            <a href="#" rel="noopenner noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                            </a>
                            <a href="#" rel="noopenner noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true"></i>
                            </a>
                        </Cell>
                        <Cell col={6} tablet={4}>
                            <p><i class="fa fa-envelope"></i>  1992ananya@gmail.com</p>
                            <p style={{margin: "-15px 0 -5px 0"}}><i class="fa fa-phone"></i>  +61 431 051 442</p>
                        </Cell>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default Home;