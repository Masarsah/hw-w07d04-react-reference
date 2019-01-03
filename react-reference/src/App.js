import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
          <Content />
          <Footer />
        </header>
      </div>
    );
  }
}

export default App;
