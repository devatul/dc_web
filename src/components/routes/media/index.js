import React, { Component } from 'react';
import Article from '../../Article';
import Button from '../../Button';
import {indexOf, splice} from 'lodash';

class Media extends Component {
    state = {
        filter: []
    }
    getArticles = () => {
        let articles = [];
        let filter = this.state.filter;
        this.props.data.articles.map((d)=>{
            if(filter.length === 0 || filter.includes(d.group) ){
                articles.push(<Article key={d.id} data={d}/>)
            }
        });
        return articles;
    }
    handleFilter = (filterText)=>{
        let filter = [];//this.state.filter;
        let index = indexOf(filter, filterText);
        
       if(index === -1){
        filter.push(filterText);
       }
    //    else{    
    //     filter = filter.splice(index, 1);
    //    }
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
                        <Button _classname={`media-filter-btn ${filter.includes('announcement') ? ' active' : ''}`} label="ANNOUNCEMENT" onClick={()=>this.handleFilter('announcement')}/>
                        <Button _classname={`media-filter-btn  ${filter.includes('article') ? ' active' : ''}`} label="ARTICLE"onClick={()=>this.handleFilter('article')}/>
                        <Button _classname={`media-filter-btn ${filter.includes('event') ? ' active' : ''}`} label="EVENT" onClick={()=>this.handleFilter('event')}/>
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