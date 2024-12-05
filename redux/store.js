import { configureStore } from "@reduxjs/toolkit";
import menureducer from "./menuSlice"


export const store = configureStore({
    reducer:{
        menu:menureducer
    }
})
