import React, {Component} from 'react';

export default class HandlerEx extends Component {
    constructor(props){
        super(props);

        this.state = {
            msg: 'Hello World!'
        }
    }

    changeMsg = ()=>{
        this.setState({msg: 'Goodbye World!'})
    }

    render(){

        return(
            <>
                <h1>{this.state.msg}</h1>
                <button onClick={this.changeMsg}>클릭</button>
            </>
        )
    }
}