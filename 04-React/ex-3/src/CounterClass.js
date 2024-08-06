import React, {Component} from 'react';

class CounterClass extends Component {
    state = {
        count: 0
    }

    render(){
        console.log('Counter state >> ', this.state);
        const {count} = this.state;

        return(
            <>
                <h1>{count}</h1>
                <button onClick={()=>{this.setState({count: count + 2})}}>+ 2</button>
                <button onClick={()=>{this.setState({count: count - 1})}}>- 1</button>
            </>
        )
    }
}

export default CounterClass;