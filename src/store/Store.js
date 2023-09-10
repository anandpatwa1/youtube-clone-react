import { configureStore } from "@reduxjs/toolkit";
import navigationBarReducer from './sideBarSlice'
import searchReducer from "./searchSlice";
 
const store = configureStore({
    reducer:{
        navigationBar : navigationBarReducer,
        search : searchReducer

    }
})

export default store
