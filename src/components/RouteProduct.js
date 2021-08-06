import React from 'react'
import { useParams } from "react-router-dom";

export default function RouteProduct() {

    const{id} = useParams();
    return (
        <div>
            Hello {id}
        </div>
    )
}
