// Contact form
import { HandshakeSVG } from '../assets/HandshakeSVG.jsx';
import { TelegramSVG } from '../assets/TelegramSVG.jsx';
import EmailAccordion from '../components/EmailAccordion.jsx';

const BoxB3 = () => (
  <div className="box B3 neon-border-wrapper">
    {/* Animated neon border */}
    <div className="neon-border"></div>

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
);

export default BoxB3; 