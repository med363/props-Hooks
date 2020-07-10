import React from 'react'

export default function Child2 (props){

    // let Child2Color
    let Child2Color="blue"
if (props.style && props.style.color){
Child2Color=props.style.color
   }        //else{
//     Child2Color="blue"
//  }
if (props.petit){
    return(
        <h1 style={{color:Child2Color}}>{props.children}</h1>
    )
}else {
    return (
        <h6 style={{color:Child2Color}}>{props.children}</h6>
    )
}
}