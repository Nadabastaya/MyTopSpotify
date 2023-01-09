import { configureStore } from '@reduxjs/toolkit'
import { authorizeSlice } from '../slices/authorize/authorizeSlice'
import { counterSlice } from '../slices/counter/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    authorize: authorizeSlice.reducer
  },
})