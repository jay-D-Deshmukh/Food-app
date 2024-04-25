import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    item:[]
};

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers:{
        addTOWishlist:(state,action)=>{
          state.item.push(action.payload)
        },
        removefromWishlist:(state,action)=>{
          state.item = state.item.filter((item)=>item.id !== action.payload.id)
        }
    }
})

export const {addTOWishlist,removefromWishlist} = wishlistSlice.actions;
export default wishlistSlice.reducer;