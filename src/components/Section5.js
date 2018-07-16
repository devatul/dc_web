import React, { Component } from 'react';
import Button from './Button';
import '../styles/section5.css';

class Section5 extends Component {
  render() {
    return (
      <section className="section-5 bg-pattern">
        <div class="sub-section">
        <div class="image-wrapper">
          
        </div>
        <div class="content-wrapper">
          <h2>AI Cloud</h2>
          <h2 class="magenta">Adaptive data infra built specifically for AI.</h2>
          <p>The first data cloud built specifically for the rigors developing AI models, the Machinify AI Cloud accepts and efficiently stores all common data types with zero&nbsp;configuration.</p>
        </div>
      </div>
      <div class="sub-section sub-section-reverse" style={{display:'none'}}>
        <div class="image-wrapper">
        
        </div>
        <div class="content-wrapper">
          <h2>AI Studio</h2>
          <h2 class="magenta">Build models with zero scripting or coding.</h2>
          <p>Create all data transformations, build AI models by creating formulas in an intuitive user interface.  Tedious scripting is a thing of the&nbsp;past.</p>
        </div>
      </div>
      </section>
    );
  }
}

export default Section5;