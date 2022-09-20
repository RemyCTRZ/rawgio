import React, { useState } from 'react'
import { useEffect } from 'react';

export default function GameInfo({ idGame }) {

    const [gameInfos, setGameInfos] = useState({});

    async function test(idGame) {
        // const res = await fetch("https://api.rawg.io/api/games/" + idGame + "?key=06731f222b1c40d4bbfd91e8cd035cf8");
        // const gameInfo = await res.json();
        // setGameInfos(gameInfo);
    }

    //Créer une condition: si cliqué boolean à changer (display)

    useEffect(() => {
        test(idGame);
    }), [];

    return (
        <div>
            {idGame}
        </div>
    )
}
