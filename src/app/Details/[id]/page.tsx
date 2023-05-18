'use client';

import { useEffect, useState } from "react";
import { api } from '../../services/api';
import Image from 'next/image';

interface DetailsProps {
    params: {
        id: string;
    }
}

interface CardDetailsProps {
    name: string;
    img: string;
}

interface CardInfoProps {
    map(arg0: (item: any) => import("react").JSX.Element): import("react").ReactNode;
    id: number;
    archetype: string;
    desc: string;
    frameType: string;
    name: string;
    race: string;
    type: string;

    card_sets: string[];
    card_images: string[];
    card_prices: string[];
}

export default function Details({ params }: DetailsProps) {
    const [cardDetails, setCardDetails] = useState<CardDetailsProps>({name: "", img: ""})
    const nameImgFormatted = cardDetails.name.replace(/\.jpg$/, '');
    const [cardInfo, setCardInfo] = useState<CardInfoProps>();

    useEffect(()=>{
        async function handleCard() {
          await api.get(`/posts/${params.id}`)
          .then(response => setCardDetails(response.data))
          .catch(err => console.log(err));
        }
        handleCard();
    });

    useEffect(() => {
        async function fetchAboutCard() {
          await fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${nameImgFormatted}`)
          .then( async response => { 
            const data = await response.json() 
            setCardInfo(data.data);
          })
          .catch( err => console.log('An error has occurred:', err) )
        }

        if(nameImgFormatted){
          fetchAboutCard();
        }

      },[nameImgFormatted]);

    return(
        <div className="bg-slate-900 h-full">
            {/* <h1>{nameImgFormatted}</h1>
            <hr/>
            <h1>Product: {params.id}</h1> */}
            {cardInfo && 
            cardInfo.map((card)=>{
              return(
                <div key={String(card.id)}>
                  <span>{card.desc}</span>
                </div>
              )
            })
            }

            {cardDetails.img &&
            <Image 
            width='300'
            height='100'
            src={`${api.defaults.baseURL}/posts/${cardDetails.img}`} 
            alt={`Card ${cardDetails.name}`} 
            />
            }
        </div>
    )
}