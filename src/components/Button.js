import React, { Component } from 'react';

class Button extends Component {
  render() {
    if(this.props.hover === false){
      return (
        <button className={`${this.props._classname}`} onClick={this.props.onClick}>{this.props.label}</button>
    ); 
    }
    return (
        <button className={`button ${this.props._classname}`} onClick={this.props.onClick}>{this.props.label}</button>
    );
  }
}

export default Button;