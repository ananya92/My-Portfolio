import React from "react";
import { Grid, Cell } from 'react-mdl';

function Footer() {
    return (
        <div className="header-gradient">
            <Grid className="footerGrid" style={{color: "white"}}>
                <Cell col={6} tablet={4} className="social-links">
                    <a href="https://www.linkedin.com/in/ananya-pramanik-16406b7a/" rel="noopenner noreferrer" target="_blank">
                        <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                    </a>
                    <a href="https://github.com/ananya92" rel="noopenner noreferrer" target="_blank">
                        <i class="fa fa-github-square" aria-hidden="true"></i>
                    </a>
                </Cell>
                <Cell col={6} tablet={4}>
                    <p><i class="fa fa-envelope"></i>  1992ananya@gmail.com</p>
                    <p style={{margin: "-15px 0 -5px 0"}}><i class="fa fa-phone"></i>  +61 431 051 442</p>
                </Cell>
            </Grid>
        </div>
    )
}

export default Footer;