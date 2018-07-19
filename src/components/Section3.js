import React, { Component } from 'react';
// import '../styles/components/section3.scss';

class Section3 extends Component {
  render() {
    return (
      <section className="section-3 js-points">
      <div className="js-point">
        <div className="js-point-image-wrapper left-box">
          <div className="bg-image1" />
        </div>
        <div className="js-point-content right-box">
          <h2>Go from raw data to productionized AI in&nbsp;minutes.</h2>
          <p className="">
            Machinify’s ability to automate data collection, data transformation, AI creation and product deployment shrinks the time from from product idea to AI deployed into production from 6-9 months to a matter of minutes.&nbsp;Really.
          </p>
        </div>
      </div>
      <div className="js-point js-point-reverse">
        <div className="js-point-image-wrapper">
          <div className="bg-image2" />
        </div>
        <div className="js-point-content">
          <h2>Unleash AI across your&nbsp;company.</h2>
          <p className="">
          Machinify makes AI accessible to domain experts and analysts in all parts of your organization.  Collaboration and change management tools enable your entire enterprise to benefit from each team’s insights and&nbsp;advances.
          </p>
        </div>
      </div>
      <div className="js-point">
        <div className="js-point-image-wrapper">
          <div className="bg-image3" />
        </div>
        <div className="js-point-content">
          <h2>AI built for you, controlled by&nbsp;you.</h2>
          <p>
            Create lasting competitive advantage by unlocking the value in your own proprietary data.  Our partnership model gives you full control of mission critical products and&nbsp;processes.
          </p>
        </div>
      </div>
      <div className="js-point js-point-reverse">
        <div className="js-point-image-wrapper">
          <div className="bg-image4" />
        </div>
        <div className="js-point-content">
          <h2>Immediate ROI</h2>
          <p>
            Avoid expensive and time-consuming startup efforts. Machinify enables to you deploy AI-driven products quickly and start generating ROI right away.
          </p>
        </div>
      </div>
      </section>
    );
  }
}

export default Section3;