import { useState } from "react";
import { EmailSVG } from '../assets/EmailSVG.jsx';
import '../styles/EmailAccordion.scss'; // Ensure to import the CSS file
import { CopySVG } from "../assets/CopySVG.jsx";

const EmailAccordion = () => {
  const [isOpen, setIsOpen] = useState(false);
  const email = "mabi2408@gmail.com"; // Replace with your email

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  const copyToClipboard = (e) => {
    e.stopPropagation(); // Prevent the click event from bubbling up to the accordion
    navigator.clipboard.writeText(email);
    const tooltip = document.getElementById("tooltip");
    tooltip.style.opacity = 1;
    setTimeout(() => {
      tooltip.style.opacity = 0;
    }, 900); // Hide after 1 seconds
  };

  return (
    <div className="accordion-B3">
      <a
        className='B3-1'
        onClick={toggleAccordion}
        tabIndex={0}
        role="button"
        aria-expanded={isOpen}
      >
        <EmailSVG />
        Email me
      </a>

      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        <p>{email}</p>
        <button 
          className="copy-button" 
          onClick={copyToClipboard}
        >
          <CopySVG />
        </button>
        <span id="tooltip" className="tooltip">Email copied to clipboard!</span>
      </div>
    </div>
  );
};

export default EmailAccordion;
