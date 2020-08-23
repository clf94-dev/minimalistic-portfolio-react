import React from 'react'
import {Grid} from '@material-ui/core/';

import '../styles/App.css';
import { PortfolioData} from './PortfolioData'
import ProjectRow from '../ProjectRow';

function Portfolio() {

    return (
        <div>
            {PortfolioData.map((item, index) =>{
                return (<ProjectRow index={item.index}  title={item.title} text={item.text}  />)
            })}
        </div>
    )
}

export default Portfolio;
