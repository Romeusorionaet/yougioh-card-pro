'use client'

import { AiOutlineArrowDown } from 'react-icons/ai'
import Image from 'next/image'
import EyeBall from '../../../public/eyeball.png'
import CardMolduraSearch from '../../../public/molduraCardForSearchBottom.png'

import { Chat } from './Chat'
import { PaginationCards } from './PaginationCards'
import { api } from '../services/api'

import { useRouter } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'

import { RingLoader } from 'react-spinners'

interface CardDetailsProps {
  name: string
  img: string
  _id: string
}

export function Main() {
  const [loading, setLoading] = useState(true)

  const [search, setSearch] = useState<string>('')
  const listaRef = useRef<HTMLDivElement>(null)
  const [valueToScroll, setValueToScroll] = useState<boolean>(false)

  const [card, setCard] = useState<[]>([])
  const [itemsPerPage] = useState<number>(50)
  const [currentPage, setCurrentPage] = useState<number>(() => {
    const currentPageSaved =
      typeof window !== 'undefined'
        ? localStorage.getItem('@yougiohLocalCurrentPage')
        : 0
    return Number(currentPageSaved)
  })

  const { push } = useRouter()
  const [cardDetails, setCardDetails] = useState<CardDetailsProps>({
    name: '',
    img: '',
    _id: '',
  })

  const pages = Math.ceil(card.length / itemsPerPage)

  const startIndex = currentPage * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentItems = card.slice(startIndex, endIndex)

  useEffect(() => {
    async function searchCard() {
      await api
        .get(`/posts?title=${search}`)
        .then((response) => setCard(response.data))
        .catch((err) => console.log(err))
    }
    searchCard()
  }, [search])

  useEffect(() => {
    setValueToScroll(false)

    function handleResetScroll() {
      if (listaRef.current) {
        return (listaRef.current.scrollTop = 0)
      }
    }

    handleResetScroll()
  }, [valueToScroll])

  const handleCardDetails = async (id: string, value: boolean) => {
    await api
      .get(`/posts/${id}`)
      .then((response) => setCardDetails(response.data))
      .catch((err) => console.log(err))

    if (window.innerWidth <= 800) {
      return push(`/Details/${id}`)
    } else if (value === true) {
      return push(`/Details/${id}`)
    }
  }

  useEffect(() => {
    if (currentItems.length === 0) {
      setLoading(true)
    } else {
      setLoading(false)
    }
  }, [currentItems])

  return (
    <main>
      <div className="flex justify-center py-20 bg-gradient-to-b from-slate-900 via-orange-300 to-black">
        <Image
          className="w-5 h-5 tablet:w-10 tablet:h-10"
          src={EyeBall}
          alt="background ball eyes yougioh"
        />
      </div>

      <section
        className="pb-10 max-w-screen overflow-auto scrollbar 
          bg-gradient-to-b from-black to-slate-900 max-MineMobile:text-xs"
      >
        <div className="">
          <div>
            <Chat text="Bem vindo! Este site é dedicado a Yu-Gi-Oh." />
          </div>

          <div className="text-end" dir="rtl">
            <Chat text="?O que posso explorar" />
          </div>

          <div>
            <Chat
              text="Este site apresenta um extenso catálogo de cartas do jogo. 
                Os usuários podem explorar todas as cartas disponíveis e, ao 
                clicar em cada uma delas, têm acesso a mais detalhes e 
                informações específicas sobre cada carta."
            />
          </div>

          <div>
            <Chat
              text="Logo na seção a seguir se encontra todas as cartas disponíveis
                ou se preferir, pesquise pelo nome por alguma carta (específico) e ao clicar, podendo visualizar
                com mais detalhes a carta selecionada. A pesquisa pelo nome deve ser feito em inglês."
            />
          </div>
        </div>
      </section>

      <section className="tablet:flex bgCards overflow-hidden bg-gradient-to-b from-black to-slate-900 border-t-8 border-cyan-900 h-44">
        <div className="relative max-tablet:h-20 flex flex-col gap-4 px-4 items-center justify-center bg-gradient-to-t from-cyan-600">
          <div className="w-20 h-10 px-2 flex flex-col justify-center items-center gap-5">
            {(cardDetails && cardDetails.name === '') ||
            window.innerWidth <= 800 ? (
              <p className="text-gray-200"> Choose a card </p>
            ) : (
              <div onClick={() => handleCardDetails(cardDetails._id, true)}>
                <Image
                  width="300"
                  height="0"
                  src={`${api.defaults.baseURL}/posts/${cardDetails.img}`}
                  alt={`Card ${cardDetails.name}`}
                />
              </div>
            )}

            <div className="relative">
              <Image
                className="w-15 rounded-lg"
                placeholder="empty"
                src={CardMolduraSearch}
                alt="Moldura yougioh search"
              />
              <input
                className="text-black border-none absolute left-2 top-3 w-14 h-2 bg-green-300 pl-2"
                placeholder="search for a card"
                value={search}
                type="search"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          <div className="absolute bottom-4">
            <div className="flex flex-col items-center tablet:w-22">
              {pages === 1 ? (
                <AiOutlineArrowDown className="animate-bounce" />
              ) : (
                ''
              )}
              <PaginationCards
                setCurrentPage={setCurrentPage}
                pages={pages}
                setValueToScroll={setValueToScroll}
                currentPage={currentPage}
              />
            </div>
          </div>
        </div>

        <div
          ref={listaRef}
          className="flex gap-2 flex-wrap justify-center items-center tablet:p-5 py-1 h-22 tablet:h-full overflow-auto scrollbar"
        >
          {currentItems.length !== 0 ? (
            currentItems.map((item: CardDetailsProps) => {
              return (
                <div
                  onClick={() => handleCardDetails(item._id, false)}
                  className="item flex flex-col"
                  key={item._id}
                >
                  <Image
                    className="w-auto h-auto"
                    width="120"
                    height="100"
                    src={`${api.defaults.baseURL}/posts/${item.img}`}
                    alt={item.name}
                  />
                </div>
              )
            })
          ) : (
            <RingLoader
              className="tablet:ml-44"
              size={60}
              color={'#ffffff'}
              loading={loading}
            />
          )}
        </div>
      </section>
    </main>
  )
}
