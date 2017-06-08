// Notice that below, I did not include , {Component} after import
// React
import React from 'react';

// we're importing the component from Todo.js
import Todo from './Todo';


class App extends React.Component {

// Establish a function that we are going to be passing
// into the Todo Component
  fun(e){
    alert("We're about to get White Castle");
  }

  render() {

    return (
      <div>
        <Todo name="Pick up My cousins kids"
              age="24" data={data}
              tiger={this.fun} />
      </div>
    );
  }
}

// inputting an object.
const data = {'todo': [1,2,3,4]}

// passing an array
// const data = [1,2,3,4]

// passing a number
// const data = 4


export default App;
