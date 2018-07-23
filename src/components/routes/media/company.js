import React, { Component } from 'react';
import Article from '../../Article';
import {find} from 'lodash';
import planet from '../../../assets/images/All_player_planet.png'
var moment = require('moment');

class Company extends Component {

    getParaContent   = (article, date) => {
        
        let section = [];

        article.content.sections.map((d, i)=>{
            let para = [];
            d.paragraphs.map((p, j)=>{
                console.log('i === 0',i === 0 && j === 0 , i,j);
                
                para.push(<p> {i === 0 && j === 0 && <span className="date-place">{`${article.content.location.city} ${article.content.location.state} - ${date} -`}</span>}{p.test}</p>)
            })
            section.push(<div className="paragraphs">
                    {d.title && <h3>{d.title}</h3>}
                    {para}
                </div>
            )
        });
        return section;
    }

    render() {
        let id = this.props.match.params.id;
        let article = id && find(this.props.data.articles, {id});
        let date = moment(article.content.date).format('MMMM, DD YYYY');
        return (
            <section className="section article-page" >
                <div className="title">{article.title}</div>
                <div className="date">{date}</div>
                <div className="image-wrapper">
                    <img src={planet} />
                </div>
                {this.getParaContent(article, date)}
                
            </section>
        );
    }
}

export default Company;