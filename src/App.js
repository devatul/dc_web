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

    this.Company = Loadable({
      loader: () => import('./components/routes/media/company'),
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
          <Route exact path="/" render={(props)=><this.Home {...props} data={data.page.home}/>} />
          <Route path="/home" render={(props)=><this.Home {...props} data={data.page.home}/>} />
          <Route path="/solutions" render={(props)=><this.Solutions {...props} data={data.page.solutions}/>} />
          <Route path="/media" render={(props)=><this.Media {...props} data={data.page.media}/>} />
          <Route path="/company/:id" render={(props)=><this.Company {...props} data={data.page.media}/>} />
          <Route path="/about" render={(props)=><this.About {...props} data={data.page.about}/>} />
        </Switch>
        <Footer data={data.footer}/>
      </div>
      </Router>
    );
  }
}

export default App;
