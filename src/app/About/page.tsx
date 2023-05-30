/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import yougiohCapa from '../../../public/yougiohCapa.jpg'
import exodia from '../../../public/exodia-bg.png'
import mage from '../../../public/mage-bg.png'

export default function About() {
    return(
        <div className='relative bg-slate-900 flex flex-col items-center'>
            <div className='max-h-15 tablet:h-screen'>
                <Image
                className='tablet:h-full opacity-[.4]'
                src={yougiohCapa}
                alt='Personagens do anime yougioh'
                />
            </div>

            <div className='tablet:absolute tablet:top-24 text-white p-5 pb-40 space-y-5 tablet:max-w-6xl relative'>
                <p>
                    Yu-Gi-Oh! é uma franquia japonesa que engloba um anime, mangá e 
                    jogo de cartas colecionáveis. Foi criada por Kazuki Takahashi e 
                    estreou inicialmente como mangá na revista Shonen Jump em 1996. 
                    Desde então, a franquia expandiu-se enormemente, ganhando 
                    popularidade em todo o mundo.
                </p>

                <p>
                    Mangá: <br/>
                    O mangá original de Yu-Gi-Oh! segue a história de Yugi Mutou, 
                    um jovem estudante que, inicialmente, é introvertido e 
                    frequentemente alvo de bullying. Yugi resolve um antigo 
                    enigma do "Quebra-Cabeça do Milênio", que pertencia ao 
                    Faraó do Antigo Egito. Quando ele completa o quebra-cabeça, 
                    o espírito do Faraó é despertado e habita o corpo de Yugi 
                    em momentos de jogos desafiadores.
                    A história do mangá gira em torno de Yugi e seus amigos 
                    enfrentando diversos jogos de vida ou morte, nos quais o 
                    espírito do Faraó assume o controle para garantir a vitória. 
                    A trama explora temas de amizade, coragem, autoconfiança e o 
                    poder dos jogos como forma de superar desafios.
                </p>

                <p>
                    Anime: <br/>
                    O anime de Yu-Gi-Oh! foi lançado em 2000 e é baseado no mangá 
                    original. O enredo se desenvolve de forma semelhante, seguindo 
                    as aventuras de Yugi Mutou e seus amigos. O anime se divide em 
                    várias séries, cada uma com uma história distinta, mas todas 
                    centradas no jogo de cartas chamado "Duel Monsters".
                    A série original, chamada de "Yu-Gi-Oh! Duel Monsters", é a 
                    mais conhecida e popular. Ela apresenta duelos entre 
                    personagens usando cartas mágicas, armadilhas e monstros 
                    invocados para derrotar seus oponentes. Com o tempo, a franquia 
                    Yu-Gi-Oh! expandiu-se com novas séries como "Yu-Gi-Oh! GX", 
                    "Yu-Gi-Oh! 5D's", "Yu-Gi-Oh! Zexal", "Yu-Gi-Oh! Arc-V" e 
                    "Yu-Gi-Oh! VRAINS", cada uma com suas próprias histórias e 
                    personagens, mas mantendo o elemento central dos duelos de 
                    cartas.
                </p>

                <p>
                    Jogo de cartas: <br/>
                    O jogo de cartas colecionáveis de Yu-Gi-Oh! é um dos aspectos 
                    mais populares da franquia. Baseado nos duelos de cartas vistos 
                    no anime e no mangá, o jogo permite que os jogadores construam 
                    seus próprios decks e desafiem uns aos outros. O objetivo 
                    principal é reduzir os Pontos de Vida do oponente a zero, 
                    usando monstros, magias e armadilhas.
                    Cada jogador possui um deck composto por cartas de monstros, 
                    cartas de magia e cartas de armadilha. Os monstros são usados 
                    para atacar e defender, enquanto as cartas de magia e armadilha 
                    possuem efeitos especiais que podem alterar o curso do jogo. 
                    Existem várias regras complexas e estratégias envolvidas no 
                    jogo, tornando-o desafiador e competitivo.
                    Ao longo dos anos, o jogo de cartas Yu-Gi-Oh! passou por 
                    diversas expansões, lançando novas cartas.
                </p>

                <Image 
                className='w-5 absolute left-5 bottom-0'
                src={exodia}
                alt='Exodia'
                />    
                    
                <Image 
                className='w-5 absolute right-5 bottom-0'
                src={mage}
                alt='Mage'
                />
            </div>
        </div>
    )
}