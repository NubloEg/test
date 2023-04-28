import {createSlice} from "@reduxjs/toolkit";

const initialState=[
   

   ]


const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
       createUser(state,action){
        state.push(action.payload)
       },
       setReturn(state,action){
        state=state.map(el=>{

            if(el.id===action.payload.id){
                el.returned=action.payload.returned
            }
            return el
        })
        
       }
    }
})

export const {createUser,setReturn} = userSlice.actions
export default userSlice.reducer