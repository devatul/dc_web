import React, { Component } from 'react';
import '../styles/footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer bg-dark-gradient">
        <div className="fx-b-25p f-w-300"></div>
        <h4 className="fx-b-50p f-w-300 l-h-l">165 University Avenue, Palo Alto, CA 94301<br />Contact: <a href="mailto:sales@machinify.com" className="red f-w-500">sales@machinify.com</a></h4>
        <h4 className="fx-b-25p t-a-r f-w-300 l-h-l m-t-1 ms-m-t-0">Copyright © 2017 Machinify,&nbsp;Inc.</h4>
      </footer>
    );
  }
}

export default Footer;