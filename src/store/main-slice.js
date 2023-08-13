import { createSlice } from '@reduxjs/toolkit'
const initialState = {amountSections: 0,currentBlock:'main'}
const mainSlice = createSlice({
    name:'main',
    initialState,
    reducers:{
        changeToSecondBlock(state){
            state.currentBlock = 'second'
        }
    }
})
export default mainSlice.reducer