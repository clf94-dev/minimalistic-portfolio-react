import React from 'react'
import {Grid} from '@material-ui/core/';
import './styles/App.css'
import Profile from './images/homepage/desktop/image-homepage-profile.jpg'
import {Button} from './Button';

function AboutSection() {
    return (
        <div>
            <Grid container direction="row" className='about-me-row'>
                <Grid item md={6} xs={12} className='img-col'>
                    <img src={Profile} alt="about me image" className='aboutme-img'/>
                </Grid>
                <Grid item md={6} xs={12} className='text-col' direction='column'>
                    <h3>About Me</h3>
                    <p>I’m a junior front-end developer looking for a new role in an exciting
                        company. I focus on writing accessible HTML, using modern CSS practices and
                        writing clean JavaScript. When writing JavaScript code, I mostly use React, but
                        I can adapt to whatever tools are required. I’m based in London, UK, but I’m
                        happy working remotely and have experience in remote teams. When I’m not coding,
                        you’ll find me outdoors. I love being out in nature whether that’s going for a
                        walk, run or cycling. I’d love you to check out my work.</p>
                    <Button
                        className='about-btn'
                        link='/portfolio'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'>
                            GO TO PORTFOLIO</Button>

                </Grid>

            </Grid>
        </div>
    )
}

export default AboutSection
