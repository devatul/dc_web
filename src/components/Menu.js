import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import logo from '../assets/images/logo.png';
import Button from './Button';
import RequestDemoModal from './RequestDemoModal';

class Menu extends Component {
    state = {
        isRequestOpen: false,
        isMenuOpen: false
    }
    toggleMenu = () =>{
        let {isMenuOpen} = this.state;
        this.setState({isMenuOpen: !isMenuOpen});
    }
    handleClick = (link) => {
        if(window.screen.width < 960){
            this.toggleMenu();
        }
        this.props.history.push(link);
    }
    getMenu = () => {
        let menuItems = [];        
        this.props.data.map((d)=>{
            menuItems.push(
                <a className={(d.divider ? 'border-right': '')} key={d.id} onClick={()=>this.handleClick(d.link)}>
                    <h5 className="menu-item">{d.label}</h5>
                </a>
            )
      });
      return menuItems;
    }
  render() {
      let {scrolledClass, isMenuOpen} = this.state;  
    return (
        <div className="js-nav__wrapper">
            <nav className={"js-nav--main isScrolled" + (isMenuOpen ? ' is-menu-open':'')}>
                <div className="logo">           
                    <img src={logo} onClick={()=>this.handleClick('/home')}/>      
                </div>
                <div className="menu">
                    {this.getMenu()}
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

export default withRouter(Menu);