import { configureStore } from "@reduxjs/toolkit";
import cartSclice from "../Cartsclice/cartSclice";
import wishListslice from "../WishlistSlice/wishListslice";

const store =configureStore({
    reducer:{
        cart:cartSclice,
        wishlist:wishListslice

    }
})

export default store;