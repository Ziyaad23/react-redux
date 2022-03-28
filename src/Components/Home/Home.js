import React, { useEffect } from 'react';
import CharacterListing from '../CharacterListing/CharacterListing';
import baseAPI from '../../Common/apis/characterApis';

const Home = () => {

    useEffect(() => {
        const fetchCharacters = async () => {
            const response = await baseAPI.get(`/characters`)
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