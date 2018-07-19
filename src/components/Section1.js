import React, { Component } from 'react';
import data from '../constants';


class Section1 extends Component {

  getOutputs = () => {
    let output = [];
    data.outputs.map((d)=>{
      output.push(<div className="output">
      <div className="output-label f-s-xxxxs">{d.name}</div>
      <div className="output-bar fadein"><div className="output-bar-fill" style={{"width": d.fill}}></div></div>
      <div className="output-value fadein">{d.label}</div>
    </div>)
    });
    return output;
  }
  render() {
    return (
      <section className="section-1">
        <div className="content-wrapper">
        <div className="content">
          <div className="outputs">
          {this.getOutputs()}
          </div>
          <h1 className="js-name risein">A better approach to AI that will transform your company.</h1>
        </div>
      </div>
      </section>
    );
  }
}

export default Section1;