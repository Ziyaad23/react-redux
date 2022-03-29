import { configureStore } from "@reduxjs/toolkit";
import characterReducer from './characters/characterSlice';

export const store = configureStore({
    reducer: {
        characters: characterReducer,
    },
});