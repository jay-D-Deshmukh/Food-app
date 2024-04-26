import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    item:[]
};

const cartSlice = createSlice({
    name:"cart",
    initialState,
    

    reducers: {
        addItem:(state, action)=>{
            state.item.push(action.payload)
        },

        removeItem:(state,action)=>{
            state.item = state.item.filter(item => item._id !== action.payload)
        }
    }
})

export const {addItem,removeItem} = cartSlice.actions;
export default cartSlice.reducer;