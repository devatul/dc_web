import React, { Component } from 'react';
import Article from './Article';

class Home extends Component {

    getArticles = () => {
        let articles = [];
        this.props.data.articles.map((d)=>{
            articles.push(<Article data={d}/>)
        });
        return articles;
    }

    render() {
        return (
            <section>
                <header className="section-1">
                    <div className="content-wrapper">
                        <div className="content">
                            <h1 className="js-name risein">{this.props.data.title}</h1>
                        </div>
                    </div>
                </header>
                {this.getArticles()}
            </section>
        );
    }
}

export default Home;