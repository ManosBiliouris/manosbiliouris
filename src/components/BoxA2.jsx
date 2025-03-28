// Services
import { ServicesSVG } from '../assets/ServicesSVG.jsx';

const BoxA2 = () => (
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
);
export default BoxA2;