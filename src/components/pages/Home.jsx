import React from 'react'
import HeroSection from '../HeroSection'
import Cta from '../Cta'
import '../styles/App.css';
import AboutSection from '../AboutSection';


function Home() {
    return ( < div >
        <HeroSection / >
<AboutSection/>
            <Cta/>
        </div>
    );
}

export default Home;