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
        <section className="mt-36 md:mt-32 mb-5 px-6 mx-auto">
            {Object.keys(data).length === 0 ? (
                <div className="flex justify-center">
                    <svg role="status" className="mr-2 w-8 h-8 text-gray-100 animate-spin fill-green-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path>
                    </svg>
                </div>
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