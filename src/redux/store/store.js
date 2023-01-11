import { configureStore } from '@reduxjs/toolkit'
import { authorizeSlice } from '../slices/authorize/authorizeSlice'
import { counterSlice } from '../slices/counter/counterSlice'
import {topSongsSlice} from '../slices/tops/topSongsSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    authorize: authorizeSlice.reducer,
    songs: topSongsSlice.reducer,
  },
})