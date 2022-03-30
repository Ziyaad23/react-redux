import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from '../../Common/apis/characterApis';

export const fetchAsyncCharacters = createAsyncThunk('characters/fetchAsyncCharacters', async () => {
    const response = await baseURL
        .get(`/characters`)
    return response.data;
});

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
    extraReducers: {
        [fetchAsyncCharacters.pending]: () => {
            console.log("Pending");
        },
        [fetchAsyncCharacters.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully");
            return { ...state, characters: payload };
        },
        [fetchAsyncCharacters.rejected]: () => {
            console.log("Failed");
        },
    }
});

export const { addCharacters } = characterSlice.actions;
export const getAllCharacters = (state) => state.characters.characters;
export default characterSlice.reducer;
