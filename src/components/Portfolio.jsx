import '../styles/Portfolio.scss';

import BoxA1 from './BoxA1.jsx';
import BoxA2 from './BoxA2.jsx';
import BoxA3 from './BoxA3.jsx';
import BoxB1 from './BoxB1.jsx';
import BoxB2 from './BoxB2.jsx';
import BoxB3 from './BoxB3.jsx';
import BoxB4 from './BoxB4.jsx';
import BoxC1 from './BoxC1.jsx';
import BoxC2 from './BoxC2.jsx';
import BoxC3 from './BoxC3.jsx';

const Portfolio = () => {
  return (
    <div className="main">
      <div className="container">
        {/* Three main columns */}
        <div className="column column-1">
          {/* Me Section for BOTH*/}
          <div>
            <BoxA1 />
          </div>
          {/* Stash for mobile*/}
          <div className="show-only-mobile">
            <BoxB1 />
          </div>
          {/* Why me for mobile*/}
          <div className="show-only-mobile">
            <BoxC2 />
          </div>
          {/* Services Section For BOTH*/}
          <div>
            <BoxA2 />
          </div>
          {/* Counters for mobile */}
          <div className="show-only-mobile">
            <BoxB2 />
          </div>
          {/* Projects for mobile */}
          <div className="show-only-mobile">
            <BoxC1 />
          </div>
          {/* What Else Section for BOTH*/}
          <div>
            <BoxA3 />
          </div>
        </div>
        <div className="column column-2">
          {/* Knowledge Section for desktop*/}
          <div className="hide-on-mobile">
            <BoxB1 />
          </div>
          {/* Counters for desktop*/}
          <div className="hide-on-mobile">
            <BoxB2 />
          </div>
          {/* Contact form for BOTH */}
          <div>
            <BoxB3 />
          </div>
          {/* Footer for desktop */}
          <div className="hide-on-mobile">
            <BoxB4 />
          </div>
        </div>
        <div className="column column-3">
          {/* Projects for desktop */}
          <div className="hide-on-mobile">
            <BoxC1 />
          </div>
          {/*  Why me? for desktop */}
          <div className="hide-on-mobile">
            <BoxC2 />
          </div>
          {/* Reviews form for BOTH */}
          <div>
            <BoxC3 />
          </div>
          {/* Footer for mobile */}
          <div className="show-only-mobile">
            <BoxB4 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;