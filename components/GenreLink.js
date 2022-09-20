import Link from 'next/link'
import React from 'react'

export default function GenreLink({genre, setIdGenre}) {
    return (
        <>
            <li onClick={() => setIdGenre(genre.id)}>{genre.name}</li>
        </>
    )
}
