import React from 'react';
import { Grid, Cell, Button } from 'react-mdl';
import Footer from "../footer";
import dp from "./img/picture.JPG";
function Home() {
    return (
        <div className="gridDiv">
            <div className="alignDiv" style={{width: '100%', background: 'url(/images/b1.jpeg) center / cover'}}>
                <Grid className="landingGrid">
                    <Cell align="top" col={4} tablet={8}>
                        <img src={dp} alt="profile" className="avatarImg"/>
                    </Cell>
                    <Cell align="top" col={8} tablet={8}>
                        <div className="banner-text">
                            <p className="p1" style={{marginBottom: "-10px"}}>Welcome to my website! I am a</p>
                            <h2>Full Stack Developer,</h2>
                            <h4 style={{marginTop: "-10px"}}>A coding enthusiast,</h4>
                            <p className="p2">And an optimist with a positive outlook towards life!</p>
                            <Button style={{fontSize: "14px"}} href="/aboutme">Know more</Button>
                        </div>
                    </Cell>
                </Grid>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Home;