import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncCharactersDetails, getSelectedCharacterDetails, removeCharacterDetails, fetchAsyncQuotes, getSelectedCharacterQuotes } from '../../Features/characters/characterSlice';

const CharacterDetail = () => {

    const { char_id } = useParams();
    const dispatch = useDispatch();
    const data = useSelector(getSelectedCharacterDetails);
    const dataQuotes = useSelector(getSelectedCharacterQuotes);
    const [randomQuote, setRandomQuote] = useState('No quotes Found');
    const [characterName, setCharacterName] = useState('');

    useEffect(() => {
        dispatch(fetchAsyncCharactersDetails(char_id));
        return () => {
            dispatch(removeCharacterDetails());
        }
    }, [dispatch, char_id])

    useEffect(() => {
        if (Object.keys(data).length === 0) {
            return
        }
        else {
            let cName = data[0].name;
            cName = cName.replace(/ /g, '+');
            setCharacterName(cName);
            dispatch(fetchAsyncQuotes(cName));
        }
    }, [dispatch, data])

    useEffect(() => {
        if (Object.keys(dataQuotes).length === 0) {
            setRandomQuote('No quotes found');
            return
        }
        else {
            setRandomQuote(dataQuotes[0].quote);
        }
    }, [dispatch, dataQuotes])

    function handleClick(e) {
        e.preventDefault();
        dispatch(fetchAsyncQuotes(characterName));
        {
            Object.keys(dataQuotes).length === 0 ? (
                setRandomQuote('No quotes found')
            ) : (setRandomQuote(dataQuotes[0].quote));
        }
    }

    function handleQuote(e) {
        e.preventDefault();
        console.log("Handle Quote");
    }

    return (
        <section className="container my-24 px-6 mx-auto">
            {Object.keys(data).length === 0 ? (
                <div>...Loading</div>
            ) : (
                <>
                    <div className="mb-20 text-gray-800 text-center md:text-left">

                        <div className="block rounded-lg shadow-lg bg-white">
                            <div className="flex flex-wrap items-center">
                                <div className="grow-0 shrink-0 basis-auto block lg:flex w-full lg:w-6/12 xl:w-4/12">
                                    <img src={data[0].img} alt="character"
                                        className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
                                </div>
                                <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
                                    <div className="px-6 py-12 md:px-8">
                                        {(data[0].name) &&
                                            <h2 className="text-3xl font-bold mb-2 text-green-600">
                                                {data[0].name}
                                            </h2>
                                        }
                                        {(data[0].nickname) &&
                                            <p className="font-semibold mb-4">
                                                {data[0].nickname}
                                            </p>
                                        }
                                        {data[0].occupation.length > 0 &&
                                            <p className="text-gray-500 mb-6">
                                                {data[0].occupation.map((occupation, index) => {
                                                    return (
                                                        <span key={index}>{occupation}</span>
                                                    )
                                                })}
                                            </p>
                                        }
                                        {(data[0].birthday) &&
                                            <p className="font-semibold mb-4">
                                                {data[0].birthday}
                                            </p>
                                        }
                                        {(data[0].status) &&
                                            <p className="font-semibold mb-4">
                                                {data[0].status}
                                            </p>
                                        }
                                        {(data[0].portrayed) &&
                                            <p className="font-semibold mb-4">
                                                {data[0].portrayed}
                                            </p>
                                        }
                                        {(data[0].category) &&
                                            <p className="font-semibold mb-4">
                                                {data[0].category}
                                            </p>
                                        }
                                        {data[0].appearance.length > 0 &&
                                            <p className="text-gray-500 mb-6">
                                                {data[0].appearance.map((appearance, index) => {
                                                    return (
                                                        <span key={index}>{appearance}</span>
                                                    )
                                                })}
                                            </p>
                                        }
                                        {data[0].better_call_saul_appearance.length > 0 &&
                                            <p className="text-gray-500 mb-6">
                                                {data[0].better_call_saul_appearance.map((better_call_saul_appearance, index) => {
                                                    return (
                                                        <span key={index}>{better_call_saul_appearance}</span>
                                                    )
                                                })}
                                            </p>
                                        }
                                        {{ randomQuote } &&
                                            <p className="font-semibold mb-4">
                                                {randomQuote}
                                            </p>
                                        }
                                        <button type="button" onClick={handleClick} className="focus:outline-none text-white bg-green-700 hover:bg-green-80 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Click For Random Quotes From {data[0].name}</button>
                                        <div>
                                            <div className="mb-3 xl:w-96">
                                                <textarea
                                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
                                                    rows="3"
                                                    placeholder="Enter a quote for this character"
                                                ></textarea>
                                            </div>
                                            <button type="button" onClick={handleQuote} className="focus:outline-none text-white bg-green-700 hover:bg-green-80 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Submit Quote</button>
                                        </div>
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
