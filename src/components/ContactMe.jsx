import React from 'react'
import {Grid} from '@material-ui/core/';
import {Button} from './Button';
import './styles/App.css';
import Form from './Form';

function ContactMe() {
    return (
        <div>
            
            <Grid container direction='row' className='contact-top'>
            <hr/>
                <Grid item md={6} xs={12} direction='column' className='title-col'>
                    <h3>Get in touch</h3>
                </Grid>
                <Grid item md={6} xs={12} direction='column' className='right-col'>
                    <p>I’d love to hear about what you’re working on and how I could help. I’m
                        currently looking for a new role and am open to a wide range of opportunities.
                        My preference would be to find a position in a company in Madrid. But I’m also
                        happy to hear about opportunites that don’t fit that description. I’m a
                        hard-working and positive person who will always approach each task with a sense
                        of purpose and attention to detail. Please do feel free to check out my online
                        profiles below and get in touch using the form.</p>
                </Grid>

                <hr/>
            </Grid>
            
            <Grid container direction='row' className='input-cont'>
                <Grid item sm={6} xs={12} direction='column' className='title-col'>
                    <h2>Contact Me</h2>
                </Grid>
                <Grid item sm={6}  xs={12}direction='column' className='right-col'>
                    <Form/>
                </Grid>

            </Grid>
        </div>
    )
}

export default ContactMe;
