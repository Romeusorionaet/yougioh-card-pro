'use client'

import { useState, useEffect } from "react";

import fs from "fs"
import path from 'path'

export function Deck() {
    // const [deck, setDeck] = useState({});
    // const [data, setData] = useState('');

    // useEffect(()=>{
    //     async function teste(){
    //         const filePath = path.resolve('./card_info.json')
    //         //const rawData = fs.readFileSync(filePath);
    //         const response = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php', {
    //             // next: {
    //             //   revalidate: 30,
    //             // }
    //             cache: 'no-store',
    //         })
    //         const cards = await response.json()
    //         setDeck(cards)
    //         //setData(JSON.stringify(rawData))
    //         setData(filePath)
    //         console.log(data)
    //     }
    //     teste()
    // })

    return (
        <div>
            <p>deck</p>
            {/* <pre>{JSON.stringify(deck, null, 2)}</pre> */}
        </div>
      )
}