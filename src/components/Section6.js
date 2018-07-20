import React, { Component } from 'react';
import Button from './Button';
import data from '../constants';

class Section6 extends Component {
  render() {
    return (
      <section className="section-6 bg-divider">
        <div className="sec-6-content">
        <h2>OUR TEAM</h2>
        <p>
          
        {data.section6.message}
        
        </p>
      </div>
      <Button _classname="sec-6-btn" label="MEET THE MACHINIFY TEAM" />
      </section>
    );
  }
}

export default Section6;