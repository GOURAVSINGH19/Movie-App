import { createSlice } from "@reduxjs/toolkit";

const initialState={
    info:null
}


const personSlice =createSlice({
    name:"person",
    initialState,
    reducers:{
        loadmovie:(state,action)=>{
            state.info=action.payload
        },
        removemovie:(state,action)=>{
            state.info=null;
        }
    },
})

export const {loadmovie,removemovie}=personSlice.actions;
export default personSlice.reducer;