// Projects for desktop
import { HospitalSVG } from '../assets/HospitalSVG';
import { PlugSVG } from '../assets/PlugSVG';
import { ShrugSVG } from '../assets/ShrugSVG';
import { SuitcaseSVG } from '../assets/SuitcaseSVG';

const BoxC1 = () => (
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
);

export default BoxC1;