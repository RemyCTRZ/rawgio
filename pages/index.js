import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import GameInfo from '../components/GameInfo'
import styles from '../styles/Home.module.css'
import Magasin from './Magasin'

export default function Home() {

  const [idGenre, setIdGenre] = useState(0);
  const [idGame, setIdGame] = useState(1);

  console.log(idGame);

  return (
    <div className={styles.container}>
      <Head>
        <title>Rawgio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GameInfo idGame={idGame}/>

      {/* <main className={styles.main}>
        <Magasin setIdGenre={setIdGenre} idGenre={idGenre} setIdGame={setIdGame} />
      </main> */}

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
