import { createSlice } from '@reduxjs/toolkit'
const initialState = {amountSections: 0,currentBlock:'main',mark:0}
const mainSlice = createSlice({
    name:'main',
    initialState,
    reducers:{
        changeBlock(state,action){
            state.currentBlock = action.payload ? action.payload : ''
        },
        putNumberInCell(state,action){
            state.amountSections = action.payload
        },
        counterOfMark(state,action){
            const arr = action.payload
            let totalAmount = 0;
            for (let i = 0; i < arr.length; i++) {
                totalAmount+=arr[i]    
            }
            state.mark = totalAmount / state.amountSections
        }
    }
})
export const mainActions = mainSlice.actions
export default mainSlice.reducer