import { createSlice } from '@reduxjs/toolkit'
const initialState = {amountSections: 0,currentBlock:'main'}
const mainSlice = createSlice({
    name:'main',
    initialState,
    reducers:{
        changeBlock(state,action){
            state.currentBlock = action.payload
        },
        putNumberInCell(state,action){
            state.amountSections = action.payload
        }
    }
})
export const mainActions = mainSlice.actions
export default mainSlice.reducer