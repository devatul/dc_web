import React, { Component } from 'react';
import logo from '../assets/images/logo.png';
import Button from './Button';
import RequestDemoModal from './RequestDemoModal';
import '../styles/menu.css';

class Menu extends Component {
    state = {
        openRequest: false,
        scrolledClass: ''
    }
    componentDidMount(){
        window.addEventListener('scroll', (e)=>this.handleScroll(e));
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll())
    }
    handleScroll = (e) =>{
        console.log('sssssssssssssss', e, window.scrollY);
        if(window.scrollY > 200){
            this.setState({
                scrolledClass: 'isScrolled'
            });
        }else{
            this.setState({
                scrolledClass: ''
            })
        }
    }
  render() {
    return (
        <div className="js-nav__wrapper">
        <div className="menu-icon">         
            <div className="bar"></div>         
            <div className="bar"></div>         
            <div className="bar"></div>       
        </div>
        <nav className={"js-nav--main " + this.state.scrolledClass}>
            <div className="logo">           
                <img src={logo}/>      
            </div>
            <div className="menu">
                <a className="p-05">
                    <h5 id="philosophy-link" className="menu-item">PHILOSOPHY</h5>
                </a>
                <a className="p-05">
                    <h5 id="product-link" className="menu-item">PRODUCT</h5>
                </a>
                <a className="p-05 border-right">
                    <h5 id="company-link" className="menu-item">COMPANY</h5>
                </a>
                <a id="login" className="p-05">
                    <h5 className="menu-item">SIGN IN</h5>
                </a>
                <Button onClick={()=>this.setState({openRequest:true})} label="REQUEST A DEMO" />
            </div>
        </nav>
            <RequestDemoModal openRequest={this.state.openRequest} close={()=>this.setState({openRequest:false})}/>
        </div>
    );
  }
}

export default Menu;