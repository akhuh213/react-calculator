import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'


class Calculator extends Component {
    
    constructor(props) {
        super()
        this.state = {
            result:0,
            num1: "",
            num2: ""
        }
    }
    setNum = (e, num) => {       
        this.setState({ [num]: e.target.value, 
        result:0})
        console.log(this.state)
    }
    addNum = (e) => {
        e.preventDefault()
        const newResult = this.state.result
        const num1 = this.state.num1
        const num2 = this.state.num2
        this.setState({           
            result: newResult+Number(num1)+Number(num2),
            num1:"",
            num2:"",
            
        })
        console.log(this.state)
    }

    render() {
        let results = this.state.result
        return(
            <div className="container">
                <h1> Add with React!</h1>

                <div className="add">
                    <input type="number" 
                    name="num1"
                    placeholder= "Enter your first number"
                    value={this.state.num1}
                    onChange={ (e) => this.setNum(e, 'num1')}
                    />
                    <span>+</span>
                    <input type="number"
                    name="num2"
                    placeholder="Enter your second number"
                    value={this.state.num2}
                    onChange={ (e) => this.setNum(e, 'num2')}
                     />
                    <button onClick={(e) => this.addNum(e)}>=</button>
                    <h3> {results} </h3>
                </div>

            </div>
        )

    }
}



export default Calculator;