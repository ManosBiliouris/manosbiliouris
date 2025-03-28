// Counters
import { ClientsSVG } from '../assets/ClientsSVG';
import { StarSVG } from '../assets/StarSVG';
import { SuitcaseSVG } from '../assets/SuitcaseSVG';

const BoxB2 = () => (
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
);

export default BoxB2;