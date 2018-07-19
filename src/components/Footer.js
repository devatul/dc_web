import React, { Component } from 'react';
import data from '../constants';

class Footer extends Component {
  render() {    
    return (
      <footer className="footer bg-dark-gradient">
        <div className="fx-b-25p f-w-300"></div>
        <h4 className="fx-b-50p f-w-300 l-h-l">{data.footer.address}<br />Contact: <a href={`mailto:${data.footer.email}`} className="red f-w-500">{data.footer.email}</a></h4>
        <h4 className="fx-b-25p t-a-r f-w-300 l-h-l m-t-1 ms-m-t-0">Copyright © 2017 Machinify,&nbsp;Inc.</h4>
      </footer>
    );
  }
}

export default Footer;