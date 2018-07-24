import React, { Component } from 'react';
import Article from '../../Article';
import Button from '../../Button';
import {initGA} from '../../../helper';


class Media extends Component {
    state = {
        filter: {
            announcement: true,
            article: true,
            event:true
        }
    }
    componentDidMount(){
        initGA(this.props.location.pathname);
      }
    getArticles = () => {
        let articles = [];
        let filter = this.state.filter;
        this.props.data.articles.map((d)=>{
            if(filter[d.group]){
                articles.push(<Article key={d.id} data={d}/>)
            }
        });
        return articles;
    }
    handleFilter = (filterText)=>{
        let filter = this.state.filter;
        filter[filterText] = !filter[filterText];
        this.setState({filter});
    }
    render() {
        let filter = this.state.filter;        
        return (
            <section className="media">
                <header className="section header dark">
                    <div className="content-wrapper">
                        <div className="content">
                            <h1 className="risein">{this.props.data.title}</h1>
                            <h2 className="risein">{this.props.data.description}</h2>
                        </div>
                    </div>
                </header>
                <div className="section body">
                    <div className="filter-wrapper">
                        <Button hover={false} _classname={`media-filter-btn ${!filter.announcement ? ' filtered' : ''}`} label="ANNOUNCEMENT" onClick={()=>this.handleFilter('announcement')}/>
                        <Button hover={false} _classname={`media-filter-btn  ${!filter.article ? ' filtered' : ''}`} label="ARTICLE"onClick={()=>this.handleFilter('article')}/>
                        <Button hover={false} _classname={`media-filter-btn ${!filter.event ? ' filtered' : ''}`} label="EVENT" onClick={()=>this.handleFilter('event')}/>
                    </div>
                    <div className="tiles-container">
                        {this.getArticles()}
                    </div>
                </div>
            </section>
        );
    }
}

export default Media;