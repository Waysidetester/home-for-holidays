import React, { Component } from 'react';
import MyNav from '../components/MyNav/MyNav';
import logo from '../logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyNav />
      </div>
    );
  }
}

export default App;
