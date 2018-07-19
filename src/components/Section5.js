import React, { Component } from 'react';
import Button from './Button';
import data from '../constants';

class Section5 extends Component {

  getSubsections = () => {
    let subSections = [];
    data.section5.map((d)=>{
      subSections.push(<div className={`sub-section ${d.reverse ? 'sub-section-reverse' :''}`}>
      <div className="image-wrapper">
        <div className={`image ${d.image}`} />
      </div>
      <div className="content-wrapper">
        <h2>{d.name}</h2>
        <h2 className="magenta">{d.title}</h2>
        <p>{d.description}</p>
      </div>
    </div>)
    });
    return subSections;
  }
  render() {
    return (
      <section className="section-5 bg-pattern">
      {this.getSubsections()}
      <div className="button-container">
        <Button _classname="sec-5-learn-more-btn" label="LEARN MORE"/>
      </div>

      </section>
    );
  }
}

export default Section5;