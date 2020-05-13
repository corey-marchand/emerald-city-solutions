import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import  NavigationBar  from './components/navbar/navbar.component';
import React from 'react';
import Home from './pages/home/home.component';
import Portfolio from './pages/portfolio/portfolio.component';
import About from './pages/about/about.component';
import Skills from './pages/technologies/technologies.components';
import Form from './components/contact-form/contact-form.component';
import Slider from './components/slider/slider.component';
import './App.css';
import Footer from './components/footer/footer.component';

const App = () => (
  <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/skills" component={Skills} />
          <Route path="/contact" component={Form} />
        </Switch>
        <Footer />
        <NavigationBar />
        <div className='styled-div'></div>
      </Router>
  </>
);

export default App;