import { createSlice } from '@reduxjs/toolkit'

import axios from 'axios'

const initialState = {
  data: [],
}



export const topSongsSlice = createSlice(
{
  name: 'songs',
  initialState,
  reducers: {
    longTerm: (state) => {
        console.log(state)
      state.data = [action.payload]
    },
    mediumTerm: (state, action) => {
        state.data = [action.payload]
    },
    shortTerm: (state, action) => {
        state.data = [action.payload]
    },
  },
})

export const getLongTerm = (data) => async (dispatch) =>    {
    
    try {
        const { data } = await axios.get(`https://api.spotify.com/v1/me/top/tracks?time_range=large_term`, {
        headers: {
            Authorization: `Bearer ${value.access_token}`,
        }
    })
        dispatch(longTerm(data?.item))
    } catch (error) {
        console.log(error)
    }
}

export const getMediumTerm = (data) => async (dispatch) =>    {
    const { value } = useSelector(getAuthorize)
    try {
        const { data } = await axios.get(`https://api.spotify.com/v1/me/top/tracks?time_range=medium_term`, {
        headers: {
            Authorization: `Bearer ${value.access_token}`,
        }
    })
        dispatch(longTerm(data?.item))
    } catch (error) {
        console.log(error)
    }
}

export const getShortTerm = (data) => async (dispatch) =>    {
    const { value } = useSelector(getAuthorize)
    try {
        const { data } = await axios.get(`https://api.spotify.com/v1/me/top/tracks?time_range=short_term`, {
        headers: {
            Authorization: `Bearer ${value.access_token}`,
        }
    })
        dispatch(longTerm(data?.item))
    } catch (error) {
        console.log(error)
    }
}

// Action creators are generated for each case reducer function
export const { longTerm, mediumTerm, shortTerm } = topSongsSlice.actions

export default topSongsSlice