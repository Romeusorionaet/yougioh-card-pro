'use client';

import { useEffect, useState } from "react";
import { api } from '../../services/api';
import Image from 'next/image';
import Link from "next/link";

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
    attribute: string;
    level: number;
    scale: number;

    atk: number;
    def: number;

    card_sets?: [set_rarity: string];
}

export default function Details({ params }: DetailsProps) {
    const [cardDetails, setCardDetails] = useState<CardDetailsProps>({name: "", img: ""})
    const nameImgFormatted = cardDetails.name.replace(/\.jpg$/, '');
    const [cardInfo, setCardInfo] = useState<CardInfoProps>();

    useEffect(()=>{
        async function handleCard() {
          if(!cardInfo){
            await api.get(`/posts/${params.id}`)
            .then(response => setCardDetails(response.data))
            .catch(err => console.log(err));
          }
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
        <div className="bg-slate-900 max-tablet:pt-22 pt-28 min-h-screen flex items-center justify-center">

            {cardInfo && 
              cardInfo.map(card =>{
                return(
                  <div className="pb-1 tablet:flex relative" key={String(card.id)}>
                    <Link 
                    href="/"
                    className="absolute -top-10 left-2">Voltar
                    </Link>

                    <div className="tablet:w-28 h-34">
                    {cardDetails.img &&
                      <Image 
                      priority
                      className="p-2 h-full w-full"
                      width='300'
                      height='100'
                      src={`${api.defaults.baseURL}/posts/${cardDetails.img}`} 
                      alt={`Card ${cardDetails.name}`} 
                      />
                      }
                    </div>

                    <div className="leading-relaxed pt-2 flex flex-col gap-5 justify-evenly bg-gradient-to-t from-slate-800 px-4 rounded-xl max-w-xl ">
                      <h1 className="text-3xl text-center">{card.name}</h1>
                      <p className="text-xl">{card.desc}</p>
                   
                      <ul className="cardTags space-y-2 bg-slate-900 p-2 rounded-sm">
                        {card.archetype ? <li> Archetype: <span>{card.archetype}</span></li> : ""}
                        {card.frameType ? <li> FrameType: <span>{card.frameType}</span></li> : ""}
                        {card.race ? <li> Race: <span>{card.race}</span></li> : ""}
                        {card.type ? <li> Type: <span>{card.type}</span></li> : ""}
                        {card.atk ? <li> Atk: <span>{card.atk}</span></li> : ""}
                        {card.def ? <li> Def: <span>{card.def}</span></li> : ""}
                        {card.level ? <li> Level: <span>{card.level}</span></li> : ""}
                        {card.scale ? <li> Scale: <span>{card.scale}</span></li> : ""}
                        {card.attribute ? <li> Attribute: <span>{card.attribute}</span></li> : ""}
                        {card.card_sets ? <li> Rarity: <span>{card.card_sets[0].set_rarity}</span></li> : ""}
                      </ul>
                    </div>

                  </div>
                )
              })
            }
        </div>
    )
}