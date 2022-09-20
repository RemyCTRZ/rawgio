import React from 'react'
import Image from 'next/image'
import Styles from '../styles/Card.module.css'
import { AiFillStar } from 'react-icons/ai'
import { useEffect } from 'react'

export default function Card({ game, custom_i, setIdGame }) {


    return (
        <div className={Styles.card} style={{ '--i': custom_i }} onClick={() => setIdGame(game.id)}>
            <Image className={Styles.image} src={game.background_image} alt={game.name} width="300px" height="200px" />
            <p className={Styles.rating}> <AiFillStar />{game.rating}</p>
            <div className={Styles.bottom}>
                <p className={Styles.title}>{game.name}</p>
                <p className={Styles.released}>Date de sortie : {game.released}</p>
                <div className={Styles.genres_container}> Genres :
                    {game.genres.map((genre, index) => (
                        <p className={Styles.genres} key={index}>{genre.name}</p>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}
