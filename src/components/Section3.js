import React, { Component } from 'react';
import data from '../constants';

class Section3 extends Component {
  render() {
    let subSections = [];
    data.section3.map((d)=>{
      subSections.push(<div className={`js-point ${d.reverse ? 'js-point-reverse' :''}`}>
      <div className="js-point-image-wrapper">
        <div className={d.image} />
      </div>
      <div className="js-point-content">
        <h2>{d.title}</h2>
        <p className="">{d.description}</p>
      </div>
    </div>)
    })
    return (
      <section className="section-3 js-points">
      {subSections}
      </section>
    );
  }
}

export default Section3;