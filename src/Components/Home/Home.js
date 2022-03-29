import React, { useEffect } from 'react';
import CharacterListing from '../CharacterListing/CharacterListing';
import baseURL from '../../Common/apis/characterApis';

const Home = () => {

    useEffect(() => {
        const fetchCharacters = async () => {
            const response = await baseURL.get(`/characters`)
                .catch(error => {
                    console.log("Error", error);
                });
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