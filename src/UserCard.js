import React from 'react'

export default function UserCard(props) {
    return (
        <div>
            <p><b>Name: </b>{props.name}</p>
            <p><b>Age: </b>{props.age}</p>
            <p><b>Height: </b>{props.height}</p>
           
        </div>
    )
}
