import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncDeath, getSelectedCharacterDeath } from '../../Features/characters/characterSlice';

const DeathGenerator = () => {

    const dispatch = useDispatch();
    const data = useSelector(getSelectedCharacterDeath);

    useEffect(() => {
        dispatch(fetchAsyncDeath());
    }, [dispatch])

    function handleClick(e) {
        e.preventDefault();
        dispatch(fetchAsyncDeath());
    }

    return (
        <section className="mt-32 mb-5 px-6 mx-auto">
            {Object.keys(data).length === 0 ? (
                <div>...Loading</div>
            ) : (
                <>
                    <h1 className="text-5xl text-center p-6 font-bold">Death Generator</h1>
                    <div className="flex justify-center max-w-5xl m-auto items-center flex-col">
                        <div className="rounded-lg shadow-lg bg-white w-96 md:flex md:w-9/12">
                            <div className="md:w-4/12">
                                <img className="rounded-t-lg h-full md:h-80 w-full object-cover" src={data.img} alt="characters" />
                            </div>
                            <div className="p-6 md:w-8/12">
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
                        <div>
                            <button type="button" onClick={handleClick} className="focus:outline-none text-white bg-green-700 hover:bg-green-80 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mt-3">Random Death Generator</button>
                        </div>
                    </div>
                </>
            )
            }
        </section >
    );
};

export default DeathGenerator;