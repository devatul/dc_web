import React, { Component } from 'react';
import logo from '../assets/images/logo.png';
import Button from './Button';
import {withRouter} from 'react-router-dom';
import RequestDemoModal from './RequestDemoModal';

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
    getMenu = () => {
        let menuItems = [];
        this.props.data.map((d)=>{
            menuItems.push(
                <a className={(d.divider ? 'border-right': '')} onClick={()=>this.props.history.push(d.link)}>
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
            <nav className={"js-nav--main " + scrolledClass + (isMenuOpen ? ' is-menu-open':'')}>
                <div className="logo">           
                    <img src={logo} onClick={()=>this.props.history && this.props.history.push('/home')}/>      
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