import React from 'react'
import Styles from '../styles/Header.module.css'

export default function Header() {
  return (
    <header className={Styles.header}>
        <p className={Styles.link}>Accueil</p>
        <p className={Styles.link}>A propos </p>
        <p className={Styles.link}>Magasin</p>
        <p className={Styles.link}>Galerie Psyduck</p>
        <p className={Styles.link}>Pokemon</p>
        <p className={Styles.link}>Contact</p>
    </header>
  )
}
