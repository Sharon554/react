import React from 'react'
import './Styles.css'

function FunctionalComponent(props){
    console.log(props)//object
    let applyStyle = props.apply ? 'heading':''
    let inlineStyle={
        color:'green',
        backgroundColor:'red',
        fontSixe:'100px'
    }
  return (
    <div>
    <h1 class={'${applyStyle} font-style'}>Welcome to the React class {props.clgName},{props.city},{props.children} </h1>
    <h2 style={inlineStyle}>Good afternoon</h2>
    </div>
  )
}

export default FunctionalComponent;
