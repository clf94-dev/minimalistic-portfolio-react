import React from 'react'
import {Grid} from '@material-ui/core/';
import {Link} from 'react-router-dom';
import WLogo from './images/logo copy.svg';

function Footer() {
    return (
        <div>
            <Grid container direction='row' className='footer-cont'>
                <Grid item sm={2} xs={12}className='footer-item'>
                    <Link to='/' className='footer-link'><img src={WLogo} alt="footer logo"/></Link>
                </Grid>
                <Grid item sm={2} xs={12} className='footer-item'>
                    <Link to='/' className='footer-link'>Home</Link>
                </Grid>
                <Grid item sm={2} xs={12} className='footer-item'>
                    <Link to='/portfolio' className='footer-link'>Portfolio</Link>
                </Grid>
                <Grid item sm={2} xs={12} className='footer-item'>
                    <Link to='/contact-me' className='footer-link'>Contact Me</Link>
                </Grid>
                <Grid item sm={2} xs={12} className='footer-item'></Grid>
                <Grid item sm={2} xs={12} className='footer-item'>
                    <Grid container direction='row' className='social-row'>
                       <a href="" className='footer-link'><i className=' fab fa-2x fa-github social-icon'></i></a> 
                        <a href=""className='footer-link'><i className=' fab fa-2x fa-twitter social-icon'></i></a>
                       <a href=""className='footer-link'><i className=' fab fa-2x fa-linkedin social-icon'></i></a> 
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer;
