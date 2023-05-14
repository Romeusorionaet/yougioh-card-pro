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

    return(
        <>
            <h1 className="text-black">Product: {params.id}</h1>
            <Image 
            width='300'
            height='100'
            src={`${api.defaults.baseURL}/posts/${cardDetails.key}`} 
            alt={`Card ${cardDetails.name}`} 
            />
        </>
    )
}