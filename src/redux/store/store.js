import { configureStore } from '@reduxjs/toolkit'
import { topsApi } from '../apis/topsApi'
import { authorizeSlice } from '../slices/authorize/authorizeSlice'
import { counterSlice } from '../slices/counter/counterSlice'
import {topSongsSlice} from '../slices/tops/topSongsSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    authorize: authorizeSlice.reducer,
    songs: topSongsSlice.reducer,

    [topsApi.reducerPath]: topsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(topsApi.middleware)
})