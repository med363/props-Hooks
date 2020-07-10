import React from 'react'
export default  function Child1(props){
    return(
        <div>
            <img src={props.src} alt="nature" width={props.widthImg}/>
            <h1>{props.title}</h1>
            <button onClick={()=>props.abc()}>goodbye</button>
           
        </div>
    )
}