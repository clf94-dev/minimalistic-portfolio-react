import React from 'react'
import {Grid} from '@material-ui/core/';

import {Button} from './Button';
import './styles/App.css';

function Cta() {
    return (
        <div>
            <Grid container direction='row' className='cta-cont'>
                <Grid item md={6} xs={12} className='text-col'>
                    <h2>Interested in doing a project together?</h2>
                </Grid>

                <Grid item md={6} xs={12} className='btn-col'>
                    <Button
                        className='cta-btn'
                        link='/contact-me'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'>
                        CONTACT ME
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cta;
