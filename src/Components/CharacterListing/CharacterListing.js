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
        <div className="grid grid-cols- gap-4 md:grid-cols-5 md:px-10">
            {renderCharacters}
        </div>
    );
};

export default CharacterListing;