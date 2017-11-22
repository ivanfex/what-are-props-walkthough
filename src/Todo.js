import React from 'react';

class Todo extends React.Component{
    render(){
        return(
            <div>
                <button onClick={ this.props.wiz }>
                    Are you a wizard?
                </button>
            </div>
        );
    }
}

export default Todo;
