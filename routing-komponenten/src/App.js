import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { getCLS, getFID, getLCP, getFCP, getTTFB } from 'web-vitals';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';


function App() {
  return (
    <Router>
  <Header />
  <Switch>
    <Route exact path="/" component={Main} />
  </Switch>
  <Footer />
</Router>
  )};
 

export default App;
