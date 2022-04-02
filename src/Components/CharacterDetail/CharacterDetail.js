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

    const [quote, setQuote] = useState("");
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        if (localStorage.getItem(char_id)) {
            const storedList = JSON.parse(localStorage.getItem(char_id));
            setQuotes(storedList);
        }
    }, [])

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

    const addQuote = (e) => {
        if (quote) {
            const newTask = { id: new Date().getTime().toString(), title: quote };
            setQuotes([...quotes, newTask]);
            localStorage.setItem(char_id, JSON.stringify([...quotes, newTask]));
            setQuote("");
        }
    };

    return (
        <section className="container mt-36 md:mt-28 px-4 mx-auto">
            {Object.keys(data).length === 0 ? (
                <div className="flex justify-center">
                    <svg role="status" className="mr-2 w-8 h-8 text-gray-100 animate-spin fill-green-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path>
                    </svg>
                </div>
            ) : (
                <>
                    <div className="text-gray-800 text-center md:text-left">
                        <div className="block rounded-lg shadow-lg bg-white">
                            <div className="flex flex-wrap items-start">
                                <div className="grow-0 shrink-0 basis-auto block lg:flex w-full lg:w-6/12 xl:w-4/12">
                                    <img src={data[0].img} alt="character"
                                        className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
                                </div>
                                <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
                                    <div className="px-6 py-12 md:px-6 md:py-6">
                                        {(data[0].name) &&
                                            <h2 className="text-3xl font-bold mb-2 text-green-600 text-center">
                                                {data[0].name}
                                            </h2>
                                        }
                                        <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                                            {(data[0].nickname) &&
                                                <div className="flex">
                                                    <table className="w-full">
                                                        <tr>
                                                            <td className="w-2/4 text-left"><strong>Nickname:</strong></td>
                                                            <td className="w-2/4 text-left">{data[0].nickname}</td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            }
                                            {(data[0].portrayed) &&
                                                <div className="flex">
                                                    <table className="w-full">
                                                        <tr>
                                                            <td className="w-2/4 text-left"><strong>Portrayed:</strong></td>
                                                            <td className="w-2/4 text-left">{data[0].portrayed}</td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            }
                                            {(data[0].category) &&
                                                <div className="flex">
                                                    <table className="w-full">
                                                        <tr>
                                                            <td className="w-2/4 text-left"><strong>Category:</strong></td>
                                                            <td className="w-2/4 text-left">{data[0].category}</td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            }
                                            {(data[0].birthday) &&
                                                <div className="flex">
                                                    <table className="w-full">
                                                        <tr>
                                                            <td className="w-2/4 text-left"><strong>Date of Birth:</strong></td>
                                                            <td className="w-2/4 text-left">{data[0].birthday}</td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            }
                                            {(data[0].status) &&
                                                <div className="flex">
                                                    <table className="w-full">
                                                        <tr>
                                                            <td className="w-2/4 text-left"><strong>Status:</strong></td>
                                                            <td className="w-2/4 text-left">{data[0].status}</td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            }
                                            {data[0].occupation.length > 0 &&
                                                <div className="flex">
                                                    <table className="w-full">
                                                        <tr>
                                                            <td className="w-2/4 text-left"><strong>Occupations:</strong></td>
                                                            <td className="w-2/4 text-left">
                                                                {data[0].occupation.map((occupation, index) => {
                                                                    return (
                                                                        <span key={index}><li>{occupation}</li></span>
                                                                    )
                                                                })}
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            }
                                            {data[0].appearance.length > 0 &&
                                                <div className="flex">
                                                    <table className="w-full">
                                                        <tr>
                                                            <td className="w-2/4 text-left"><strong>Breaking Bad Appearances:</strong></td>
                                                            <td className="w-2/4 text-left flex">
                                                                {data[0].appearance.map((appearance, index) => {
                                                                    return (
                                                                        <span key={index}>S{appearance}&nbsp;</span>
                                                                    )
                                                                })}
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            }
                                            {data[0].better_call_saul_appearance.length > 0 &&
                                                <div className="flex">
                                                    <table className="w-full">
                                                        <tr>
                                                            <td className="w-2/4 text-left"><strong>Better Call Saul Appearance:</strong></td>
                                                            <td className="w-2/4 text-left flex">
                                                                {data[0].better_call_saul_appearance.map((better_call_saul_appearance, index) => {
                                                                    return (
                                                                        <span key={index}>S{better_call_saul_appearance}&nbsp;</span>
                                                                    )
                                                                })}
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            }
                                        </div>
                                        {{ randomQuote } &&
                                            <p className="font-semibold my-4">
                                                {randomQuote}
                                            </p>
                                        }
                                        <button type="button" onClick={handleClick} className="flex mx-auto focus:outline-none text-white bg-green-700 hover:bg-green-80 font-medium rounded-lg text-sm px-5 py-2.5 mb-4">Click For Random Quotes From {data[0].name}</button>
                                        {quotes.map((quote) => (
                                            <React.Fragment key={quote.id}>
                                                <p className="font-semibold my-4"><li>{quote.title} </li></p>
                                            </React.Fragment>
                                        ))}
                                        <div>
                                            <div className="mb-3 md:w-full">
                                                <textarea
                                                    className="form-control max-h-24 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
                                                    rows="3"
                                                    maxLength="160"
                                                    placeholder="Enter a quote for this character"
                                                    onChange={(e) => setQuote(e.target.value)}
                                                    value={quote}
                                                ></textarea>
                                            </div>
                                            <button type="button" onClick={addQuote} className="focus:outline-none text-white bg-green-700 hover:bg-green-80 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Submit Quote</button>
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
