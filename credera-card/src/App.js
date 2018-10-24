import React, { Component } from 'react';
import thumbnail from './quantum_compute.jpg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="card">
          <div className="thumbnail">
            <img src={thumbnail} alt="thumbnail image" />
          </div>
          <div className="line"></div>
          <div className="text">
            <h4 className="date">August 10, 2015</h4>
            <h3 className="headline">Google is Building Quantum Computing Processors</h3>
            <p className="summary">Google has teamed up with a group of university scientists in California in an effort to build quantum information processors...</p>
            <a
              className="link"
              // href={/*link to article*/}
              target="currently_blank"
            >
              <h4>Read Full Article →</h4>
            </a>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
