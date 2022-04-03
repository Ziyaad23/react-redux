import React, { useEffect, useState } from 'react';
import CharacterListing from '../CharacterListing/CharacterListing';
import { useDispatch } from 'react-redux';
import { fetchAsyncCharacters } from '../../Features/characters/characterSlice';
import Footer from '../Footer/Footer';

const Home = () => {
    const dispatch = useDispatch();
    const [limit, setLimit] = useState(10);

    const ScrollToEnd = () => {
        setLimit(limit + 5);
    }

    useEffect(() => {
        if (limit <= 65) {
            dispatch(fetchAsyncCharacters(limit));
        }
    }, [dispatch, limit])

    window.onscroll = function () {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
            ScrollToEnd();
        }
    }

    return (
        <section className="my-28 px-6 mx-auto h-full">
            <h1 className="text-5xl text-center p-6 font-bold">Characters</h1>
            <CharacterListing />
            <Footer />
        </section>
    );
};

export default Home;