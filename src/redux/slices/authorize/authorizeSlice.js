import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: {}
}


export const authorizeSlice = createSlice({
    name: 'authorize',
    initialState,
    reducers:   {
        authorize: (state, action) => {
            console.log(action.payload)
            state.value = action.payload
        }
    }
})



// Action creators are generated for each case reducer function
export const { authorize } = authorizeSlice.actions

export default authorizeSlice