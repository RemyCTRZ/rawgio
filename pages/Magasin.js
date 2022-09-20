import React from 'react';
import { useState, useEffect } from 'react';
import Card from '../components/Card';
import Styles from '../styles/Magasin.module.css';
import GenresList from '../components/GenresList';

export default function Magasin({ setIdGenre, idGenre, setIdGame, idGame }) {

    const [allGames, setAllGames] = useState([]);

    const fetchAllGames = async () => {

        const GenreClick = idGenre == 0 ?
            await fetch("https://api.rawg.io/api/games?key=06731f222b1c40d4bbfd91e8cd035cf8") :
            await fetch("https://api.rawg.io/api/games?key=06731f222b1c40d4bbfd91e8cd035cf8&genres=" + idGenre);
        const allGames = await GenreClick.json();
        setAllGames(allGames.results);
    };

    useEffect(() => {
        fetchAllGames();
    }, [idGenre]);

    console.log(allGames)

    return (
        <>
            <div className={Styles.left_side}>
                <GenresList setIdGenre={setIdGenre} />
            </div>
            <div className={Styles.right_side}>
                <h1 className={Styles.title}>Liste de jeux</h1>
                <section className={Styles.gallery}>
                    <>
                        {
                            allGames.map((game, index) => (
                                <Card key={index} game={game} custom_i={index} setIdGame={setIdGame} idGame={idGame}/>
                            ))
                        }
                    </>
                </section>
            </div>
        </>
    )
}
