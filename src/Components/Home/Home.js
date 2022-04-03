import React, { useEffect, useState } from 'react';
import CharacterListing from '../CharacterListing/CharacterListing';
import { useDispatch } from 'react-redux';
import { fetchAsyncCharacters } from '../../Features/characters/characterSlice';
import Footer from '../Footer/Footer';

const Home = () => {
    const dispatch = useDispatch();
    // Page limit for infinity loading
    const [limit, setLimit] = useState(10);

    // Update limit when user scrolled to end of page
    const ScrollToEnd = () => {
        setLimit(limit + 5);
    }

    useEffect(() => {
        // Set limit for characters to fetch from API
        if (limit <= 65) {
            dispatch(fetchAsyncCharacters(limit));
        }
    }, [dispatch, limit])

    // Check if user has scrolled to end of page
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