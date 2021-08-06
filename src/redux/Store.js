import { configureStore } from '@reduxjs/toolkit'
import Cart from '../Cart/Cart'

const store = configureStore({
  reducer: {
    cart: Cart
  },
})
export default store