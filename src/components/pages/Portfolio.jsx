import React from 'react'
import {Grid} from '@material-ui/core/';

import '../styles/App.css';
import { PortfolioData} from './PortfolioData'
import ProjectRow from '../ProjectRow';
import Cta from '../Cta';

function Portfolio() {

    return (
        <div>
            {PortfolioData.map((item, index) =>{
                return (<ProjectRow index={item.index}  title={item.title} text={item.text} classes={item.classes} />)
            })}
               <Cta/>
        </div>
    )
}

export default Portfolio;
