import {combineReducers, configureStore} from "@reduxjs/toolkit";
import user from "./reducer/user";
const rootReducer=combineReducers({
    user
    
    })

    

export const store =configureStore({
    reducer:rootReducer
})