'use client'

import Image from 'next/image';
import DragonBlue from '../../public/imgHeader/DragonBlue.png';
import mage from '../../public/imgHeader/mage-bg.png';
import EyeBall from '../../public/eyeball.png';
import CardMolduraTop from '../../public/molduraCardTop.png';
import CardMolduraSearch from '../../public/molduraCardForSearchBottom.png';

import { Chat } from './components/Chat';
import { PaginationCards } from './components/PaginationCards';
import { api } from './services/api';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

interface CardDetailsProps {
  name: string;
  key: string;
  _id: string;
}

export default function Home() {
  const [search, setSearch] = useState<string>('')
  const listaRef = useRef<HTMLDivElement>(null);
  const [valueToScroll, setValueToScroll] = useState<boolean>(false);
  
  const [card, setCard] = useState<[]>([]);
  const [itemsPerPage] = useState<number>(50)
  const [currentPage, setCurrentPage] = useState<number>(0)

  const pages = Math.ceil(card.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = card.slice(startIndex, endIndex);

  useEffect(()=>{
    async function searchCard() {
      await api.get(`/posts?title=${search}`)
      .then(response => setCard(response.data))
      .catch(err => console.log(err))
    }
    searchCard();
  },[search]);

  useEffect(()=>{
    setCurrentPage(0)
  },[itemsPerPage]);

  useEffect(()=>{
    setValueToScroll(false)

    function handleResetScroll(){
      if(listaRef.current){
        return listaRef.current.scrollTop = 0;
      }
    };

    handleResetScroll()
  },[valueToScroll])


  ///////////////////////////////////////////////
  const { push } = useRouter();
  const [cardDetails, setCardDetails] = useState<CardDetailsProps>({
    name: "", 
    key: "",
    _id: "",
  })

  const handleCardDetails = async (id: string, value: boolean) => {
    await api.get(`/posts/${id}`)
    .then(response => setCardDetails(response.data))
    .catch(err => console.log(err));

    if( window.innerWidth <= 800){

      return push(`/Details/${id}`);
    }else if(value === true){

      return push(`/Details/${id}`);
    }
  }

  return (
    <div>
      <header 
      className="
      flex flex-col items-center justify-center gap-1
      h-screen bg-center bg-no-repeat pt-20 tablet:bg-[url('https://bit.ly/40Vo6i0')] bg-slate-900
      ">
       
        <Image
        width='300'
        height='100'
        placeholder = 'empty'
        priority={true}
        src={DragonBlue}
        alt='Dragon blue'
        />

        <div 
        className="bg-bottom bg-no-repeat h-5 w-15 bg-contain bg-blue-900/20 rounded-e-full
        bg-[url('https://bit.ly/3ANfKOQ')]">
        </div>

          <div 
          className='w-full absolute bottom-0 flex justify-end max-tablet:hidden'>
            <Image
            width='200'
            height='100'
            placeholder = 'empty'
            src={mage}
            alt='mage'
            />
          </div>
        
      </header>

      <main>

        <div className='flex justify-center py-20 bg-gradient-to-b from-slate-900 to-black'>
          <Image
          width='120'
          height='100'
          placeholder = 'empty'
          src={EyeBall}
          alt='background ball eyes yougioh'
          />
        </div>

        <section 
        className="max-w-screen h-screen overflow-auto scrollbar 
        bg-gradient-to-b from-black via-cyan-900 to-black pb-4
        ">

          <div className='text-end' dir='rtl'>
            <Chat 
              text='START quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente 
              quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.
              START quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente 
              quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.
              START quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente 
              quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker'
            />
          </div>

          <div>
            <Chat 
              text='START quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente 
              quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.'
            />
          </div>

          <div className='text-end' dir='rtl'>
            <Chat 
              text='START quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente 
              quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.
              START quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente 
              quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.
              START quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente 
              quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker'
            />
          </div>

          <div>
            <Chat 
              text='START quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente 
              quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker
              e editoração eletrônica como Aldus PageMaker.
              START quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente 
              quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.'
            />
          </div>

        </section>

        <section className='tablet:flex overflow-hidden bg-gradient-to-b from-black to-slate-900 border-t-8 border-cyan-900 h-44'>

              <div className='flex flex-col gap-4 py-2 items-center justify-between bg-gradient-to-t from-cyan-900 tablet:w-30'>
                <ul 
                className='flex gap-5 flex-wrap justify-center'>
                  <li><p>Dragons</p></li>
                  <li><p>Dragodgns</p></li>
                  <li><p>Dragons</p></li>
                  <li><p>Drans</p></li>
                  <li><p>Dsergragons</p></li>
                  <li><p>Dragons</p></li>
                </ul>

                <div 
                className='w-20 h-10 px-2 flex flex-col justify-center items-center gap-5'>

                  {cardDetails &&
                  (cardDetails.name === '') || (window.innerWidth <= 800) ?
                  <p className='text-gray-400'> Choose an image </p>
                  :
                  <div onClick={()=>handleCardDetails(cardDetails._id, true)}>
                    <Image 
                    width='300'
                    height='0'
                    src={`${api.defaults.baseURL}/posts/${cardDetails.key}`} 
                    alt={`Card ${cardDetails.name}`} 
                    />
                  </div>
                  }

                  <div className='relative'>
                    <Image 
                    className='w-15 rounded-lg'
                    placeholder = 'empty'
                    src={CardMolduraSearch}
                    alt='Moldura yougioh search'
                    />
                    <input 
                    className='text-black border-none absolute left-2 top-3 w-14 h-2 bg-green-300 pl-2'
                    placeholder='search for a card'
                    type='search' 
                    onChange={(e)=>setSearch(e.target.value)} 
                    />
                  </div>
                </div>

                <div>
                  <PaginationCards 
                  setCurrentPage={setCurrentPage}
                  pages={pages}
                  setValueToScroll={setValueToScroll}
                  />
                </div>
              </div>

            <div 
            ref={listaRef}
            className='flex gap-2 flex-wrap justify-center tablet:p-5 py-1 h-25 tablet:h-full overflow-auto scrollbar'>

                  {currentItems &&
                    currentItems.map((item: any, index: number)=>{
                      return(
                        <div
                        onClick={()=>handleCardDetails(item._id, false)}
                        className='item flex flex-col' 
                        key={String(index)}>

                          <Image width='150' height='100' 
                          placeholder = 'empty'
                          src={`${api.defaults.baseURL}/posts/${item.key}`} alt='card' />
                        </div>
                      )
                  })}

            </div>

        </section>

      </main>

      <footer className='bg-gradient-to-b from-black to-slate-900 border-t-8 border-cyan-900 h-10'>
      </footer>
     
    </div>
  )
}

    
    