import React, { Component } from 'react';
import logo from '../assets/images/logo.png';
import Button from './Button';
import RequestDemoModal from './RequestDemoModal';
import data from '../constants';


class Menu extends Component {
    state = {
        isRequestOpen: false,
        scrolledClass: '',
        isMenuOpen: false
    }
    componentDidMount(){
        window.addEventListener('scroll', (e)=>this.handleScroll(e));
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll())
    }
    handleScroll = (e) =>{
        if(window.scrollY > 200){
            this.setState({
                scrolledClass: ' isScrolled'
            });
        }else{
            this.setState({
                scrolledClass: ''
            })
        }
    }
    toggleMenu = () =>{
        let {isMenuOpen} = this.state;
        this.setState({isMenuOpen: !isMenuOpen});
    }
  render() {
      let {scrolledClass, isMenuOpen} = this.state;
      let menuItems = [];
      data.menu.map((d)=>{
          menuItems.push(<a className={d.devider ? 'border-right': ''}>
            <h5 className="menu-item">{d.label}</h5>
        </a>)
    })
    return (
        <div className="js-nav__wrapper">
        <nav className={"js-nav--main " + scrolledClass + (isMenuOpen ? ' is-menu-open':'')}>
            <div className="logo">           
                <img src={logo}/>      
            </div>
            <div className="menu">
                {menuItems}
                <Button _classname="request-a-demo-btn" onClick={()=>this.setState({isRequestOpen:true})} label="REQUEST A DEMO" />
            </div>
            <div className="menu-icon" onClick={this.toggleMenu}>         
                <div className="bar"></div>         
                <div className="bar"></div>         
                <div className="bar"></div>       
            </div>
        </nav>
            <RequestDemoModal openRequest={this.state.isRequestOpen} close={()=>this.setState({isRequestOpen:false})}/>
        </div>
    );
  }
}

export default Menu;