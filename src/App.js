// Notice that below, I did not include , {Component} after import
// React
import React from 'react';

// we're importing the component from Todo.js
import Todo from './Todo';


class App extends Component {
  render() {

    return (
      {/*Remmber to always wrap your return value here within a
          div*/}
      <div>
        <Todo />

      </div>
    );
  }
}

export default App;
