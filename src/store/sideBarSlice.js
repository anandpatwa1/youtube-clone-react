import { createSlice } from "@reduxjs/toolkit";

const navigationBarSlice = createSlice({
    name : 'navigationBar',
    initialState : {
        isOpen : true

    },
    reducers : {
        isToggle : (state)=>{
            state.isOpen = !state.isOpen
        }
       
    } 
})

export const {isToggle} = navigationBarSlice.actions
export default navigationBarSlice.reducer