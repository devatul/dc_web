import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="footer bg-dark-gradient">
        <div className="fx-b-25p f-w-300"></div>
        <h4 className="fx-b-50p f-w-300 l-h-l">{this.props.data.address}
          <br />Contact:
          <a href={`mailto:${this.props.data.email}`} className="red f-w-500">
            {this.props.data.email}
          </a>
        </h4>
        <h4 className="fx-b-25p t-a-r f-w-300 l-h-l m-t-1 ms-m-t-0">Copyright © 2018 Company,&nbsp;LLC.</h4>
      </footer>
    );
  }
}

export default Footer;