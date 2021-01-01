import React, { Component }  from 'react';
import Header from "./Header";

import "./Header.css"

class App extends Component {
  render() {
    return (
      <div>
       <Header/> 
        <div>
          <span>Name</span><br />
          <span>Phone</span>
        </div>

        <label htmlFor='name'>Name</label>
        <input id='name' type='text' placeholder='Type Here..'></input>
      </div>
    );
  }
}

export default App;