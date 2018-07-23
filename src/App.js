import './index.scss';
import './styles/components/index.scss';

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

import Menu from './components/Menu';
import Footer from './components/Footer';
import data from './constants';



class App extends Component {

  constructor(){
    super()

    const Loading = () => <div>Loading...</div>;

    this.Home = Loadable({
      loader: () => import('./components/routes/home'),
      loading: Loading,
    });

    this.Solutions = Loadable({
      loader: () => import('./components/routes/solutions'),
      loading: Loading,
    });

    this.Media = Loadable({
      loader: () => import('./components/routes/media'),
      loading: Loading,
    });

    this.About = Loadable({
      loader: () => import('./components/routes/about'),
      loading: Loading,
    });
  }

  render() {

    return (
      <Router className="App">
      <div>
        <Menu data={data.menu}/>
        <Switch>
          <Route exact path="/" component={this.Home} data={data.page.home}/>
          <Route path="/solutions" component={this.Solutions} data={data.page.solutions}/>
          <Route path="/media" component={this.Media} data={data.page.media}/>
          <Route path="/about" component={this.About} data={data.page.about}/>
        </Switch>
        <Footer data={data.footer}/>
      </div>
      </Router>
    );
  }
}

export default App;
