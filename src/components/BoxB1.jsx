// BoxB1.jsx

import { Brain } from '../assets/Brain';
import { CssSVG } from '../assets/CssSVG';
import { HtmlSVG } from '../assets/HtmlSVG';
import { JavascriptSVG } from '../assets/JavascriptSVG';
import { PhpSVG } from '../assets/PhpSVG';
import { PythonSVG } from '../assets/PythonSVG';
import { ReactSVG } from '../assets/ReactSVG';
import { SassSVG } from '../assets/SassSVG';
import { TailwindcssSVG } from '../assets/TailwindcssSVG';

const BoxB1 = () => (
  <div className="box B1 animated-glass-boxB1">
    {/* Floating Glow Triangles */}
    <span className="floating-shapesB1"></span>

    {/* Glass Background Content */}
    <div className="contentB1">
      <div className="content-innerB1">
        <div className="B1-title-wrapper">
          <Brain />
          <h1>Stash</h1>
        </div>
        <div className="B1-knowledge">
          <a><HtmlSVG className="svg-icon" /> HTML</a>
          <a><ReactSVG className="svg-icon" /> React</a>
          <a><CssSVG className="svg-icon" /> CSS</a>
          <a><SassSVG className="svg-icon" /> SCSS</a>
          <a><TailwindcssSVG className="svg-icon" /> Tailwind</a>
          <a><JavascriptSVG className="svg-icon" /> JavaScript</a>
          <a><PythonSVG className="svg-icon" /> Python</a>
          <a><PhpSVG className="svg-icon" /> PHP</a>
        </div>
      </div>
    </div>
  </div>
);

export default BoxB1;
