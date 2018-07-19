import React, { Component } from 'react';
import data from '../constants';

class Section3 extends Component {

  getSubsections = () =>{
    let subSections = [];
    data.section3.map((d)=>{
      subSections.push(<div className={`js-point ${d.reverse ? 'js-point-reverse' :''}`}>
      <div className="js-point-image-wrapper">
        <div className={`image ${d.image}`} />
      </div>
      <div className="js-point-content">
        <h2>{d.title}</h2>
        <p className="">{d.description}</p>
      </div>
    </div>)
    });
    return subSections;
  }
  render() {
    return (
      <section className="section-3 js-points">
      {this.getSubsections()}
      </section>
    );
  }
}

export default Section3;