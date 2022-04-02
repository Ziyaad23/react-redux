import React from 'react';
import { Link } from 'react-router-dom';

const CharacterCard = (props) => {
    const { data } = props;
    return (
        <Link to={`/character/${data.char_id}`}>
            <div className="flex justify-center md:hover:scale-105">
                <div className="rounded-lg shadow-lg bg-white">
                    <div>
                        <img className="rounded-t-lg h-96 md:h-80 w-96 object-cover" src={data.img} alt="characters" />
                    </div>
                    <div className="p-6 h-32">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">{data.name}</h5>
                        <p className="text-gray-700 text-base mb-4">
                            {data.occupation[0]}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default CharacterCard;