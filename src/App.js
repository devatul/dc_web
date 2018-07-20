import './index.scss';
import './styles/components/index.scss';
import React, { Component } from 'react';
import Menu from './components/Menu';
import Home from './components/Home';
import Footer from './components/Footer';
import data from './constants';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu data={data.menu}/>
        <Home data={data.page.home}/>
        <Footer data={data.footer}/>
      </div>
    );
  }
}

export default App;
