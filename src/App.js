import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Main from "./components/Main";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
          <Link to='/'>Home</Link>
          <Link to='/roster'>roster</Link>
          <Link to='/schedule'>schedule</Link>
        </header>
        <Main/>
      </div>
    );
  }
}

export default App;
