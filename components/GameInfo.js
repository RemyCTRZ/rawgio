import React, { useState, useEffect } from 'react'
import Styles from '../styles/GameInfo.module.css'
import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';

export default function GameInfo({ idGame, setIdGame }) {

    const [gameInfo, setGameInfo] = useState({});


    useEffect(() => {
        takeGame();
    }, []);

    async function takeGame() {
        const res = await fetch("https://api.rawg.io/api/games/" + idGame + "?key=9943bbe07108462187f0614ab2052a21");
        const all = await res.json();
        console.log(all);
        setGameInfo(all);
    }

    return (
        <section className={Styles.section} style={{ '--bg': "url(" + gameInfo.background_image + ")" }}>
            <h2 className={Styles.title}>{gameInfo.name}</h2>
            <button className={Styles.button} onClick={() => { setIdGame(0)}}>Retour</button>
            <div className={Styles.container}>
                <article className={Styles.top}>
                    <div className={Styles.img_box}>
                        <Image className={Styles.image} src={gameInfo.background_image_additional} alt={gameInfo.name} height="1080" width="1920" />
                        <p className={Styles.rating}>  <AiFillStar /> {gameInfo.rating}</p>
                    </div>
                    <div className={Styles.genres_container}>
                        <p className={Styles.genres_title}>Genres</p>
                        {gameInfo.genres?.map((genre, index) => (
                            <p className={Styles.genres} key={index}>{genre.name}</p>
                        ))
                        }
                        <hr className={Styles.hr} />
                        <p className={Styles.dev_title}>Développé par</p>
                        {gameInfo.developers?.map((developer, index) => (
                            <p className={Styles.developer} key={index}>{developer.name}</p>
                        ))
                        }
                    </div>
                </article>
                <article className={Styles.bottom}>
                    <p className={Styles.description_title}>Description</p>
                    <p className={Styles.description}>{gameInfo.description_raw}</p>
                </article>
            </div>
        </section>
    )
}
