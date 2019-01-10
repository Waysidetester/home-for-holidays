import React, { Component } from 'react';
import MyNav from '../components/MyNav/MyNav';
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state = {
    authed: false,
  }

  render() {
    return (
      <div className="App">
        <MyNav authed={this.state.authed}/>
      </div>
    );
  }
}

export default App;
