import React from 'react';

const CharacterCard = (props) => {
    const { data } = props;
    return (
        <div>
            <p>{data.img}</p>
            <p>{data.name}</p>
        </div>
    );
};

export default CharacterCard;