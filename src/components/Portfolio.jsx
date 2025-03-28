import '../styles/Portfolio.scss';
import { GitHub } from '../assets/GitHub.jsx';
import { LinkedIn } from '../assets/LinkedIn.jsx';
import { Instagram } from '../assets/Instagram.jsx';
import { ServicesSVG } from '../assets/ServicesSVG.jsx';
import { WhatElse } from '../assets/WhatElse.jsx';
import { SuitcaseSVG } from '../assets/SuitcaseSVG.jsx';
import { ClientsSVG } from '../assets/ClientsSVG.jsx';
import { StarSVG } from '../assets/StarSVG.jsx';
import { HandshakeSVG } from '../assets/HandshakeSVG.jsx';
import { TelegramSVG } from '../assets/TelegramSVG.jsx';
import { ShrugSVG } from '../assets/ShrugSVG.jsx';
import { PlugSVG } from '../assets/PlugSVG.jsx';
import { HospitalSVG } from '../assets/HospitalSVG.jsx';
import { AceSVG } from '../assets/AceSVG.jsx';
import { TeaSVG } from '../assets/TeaSVG.jsx';
import { AgeSVG } from '../assets/AgeSVG.jsx';
import { CompassSVG } from '../assets/CompassSVG.jsx';
import { CoffeeBeanSVG } from '../assets/CoffeeBeanSVG.jsx';
import EmailAccordion from '../components/EmailAccordion.jsx';

import BoxB4 from '../components/BoxB4';
import BoxB1 from './BoxB1.jsx';

const Portfolio = () => {
  return (
    <div className="main">
      <div className="container">
        {/* Three main columns */}
        <div className="column column-1">
          {/* Me Section  */}
          <div className="box A1"> 
            <div className="content-A1">
              <img src="./src/assets/manos.jpg" alt="avatar" />
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
          <div className="show-only-mobile">
            <BoxB1 />
          </div>
          {/* Services Section */}
          <div className="box A2">
            <div className="content-A2">
              <div className="A2-title-wrapper">
                <ServicesSVG />
                <h1>Services</h1>
              </div>
              <p>
                <span className="dot">• </span>
                <span className="highlighted-text">Pixel Perfect UI</span> – I 
                <span className="italic-text"> bring designs to life</span> with clean, reusable code.
              </p>
              <p>
                <span className="dot">• </span>
                <span className="highlighted-text">Responsive Everything</span> – From mobile to desktop, your site will look amazing everywhere, 
                <span className="italic-text"> even on that one guy’s ancient iPhone 6</span>.
              </p>
              <p>
                <span className="dot">• </span>
                <span className="highlighted-text">User-Centered</span> – I think about the user’s journey like it’s my own 
                <span className="italic-text"> (because, honestly, it kind of is).</span>
              </p>
            </div>
          </div>
          {/* What Else Section  */}
          <div className="box A3">
            <div className="content-A3">
              <div className="A3-title-wrapper">
                <WhatElse />
                <h1>What Else</h1>
                </div>
                <p>Currently, I’m studying Informatics at 
                  <span className="highlighted-text"> Ionian University </span> 
                  <span className="italic-text">(yep, on an island—definitely a unique experience!)</span>. I’ll just say it’s a bit quiet here, and sometimes I miss having a vibrant scene
                  <span className="italic-text"> to drown my sorrows in when my code decides to break for no reason</span>.
                </p>
                <p> 
                  While juggling my studies, I also work for the Director of the ENT Clinic at the University Hospital of Ioannina 
                  and Professor at the Univesity of Ioannina, 
                  where I am responsible for making his website.  
                  <span className='italic-text'> He treats patients and runs the place; I treat bugs and run his digital place</span>.
                </p>
            </div>
          </div>
        </div>
        <div className="column column-2">
          {/* Knowledge Section */}
          <div className="hide-on-mobile">
            <BoxB1 />
          </div>
          <div className="box-container B2">
            <div className="box sub-box">
              <div className="content-B2-1">
                <div className="B2-1-title">
                  <h1>3</h1>
                  <div className='plus-symbol'></div>
                </div>
                <div className="sub-content-B2-1">
                  <SuitcaseSVG />
                  <p>Projects</p>
                </div>
              </div>
            </div>
            <div className="box sub-box">
              <div className="content-B2-2">
                <div className="B2-2-title">
                  <h1>2</h1>
                  <div className='plus-symbol'></div>
                </div>
                <div className="sub-content-B2-2">
                  <ClientsSVG />
                  <p>Clients</p>
                </div>
              </div>  
            </div>
            <div className="box sub-box">
              <div className="content-B2-3">
                  <div className="B2-3-title">
                    <h1>2</h1>
                    <div className='plus-symbol'></div>
                  </div>
                  <div className="sub-content-B2-3">
                    <StarSVG />
                    <p>Experience</p>
                  </div>
              </div>  
            </div>
          </div>
          <div className="box">
            <div className="content-B3">
              <h1>Let’s build something awesome.</h1>
              <HandshakeSVG />
              <h2>Drop me a line, and let’s turn your ideas into digital reality.</h2>
              <div className="content-B3-buttons">
              <a href="https://t.me/manosbiliouris" target="_blank" rel="noopener noreferrer" className='B3-2'>
                  <TelegramSVG />
                  Telegram
                </a>
                <EmailAccordion />
              </div>
            </div>
          </div>
          <div className="hide-on-mobile">
            <BoxB4 />
          </div>
        </div>
        <div className="column column-3">
          <div className="box C1">
            <div className="C1-title-wrapper">
              <SuitcaseSVG />
              <h1>Projects</h1> 
            </div>
            <div className="C1-projects">
              <div className="project-wrapper">
                <p>#1</p>
                <div className="project">
                  <ShrugSVG />
                  <h1>
                    This project, <span className='italic-text'>ha</span>
                  </h1>
                </div>
              </div>
              <div className="project-wrapper">
                <p>#2</p>
                <div className="project">
                  <PlugSVG />
                  <h1>
                    AGIPowerHub’s Website
                  </h1>
                </div>
              </div>
              <div className="project-wrapper">
                <p>#3</p>
                <div className="project">
                  <HospitalSVG />
                    <h1>
                      Doctor’s Website
                    </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="box C2">
            <div className="content-C2">
              <div className="C2-title-wrapper">
                <AceSVG />
                <h1>Why Me?</h1>
              </div>
              <p>
                I love turning complex problems into elegant solutions with a side of simplicity. 
                <span className='highlighted-text'> My code doesn’t just works—it works smart. </span>
                <span className='italic-text'>And while I take design seriously, 
                I don’t take myself too seriously.</span>
              </p>
              <p>
                I’m 
                <span className='highlighted-text'> fast</span>, 
                <span className='highlighted-text'> adaptive</span>, and always learning new ways to 
                <span className='highlighted-text'> deliver high-quality, user-friendly designs</span>. 
                Whether it’s a quick landing page or a complex web app, I build with performance, accessibility, and scalability in mind. 
                <span className='italic-text'> Plus, I’m great under pressure—debugging code at 2 a.m.? Been there, done that.</span> 
              </p>
            </div>
          </div>
          <div className="box C3">
            <div className="content-C3">
              <div className="C3-title-wrapper">
                <TeaSVG /> 
                <h1>The Tea</h1>
              </div>
              <div className="tea-container">
                <div className="the-tea tea1">
                  <div className="the-tea-title-wrapper">
                    <h1>My Balkan Mom</h1>
                    <span className='subtitle-C3'><p>Big supporter</p></span>
                    <span className='the-tea-stars'>⭐⭐⭐⭐⭐ 5/5</span>
                  </div>
                  <span className='paragraph-C3'>
                    <p>I’ve seen his work, I don’t understand much but everytime he creates something it looks absolutely beautiful.
                    </p>
                  </span>
                </div>
                {/* <div className="the-tea tea2">
                  <div className="the-tea-title-wrapper">
                    <h1>My Balkan Mom</h1>
                    <span className='subtitle-C3'><p>Big supporter</p></span>
                    <span className='the-tea-stars'>⭐⭐⭐⭐⭐ 5/5</span>
                  </div>
                  <span className='paragraph-C3'>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                      Dolorem sed a aliquam necessitatibus labore atque cum saepe facilis.
                    </p>
                  </span>
                </div>
                <div className="the-tea tea3">
                  <div className="the-tea-title-wrapper">
                    <h1>My Balkan Mom</h1>
                    <span className='subtitle-C3'><p>Big supporter</p></span>
                    <span className='the-tea-stars'>⭐⭐⭐⭐⭐ 5/5</span>
                  </div>
                  <span className='paragraph-C3'>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                      Dolorem sed a aliquam necessitatibus labore atque cum saepe facilis.
                    </p>
                  </span>
                </div>
                <div className="the-tea tea4">
                  <div className="the-tea-title-wrapper">
                    <h1>My Balkan Mom</h1>
                    <span className='subtitle-C3'><p>Big supporter</p></span>
                    <span className='the-tea-stars'>⭐⭐⭐⭐⭐ 5/5</span>
                  </div>
                  <span className='paragraph-C3'>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                      Dolorem sed a aliquam necessitatibus labore atque cum saepe facilis.
                    </p>
                  </span>
                </div> */}
              </div>
            </div>
          </div>
          <div className="show-only-mobile">
            <BoxB4 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;