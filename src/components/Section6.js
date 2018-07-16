import React, { Component } from 'react';
import Button from './Button';
import '../styles/section6.css';

class Section6 extends Component {
  render() {
    return (
      <section className="section-6 bg-divider">
        <div className="sec-6-content">
        <h2>OUR TEAM</h2>
        <p>
          
        From the outset, we’ve sought to build Machinify into a customer-first company that solves real problems and delivers real results.  Each member of our team reflects that commitment. We’ve brought together leaders in the fields of software development, machine learning, data science and business.
        
        </p>
      </div>
      <Button _classname="sec-6-btn" label="MEET THE MACHINIFY TEAM" />
      </section>
    );
  }
}

export default Section6;