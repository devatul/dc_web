import React, { Component } from 'react';
import logo from '../assets/images/logo.png';
import Button from './Button';
import '../styles/menu.css';

class Menu extends Component {
  render() {
    return (
        <nav className="js-nav--main">
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
                <Button label="REQUEST A DEMO" />
            </div>
        </nav>
    );
  }
}

export default Menu;