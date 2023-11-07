
import { configureStore } from "@reduxjs/toolkit";
import { itemsSlice } from "../store/slices/item.js"
const Store = configureStore({
    reducer: {
        items: itemsSlice.reducer,

    }
})
export default Store