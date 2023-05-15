'use client';

import { useEffect, useState } from "react";
import { api } from '../../services/api';
import Image from 'next/image';

interface DetailsProps {
    params: {
        id: string;
    }
}

interface CardDetails {
    name: string;
    key: string;
}

export default function Details({ params }: DetailsProps) {
    const [cardDetails, setCardDetails] = useState<CardDetails>({name: "", key: ""})

    useEffect(()=>{
        async function handleCard() {
            await api.get(`/posts/${params.id}`)
            .then(response => setCardDetails(response.data))
            .catch(err => console.log(err));
        }
        handleCard();
    });

    const [teste, setTeste] = useState()

    useEffect(() => {
        const fetchAboutCard = async () => {
          try {
            const response = await fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?level=4&attribute=water&sort=atk`);
            if (response.ok) {
              const data = await response.json();
              setTeste(data);
            } else {
              console.log('Request failed. Status:', response.status);
            }
          } catch (error) {
            console.log('An error has occurred:', error);
          }
        };
    
        fetchAboutCard();
      },[]);

    //console.log(teste)

    return(
        <div className="bg-slate-900 h-full">
            <h1 className="">{cardDetails.name}</h1>
            {/* <h1 className="text-black">Product: {params.id}</h1>
            <Image 
            width='300'
            height='100'
            src={`${api.defaults.baseURL}/posts/${cardDetails.key}`} 
            alt={`Card ${cardDetails.name}`} 
            /> */}
        </div>
    )
}