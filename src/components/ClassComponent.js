import React, { Component } from 'react'
import './Styles.css'
export default class ClassComponent extends Component {
    constructor(props){
        super(props)

        this.state={
            clicked:false,
            message:'I am attending react class!!!!'

        }
    }
    changeMessage = () => (
        this.setState({
            clicked:true,
            message: 'Thanks for coming!!'
        })
    )
  render() {
    return (
        <div> 
            <h1 className="heading1">{this.state.message}</h1>
            <button onClick={this.changeMessage}>Click</button>
        </div>
        

    )
  }
}
