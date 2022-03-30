import React from 'react';

const CharacterCard = (props) => {
    const { data } = props;
    return (
        <div className="flex justify-center">
            <div className="rounded-lg shadow-lg bg-white">
                <a href="#">
                    <img className="rounded-t-lg h-96 md:h-64 w-96 object-cover" src={data.img} alt="characters" />
                </a>
                <div className="p-6 ">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">{data.name}</h5>
                    <p className="text-gray-700 text-base mb-4">
                        {data.occupation[0]}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CharacterCard;