// import { configureStore } from "@reduxjs/toolkit"
// import { itemsSlice } from "./slices/item"

// const store = configureStore({
//     reducer: {
//         users: itemsSlice.reducer,
//     }
// })
// export default store

import { configureStore } from "@reduxjs/toolkit";
import { itemsSlice } from "../store/slices/item.js"
const Store = configureStore({
    reducer: {
        items: itemsSlice.reducer
    }
})
export default Store