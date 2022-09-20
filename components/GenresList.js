import React from 'react'
import Styles from '../styles/GenresList.module.css';
import GenreLink from './GenreLink';
import { useState, useEffect } from 'react';

export default function GenresList({ setIdGenre }) {

    const [allGenres, setAllGenres] = useState([]);

    const fetchAllGenres = async () => {
        const res = await fetch("https://api.rawg.io/api/genres?key=06731f222b1c40d4bbfd91e8cd035cf8");
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
