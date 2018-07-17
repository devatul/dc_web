import React, { Component } from 'react';
import Button from './Button';
import '../styles/section5.css';

class Section5 extends Component {
  render() {
    return (
      <section className="section-5 bg-pattern">
        <div className="sub-section">
        <div className="image-wrapper">
          
        </div>
        <div className="content-wrapper">
          <h2>AI Cloud</h2>
          <h2 className="magenta">Adaptive data infra built specifically for AI.</h2>
          <p>The first data cloud built specifically for the rigors developing AI models, the Machinify AI Cloud accepts and efficiently stores all common data types with zero&nbsp;configuration.</p>
        </div>
      </div>
      <div className="sub-section sub-section-reverse">
        <div className="image-wrapper">
        
        </div>
        <div className="content-wrapper">
          <h2>AI Studio</h2>
          <h2 className="magenta">Build models with zero scripting or coding.</h2>
          <p>Create all data transformations, build AI models by creating formulas in an intuitive user interface.  Tedious scripting is a thing of the&nbsp;past.</p>
        </div>
      </div>
      <div className="sub-section">
        <div className="image-wrapper">
          
        </div>
        <div className="content-wrapper">
          <h2>AI Runtime</h2>
          <h2 className="magenta">Deploy to production in an instant</h2>
          <p>With a single click, Machinify automatically generates a production version of your AI model. Our simple yet powerful API efficiently returns predictions in&nbsp;milliseconds.</p>
        </div>
      </div>

      <div className="button-container">
        <Button _classname="sec-5-learn-more-btn" label="LEARN MORE"/>
      </div>

      </section>
    );
  }
}

export default Section5;