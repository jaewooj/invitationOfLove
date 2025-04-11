import { configureStore } from "@reduxjs/toolkit";
import item from "./modules/itemSlice"

export const store = configureStore({
    reducer: {
        item
    }
})