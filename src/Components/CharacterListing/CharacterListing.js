import React from 'react';
import { useSelector } from 'react-redux';
import { getAllCharacters } from '../../Features/characters/characterSlice';
import CharacterCard from '../CharacterCard/CharacterCard';

const CharacterListing = () => {
    const characters = useSelector(getAllCharacters);

    const renderCharacters =
        characters.length > 0 ? (
            characters.map((character, index) => (
                <CharacterCard key={index} data={character} />
            ))
        ) : (
            <div>Loading Characters</div>
        );

    return (
        <div className="grid grid-cols- gap-4 md:grid-cols-5 md:px-10">
            {renderCharacters}
        </div>
    );
};

export default CharacterListing;