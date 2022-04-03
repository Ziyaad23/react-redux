import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from '../../Common/apis/characterApis';

//Fetch all characters
export const fetchAsyncCharacters = createAsyncThunk('characters/fetchAsyncCharacters', async (char_limit) => {
    const response = await baseURL
        .get(`/characters?limit=${char_limit}`)
    return response.data;
});

//Fetch character details
export const fetchAsyncCharactersDetails = createAsyncThunk('characters/fetchAsyncCharactersDetails', async (char_id) => {
    const response = await baseURL
        .get(`/characters/${char_id}`)
    return response.data;
});

//Fetch random death of a character
export const fetchAsyncDeath = createAsyncThunk('characters/fetchAsyncDeath', async () => {
    const response = await baseURL
        .get(`/random-death`)
    return response.data;
});

//Fetch quotes for a character
export const fetchAsyncQuotes = createAsyncThunk('characters/fetchAsyncQuotes', async (char_name) => {
    const response = await baseURL
        .get(`/quote/random?author=${char_name}`)
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
        //Fetch all characters status pending
        [fetchAsyncCharacters.pending]: () => {
            return;
        },
        //Fetch all characters status fulfilled
        [fetchAsyncCharacters.fulfilled]: (state, { payload }) => {
            return { ...state, characters: payload };
        },
        //Fetch all characters status rejected
        [fetchAsyncCharacters.rejected]: () => {
            return;
        },
        //Fetch quotes status pending
        [fetchAsyncQuotes.pending]: () => {
            return;
        },
        //Fetch quotes status fulfilled
        [fetchAsyncQuotes.fulfilled]: (state, { payload }) => {
            return { ...state, quotes: payload };
        },
        //Fetch quotes status rejected
        [fetchAsyncQuotes.rejected]: () => {
            return;
        },
        //Fetch character details status pending
        [fetchAsyncCharactersDetails.pending]: () => {
            return;
        },
        //Fetch character details status fulfilled
        [fetchAsyncCharactersDetails.fulfilled]: (state, { payload }) => {
            return { ...state, charactersDetails: payload };
        },
        //Fetch character details status rejected
        [fetchAsyncCharactersDetails.rejected]: () => {
            return;
        },
        //Fetch random death status pending
        [fetchAsyncDeath.pending]: () => {
            return;
        },
        //Fetch random death status fulfilled
        [fetchAsyncDeath.fulfilled]: (state, { payload }) => {
            return { ...state, death: payload };
        },
        //Fetch random death status rejected
        [fetchAsyncDeath.rejected]: () => {
            return;
        },
    }
});

export const { removeCharacterDetails } = characterSlice.actions;
export const getAllCharacters = (state) => state.characters.characters;
export const getSelectedCharacterDeath = (state) => state.characters.death;
export const getSelectedCharacterQuotes = (state) => state.characters.quotes;
export const getSelectedCharacterDetails = (state) => state.characters.charactersDetails;
export default characterSlice.reducer;
