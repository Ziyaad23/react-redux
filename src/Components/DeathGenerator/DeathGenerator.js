import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncDeath, getSelectedCharacterDeath } from '../../Features/characters/characterSlice';

const DeathGenerator = () => {

    const dispatch = useDispatch();
    const data = useSelector(getSelectedCharacterDeath);

    useEffect(() => {
        dispatch(fetchAsyncDeath());
        console.log(data);
    }, [dispatch])



    return (
        <section className="my-28 px-6 mx-auto h-screen">
            {Object.keys(data).length === 0 ? (
                <div>...Loading</div>
            ) : (
                <>
                    <h1 className="text-5xl text-center p-8 font-bold">Death Generator</h1>
                    <div className="flex justify-center">
                        <div className="rounded-lg shadow-lg bg-white w-96">
                            <div>
                                <img className="rounded-t-lg h-full md:h-80 w-full object-cover" src={data.img} alt="characters" />
                            </div>
                            <div className="p-6 h-full">
                                {(data.death) &&
                                    <h2 className="text-gray-900 text-2xl font-medium mb-2">{data.death}</h2>
                                }
                                {(data.cause) &&
                                    <p className="text-gray-700 text-base mb-4">Cause : {data.cause}</p>
                                }
                                {(data.responsible) &&
                                    <p className="text-gray-700 text-base mb-4">Responsible : {data.responsible}</p>
                                }
                                {(data.last_words) &&
                                    <p className="text-gray-700 text-base mb-4">Last words : {data.last_words}</p>
                                }
                            </div>
                        </div>
                    </div>
                </>
            )
            }
        </section >
    );
};

export default DeathGenerator;