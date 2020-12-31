import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        {/* <div>
          Phone Directory !
              </div>

        <div>
          <span>Name</span><br />
          <span>Phone</span>
        </div> */}

        <label htmlFor='name'>Name</label>
        <input id='name' type='text' placeholder='Type Here..'></input>
      </div>
    );
  }
}

export default App;