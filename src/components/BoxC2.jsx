// Why Me? Section
import { AceSVG } from '../assets/AceSVG';

const BoxC2 = () => (
  <div className="box sub-box animated-glass-boxC2">
    <div className="floating-squaresC2"></div>
    <div className="content-C2">
      <div className="content-innerC2">
        <div className="C2-title-wrapper">
          <AceSVG />
          <h1>Why Me?</h1>
        </div>
        <p>
          I love turning complex problems into elegant solutions with a side of simplicity.
          <span className="highlighted-text"> My code doesn’t just work—it works smart. </span>
          <span className="italic-text">And while I take design seriously, I don’t take myself too seriously.</span>
        </p>
        <p>
          I’m <span className="highlighted-text">fast</span>, <span className="highlighted-text">adaptive</span>, and always learning new ways to
          <span className="highlighted-text"> deliver high-quality, user-friendly designs</span>.
          Whether it’s a quick landing page or a complex web app, I build with performance, accessibility, and scalability in mind.
          <span className="italic-text"> Plus, I’m great under pressure—debugging code at 2 a.m.? Been there, done that.</span>
        </p>
      </div>
    </div>
  </div>
);

export default BoxC2;