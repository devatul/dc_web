import React, { Component } from 'react';
import Button from './Button';

class Section2 extends Component {
  render() {
    return (
      <section className="section-2 bg-pattern">
        <div className="sec-2-content">
        <h2>AI that actually&nbsp;works.</h2>
        <p>
          Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. Machinify radically simplifies and accelerates your ability to use AI to unlock the value in your data and deliver guaranteed&nbsp;ROI.
        </p>
      </div>
      <Button _classname="sec-2-read-our-story-btn" label="READ OUR STORY" />
      </section>
    );
  }
}

export default Section2;