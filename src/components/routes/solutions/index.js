import React, { Component } from 'react';
import Article from '../../Article';
import {initGA} from '../../../helper';

class Solutions extends Component {

    getArticles = () => {
        let articles = [];
        this.props.data.articles.map((d)=>{
            articles.push(<Article key={d.id} data={d}/>)
        });
        return articles;
    }
    componentDidMount(){
        initGA(this.props.location.pathname);
    }
    render() {
        return (
            <section>
                <header className="section header dark">
                    <div className="content-wrapper">
                        <div className="content">
                            <h1 className="risein">{this.props.data.title}</h1>
                            <h2 className="risein">{this.props.data.description}</h2>
                        </div>
                    </div>
                </header>
                {this.getArticles()}
            </section>
        );
    }
}

export default Solutions;