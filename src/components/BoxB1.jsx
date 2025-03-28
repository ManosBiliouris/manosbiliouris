// components/BoxB1.jsx
// It's the stash

import { Brain } from '../assets/Brain';
import { CssSVG } from '../assets/CssSVG';
import { HtmlSVG } from '../assets/HtmlSVG';
import { JavascriptSVG } from '../assets/JavascriptSVG';
import { PhpSVG } from '../assets/PhpSVG';
import { PythonSVG } from '../assets/PythonSVG';
import { ReactSVG } from '../assets/ReactSVG';
import { SassSVG } from '../assets/SassSVG';
import { TailwindcssSVG } from '../assets/TailwindcssSVG';
import '../styles/Portfolio.scss';

const BoxB1 = () => (
    <div className="box B1">
        <div className="content-B1">
            <div className="B1-title-wrapper">
                <Brain />
                <h1>Stash</h1>
            </div>
            <div className="B1-knowledge">
            <a className='B1-1'> 
                <HtmlSVG className='svg-icon' />
                HTML
            </a>
            <a className='B1-2'> 
                <ReactSVG className='svg-icon' />
                React
            </a>
            <a className='B1-3'> 
            <CssSVG className='svg-icon' />
                CSS
            </a>
            <a className='B1-4'> 
                <SassSVG className='svg-icon' />
                SASS
            </a>
            <a className='B1-5'> 
            <TailwindcssSVG className='svg-icon' />
                Tailwind
            </a>
            <a className='B1-6'> 
                <JavascriptSVG className='svg-icon' />
                JavaScript
            </a>
            <a className='B1-8'> 
                <PythonSVG className='svg-icon' />
                Python
            </a>
            <a className='B1-9'> 
                <PhpSVG className='svg-icon' />
                PHP
            </a>
            </div>
        </div>
    </div>    
);

export default BoxB1;