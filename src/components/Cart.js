import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../Cart/Cart'

export default function Cart() {
    const cartItem = useSelector(state => state.cart.cartItem);
    const dispatch = useDispatch();
  
    return (
        <div>
            <p>{cartItem}</p>
            <button onClick={() => dispatch(increment())}> Add Item to cart</button>
            <button onClick={() => dispatch(decrement())}> Remove item from cart</button>
        </div>
    )
}
