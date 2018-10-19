import React, { Component } from 'react';
import './App.css';
import Login from './Login/Login';
import Layout from './Layout';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Layout>
        <header className="App-header">
          <Switch>
            <Route exact path='/' component={ Login } />
          </Switch>
        </header>
        </Layout>
      </div>
      </Router>
    );
  }
}

export default App;
