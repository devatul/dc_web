import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Button from './Button';

class Article extends Component {
    render() {
      let template = <article></article>
      let data = this.props.data
      switch(this.props.data.layout) {
        case 'button':
          template = (
            <section className={`section ${data.theme}`}>
              <Button _classname="sec-6-btn" onClick={()=>this.props.history.push(data.link)} label={data.title} />
            </section>);
          break;
        case 'left':
          template = (
            <article className={`section content-t-2 ${data.theme}`}>
              <div className="image-wrapper">
                <div className={`image ${data.image}`} />
              </div>
              <div className={`content`}>
                {data.group && <h2 className="no-border">{data.group}</h2>} 
                <h2 className={data.theme === 'light' && "magenta no-border"}>{data.title}</h2>
                <p>{data.description}</p>
              </div>
            </article>);
          break;
        case 'right':
          template = (
            <article className={`section content-t-2 reverse ${data.theme}`}>
              <div className="image-wrapper">
                <div className={`image ${data.image}`} />
              </div>
              <div className={`content`}>
                {data.group && <h2 className="no-border">{data.group}</h2>}
                <h2 className={data.theme === 'light' && "magenta no-border"}>{data.title}</h2>
                <p>{data.description}</p>
              </div>
            </article>);
          break;
        case 'title':
          template = (
            <article className={`section content-t-1 ${data.theme}`}>
              <h2>{data.title}</h2>
              <p>{data.description}</p>
            </article>);
          break;
          case 'tile':
          template = (
            <article className="tile-wrapper">
                <div className="tile" onClick={()=>this.props.history.push(`${data.link}/${data.id}`)}>
                    <div className="group">{data.group}</div>
                    <div className="title">{data.title}</div>
                    <div className="signature">Sam Smith, 2 weeks ago</div>
                </div>
            </article>
          )
      };
      return template;
    }
}
export default withRouter(Article);