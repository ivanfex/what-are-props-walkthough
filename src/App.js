// Notice that below, I did not include , {Component} after import
// React
import React from 'react';

// we're importing the component from Todo.js
import Todo from './Todo';


class App extends React.Component {

  constructor(){
    super();

  }

// Establish a function that we are going to be passing
// into the Todo Component.

  handleSubmit(e){
    e.preventDefault();
  }

  handleChange(e){
    e.preventDefault();
  
  }

  render() {
    return (
      <div>

        <form onSubmit={(event)=> this.handleSubmit(event)}>
          <input onChange={()=>this.handleChange(event)} />
          <input type="submit"/>
        </form>

      </div>
    );
  }
}


// Change the state of both the local component and the parent component
// introduce the local loop and creating a new component to handle the loop
// talk about key in the <li>
// constructor method


export default App;
