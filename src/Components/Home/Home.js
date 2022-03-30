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
        <section className="mt-28 md:mt-24">
            <h1 className="text-5xl text-center p-8 font-bold">Characters</h1>
            <CharacterListing />
        </section>
    );
};

export default Home;