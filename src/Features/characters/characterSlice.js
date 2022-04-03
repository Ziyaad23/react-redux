import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from '../../Common/apis/characterApis';

export const fetchAsyncCharacters = createAsyncThunk('characters/fetchAsyncCharacters', async (char_limit) => {
    const response = await baseURL
        .get(`/characters?limit=${char_limit}`)
    return response.data;
});

export const fetchAsyncDeath = createAsyncThunk('characters/fetchAsyncDeath', async () => {
    const response = await baseURL
        .get(`/random-death`)
    return response.data;
});

export const fetchAsyncQuotes = createAsyncThunk('characters/fetchAsyncQuotes', async (char_name) => {
    const response = await baseURL
        .get(`/quote/random?author=${char_name}`)
    return response.data;
});

export const fetchAsyncCharactersDetails = createAsyncThunk('characters/fetchAsyncCharactersDetails', async (char_id) => {
    const response = await baseURL
        .get(`/characters/${char_id}`)
    return response.data;
});

const initialState = {
    characters: [],
    quotes: [],
    charactersDetails: [],
    death: [],
};

const characterSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        removeCharacterDetails: (state) => {
            state.charactersDetails = {};
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
        [fetchAsyncQuotes.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully");
            return { ...state, quotes: payload };
        },
        [fetchAsyncCharactersDetails.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully");
            return { ...state, charactersDetails: payload };
        },
        [fetchAsyncDeath.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully");
            return { ...state, death: payload };
        },
    }
});

export const { removeCharacterDetails } = characterSlice.actions;
export const getAllCharacters = (state) => state.characters.characters;
export const getSelectedCharacterDeath = (state) => state.characters.death;
export const getSelectedCharacterQuotes = (state) => state.characters.quotes;
export const getSelectedCharacterDetails = (state) => state.characters.charactersDetails;
export default characterSlice.reducer;
