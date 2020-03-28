import React, { Component } from 'react';
import Map from './components/map';
import NavBar from './components/navbar';
import Footer from './components/footer';
import './App.css';


class App extends Component {
  render () {
    return (
      <div className="container-outside-main"> 
        <NavBar />
        <Map />
        <Footer />
      </div>
    )
  }
}
export default App;
