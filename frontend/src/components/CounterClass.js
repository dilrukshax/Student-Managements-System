import React, { Component } from 'react'

class CounterClass extends Component {
    constructor() {
        super() ;
        this.increment = this.increment.bind(this) ;
        this.state = {
            number: 0
        }            
    }

    increment() {
        this.setState({
            number: this.state.number + 1
        })
    }    

    render() {
        return (
            <div>
                <h1>class </h1>
                <h1>Counter = {this.state.number}</h1>
                <button onClick={this.increment.bind(this)}>Increment</button>
            </div>
        )
    }
}

export default CounterClass