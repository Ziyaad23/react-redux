import React, { useEffect } from 'react';
import CharacterListing from '../CharacterListing/CharacterListing';
import baseURL from '../../Common/apis/characterApis';
import { useDispatch } from 'react-redux';
import { addCharacters } from '../../Features/characters/characterSlice';

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {

        const fetchCharacters = async () => {
            const response = await baseURL.get(`/characters`)
                .catch(error => {
                    console.log("Error", error);
                });
            dispatch(addCharacters(response.data));
            console.log("Success", response);
        };
        fetchCharacters();
    }, [])
    return (
        <div>
            Home
            <CharacterListing />
        </div>
    );
};

export default Home;