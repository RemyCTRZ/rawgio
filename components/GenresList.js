import React from 'react'
import Styles from '../styles/GenresList.module.css';
import GenreLink from './GenreLink';
import { useState, useEffect } from 'react';

export default function GenresList({ setIdGenre }) {

    const [allGenres, setAllGenres] = useState([]);

    const fetchAllGenres = async () => {
        const res = await fetch("https://api.rawg.io/api/genres?key=9943bbe07108462187f0614ab2052a21");
        const allGenres = await res.json();
        setAllGenres(allGenres.results);
    };

    useEffect(() => {
        fetchAllGenres();
    }, []);

    console.log(allGenres)

    return (
        <ul className={Styles.genres_list}>
            <p className={Styles.genres_list_header}>Genres</p>
            {
                allGenres.map((genre, index) => (
                    <GenreLink key={index} genre={genre} setIdGenre={setIdGenre} />
                ))
            }
        </ul>
    )
}
