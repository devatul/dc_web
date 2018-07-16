import React, { Component } from 'react';
import '../styles/button.css';

class Button extends Component {
  render() {
    return (
        <button className={this.props._classname}>{this.props.label}</button>
    );
  }
}

export default Button;