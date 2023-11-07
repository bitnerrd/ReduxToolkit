import { createSlice } from "@reduxjs/toolkit"
const itemsSlice = createSlice({
    name: 'items',
    initialState: {
        item: [],
        number: 0
    },
    reducers: {
        setAddItem(state, action) {
            state.number = action.payload
        },
        setRemoveItem(state, action) {
            state.item = action.payload
        },
        setRemoveAllItem(state, action) {
            state.item = action.payload
        }

    }
})
export { itemsSlice }
export const { setAddItem } = itemsSlice.actions