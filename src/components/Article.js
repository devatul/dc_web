import React, { Component } from 'react';
import Button from './Button';

class Article extends Component {
    render() {
      let template = <article></article>
      let data = this.props.data
      switch(this.props.data.layout) {
        case 'button':
          template = (
            <section className="section-6 bg-divider">
              <Button _classname="sec-6-btn" label={data.title} />
            </section>);
          break;
        case 'left':
          template = (
            <article className={`section-6 bg-pattern js-point ${data.theme==='dark' ? 'section-3' :'section-4'}`}>
              <div className="js-point-image-wrapper">
                <div className={`image ${data.image}`} />
              </div>
              <div className={`sec-6-content ${data.theme}`}>
                <h2>{data.title}</h2>
                <p>{data.description}</p>
              </div>
            </article>);
          break;
        case 'right':
          template = (
            <article className={`section-6 bg-pattern js-point ${data.theme==='dark' ? 'section-3' :'section-4'}`}>
              <div className="js-point-image-wrapper">
                <div className={`image ${data.image}`} />
              </div>
              <div className={`sec-6-content ${data.theme}`}>
                <h2>{data.title}</h2>
                <p>{data.description}</p>
              </div>
            </article>);
          break;
        case 'title':
          template = (
            <article className="section-6 bg-divider js-point">
              <div className="js-point-image-wrapper">
                <div className={`image ${data.image}`} />
              </div>
              <div className={`sec-6-content ${data.theme}`}>
                <h2>{data.title}</h2>
                <p>{data.description}</p>
              </div>
            </article>);
          break;
      };
      return template;
    }
}
export default Article;