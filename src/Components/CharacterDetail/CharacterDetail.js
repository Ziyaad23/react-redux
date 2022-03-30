import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncCharactersDetails, getSelectedCharacterDetails, removeCharacterDetails } from '../../Features/characters/characterSlice';

const CharacterDetail = () => {

    const { char_id } = useParams();
    const dispatch = useDispatch();
    const data = useSelector(getSelectedCharacterDetails);
    console.log(data);

    useEffect(() => {
        dispatch(fetchAsyncCharactersDetails(char_id));
        return () => {
            dispatch(removeCharacterDetails());
        }
    }, [dispatch, char_id])

    return (
        <section className="container my-24 px-6 mx-auto">
            {Object.keys(data).length === 0 ? (
                <div>...Loading</div>
            ) : (
                <>
                    <div className="mb-32 text-gray-800 text-center md:text-left">

                        <div className="block rounded-lg shadow-lg bg-white">
                            <div className="flex flex-wrap items-center">
                                <div className="grow-0 shrink-0 basis-auto block lg:flex w-full lg:w-6/12 xl:w-4/12">
                                    <img src={data[0].img} alt="Trendy Pants and Shoes"
                                        className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
                                </div>
                                <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
                                    <div className="px-6 py-12 md:px-12">
                                        <h2 className="text-3xl font-bold mb-2 text-green-600">{data[0].name}</h2>
                                        <p className="font-semibold mb-4">{data[0].nickname}</p>
                                        <p className="text-gray-500 mb-6">
                                            Occupations
                                        </p>
                                        <p className="text-gray-500 mb-6">
                                            Birthday
                                        </p>
                                        <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Random Quotes From Character</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </section>
    );
};

export default CharacterDetail;
