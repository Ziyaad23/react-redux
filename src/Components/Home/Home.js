import React, { useEffect } from 'react';
import CharacterListing from '../CharacterListing/CharacterListing';
import { useDispatch } from 'react-redux';
import { fetchAsyncCharacters } from '../../Features/characters/characterSlice';

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAsyncCharacters());
    }, [dispatch])

    return (
        <section className="my-28 px-6 mx-auto h-full">
            <h1 className="text-5xl text-center p-6 font-bold">Characters</h1>
            <CharacterListing />
        </section>
    );
};

export default Home;