import React from 'react'

 const FBCPropEx = (props) => {
    // console.log(props);
if(props.ispretty== true){
    return (
        <div>
            <h1>{props.username} is pretty</h1>
            {
                props.hobbies.map(hobby=>{
                    return <li>{hobby}</li>
                })
            }
        </div>
    )
  }else{
    return <h1>Not pretty</h1>

    }
 }

 export default FBCPropEx
