import React from 'react'

export default function Card(props) {





    return (
        <div>
            <h1>{props.myProduct.Title}</h1>
          <p>{props.myProduct.Description} </p>
          <p>{props.myProduct.price} </p>
          <button onClick={props.myClick}> alert something </button>
        
        </div>
    )
}
