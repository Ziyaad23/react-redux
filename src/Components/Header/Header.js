import React from 'react';
import Heisenberg from '../../Images/Heisenberg.svg';

const Header = () => {
    return (
        <nav className="bg-gray-800 p-2 mt-0 fixed w-full top-0 z-20">
            <div className="container mx-auto flex flex-wrap items-center">
                <div className="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
                    <a className="text-white no-underline hover:text-white hover:no-underline p-2 border-2 border-solid border-white" href="/">
                        <img src={Heisenberg} className="h-12 hover:animate-pulse" />
                    </a>
                </div>
                <div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
                    <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
                        <li className="mr-3">
                            <a className="inline-block py-2 px-4 text-white no-underline" href="/">Characters</a>
                        </li>
                        <li className="mr-3">
                            <a className="inline-block py-2 px-4 text-white no-underline" href="/death_generator">Death Generator</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;