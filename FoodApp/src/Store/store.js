import { configureStore } from "@reduxjs/toolkit";
import cartSclice from "../Cartsclice/cartSclice";

const store =configureStore({
    reducer:{
        cart:cartSclice
    }
})

export default store;