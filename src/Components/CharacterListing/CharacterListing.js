import React from 'react';
import { useSelector } from 'react-redux';
import { getAllCharacters } from '../../Features/characters/characterSlice';
import CharacterCard from '../CharacterCard/CharacterCard';

const CharacterListing = () => {
    const characters = useSelector(getAllCharacters);

    const renderCharacters = characters.map((character, index) => {
        return <CharacterCard key={index} data={character} />;
    });

    return (
        <div>
            {renderCharacters}
        </div>
    );
};

export default CharacterListing;