import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    cartItem: 0
  },
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.cartItem += 1
    },
    decrement: state => {
      state.cartItem -= 1
     
      if (state.cartItem <0) {
        state.cartItem = 0
        
      }
    },
    incrementByAmount: (state, action) => {
      state.cartItem += action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer