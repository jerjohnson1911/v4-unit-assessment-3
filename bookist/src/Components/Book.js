import React from 'react'

export default function Book(props){

    
return (
    
        <p className='test2' onClick={() => props.addToShelf(props.info)}>
                <img src={props.info.img}></img>
                <br/>{props.info.title} 
                <br/>By: {props.info.author}
                        
                {/* <p>{props.info.title}</p> */}
                        
        {/* <p>By: {props.info.author}</p> */}
            </p>

)
}