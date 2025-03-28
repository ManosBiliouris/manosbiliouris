// Profile

import { AgeSVG } from '../assets/AgeSVG';
import { CoffeeBeanSVG } from '../assets/CoffeeBeanSVG';
import { CompassSVG } from '../assets/CompassSVG';
import { GitHub } from '../assets/GitHub';
import { Instagram } from '../assets/Instagram';
import { LinkedIn } from '../assets/LinkedIn';

const BoxA1 = () => (
<div className="box A1"> 
    <div className="content-A1">
        <img src="/manosbiliouris/manos.jpg" alt="avatar" />
        <div className="content-A1-1">
        <div className="blinker-wrapper">
            <span className='blink'></span>
            <p>Available To Work</p>
        </div>
        <h1>
            Manos Biliouris 
        </h1>
        <p>
            <span className='highlighted-text'>Front-End Developer </span>
            & <br />
            <span className='highlighted-text'>UI/UX Designer</span>.
        </p>
        </div>
    </div>
    <div className="A1-info">
        <div className="A1-info-wrapper-first">
        <div className="A1-age">
            <AgeSVG />
            <p>21 y/o</p> 
        </div>
        <div className="A1-country">
            <CompassSVG />
            <p>Greece</p>
        </div>
        </div>
        <div className="A1-info-wrapper-second">
        <div className="A1-coffee">
            <CoffeeBeanSVG />
            <p>Coffee Addict</p>
        </div>
        </div>
    </div>
    <div className="content-A1-2">
        <p>
        Yes, I’m part of Gen-Z—meaning I’m fluent in memes, but I can also make things for the web 
        that look sharp across any device,   
        <span className='italic-text'> transforming pixels into polished, responsive experiences that don’t just work—they 
        <span className='highlighted-text'> pop</span></span>.
        </p>
    </div>
    <div className="content-A1-buttons">
        <a href="https://github.com/manosbiliouris" target="_blank" rel="noopener noreferrer" className='A1-1'>
        <GitHub />
        Github
        </a>
        <a href="https://www.linkedin.com/in/manos-biliouris-7b3095330/" target="_blank" rel="noopener noreferrer" className='A1-2'>
        <LinkedIn />
        LinkedIn
        </a>
        <a href="https://www.instagram.com/manosbiliouris/" target="_blank" rel="noopener noreferrer" className='A1-3'>
        <Instagram />
        Instagram
        </a>
    </div>
</div>    
);

export default BoxA1;