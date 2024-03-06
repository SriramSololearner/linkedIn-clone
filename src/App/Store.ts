import Slider from './../features/Slider';
import { configureStore } from '@reduxjs/toolkit'


export const Store = configureStore({
    reducer: {
        Slider: Slider
    }
})


export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch