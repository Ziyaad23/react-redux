import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    characters: [],
};

const characterSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        addCharacters: (state, { payload }) => {
            state.characters = payload;
        },
    },
});

export const { addCharacters } = characterSlice.actions;
export const getAllCharacters = (state) => state.characters.characters;
export default characterSlice.reducer;
