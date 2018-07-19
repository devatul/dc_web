import React, { Component } from 'react';
import '../styles/section1.css';

class Section1 extends Component {
  render() {
    return (
      <section className="section-1">
        <div className="content-wrapper">
        <div className="content">
          <div className="outputs">
            <div className="output output-currentDate">
              <div className="output-label f-s-xxxxs">currentDate</div>
              <div className="output-bar fadein"><div className="output-bar-fill" style={{"width": "53.9726%"}}></div></div>
              <div className="output-value fadein">Mon Jul 16 2018</div>
            </div>
            <div className="output output-mouseX">
              <div className="output-label f-s-xxxxs">mouseX</div>
              <div className="output-bar fadein"><div className="output-bar-fill" style={{"width": "59.4%"}}></div></div>
              <div className="output-value fadein">mx 870</div>
            </div>
            <div className="output output-mouseY">
              <div className="output-label f-s-xxxxs">mouseY</div>
              <div className="output-bar fadein"><div className="output-bar-fill" style={{"width": "99.6%"}}></div></div>
              <div className="output-value fadein">my 481</div>
            </div>
            <div className="output output-mouseXVelocity">
              <div className="output-label f-s-xxxxs">mouseXVelocity</div>
              <div className="output-bar fadein"><div className="output-bar-fill" style={{"width": "0%"}}></div></div>
              <div className="output-value fadein">mxv 0</div>
            </div>
            <div className="output output-mouseYVelocity">
              <div className="output-label f-s-xxxxs">mouseYVelocity</div>
              <div className="output-bar fadein"><div className="output-bar-fill" style={{"width": "4%"}}></div></div>
              <div className="output-value fadein">myv 4</div>
            </div>
            <div className="output output-totalTime pos-r">
              <div className="output-label f-s-xxxxs">cycles</div>
              <div className="output-bar fadein"><div className="output-bar-fill pos-a" style={{"width": "100%"}}></div></div>
              <div className="output-value fadein">cycles 240370</div>
            </div>
          </div>
          <h1 className="js-name risein">A better approach to AI that will transform your company.</h1>
        </div>
      </div>
      </section>
    );
  }
}

export default Section1;