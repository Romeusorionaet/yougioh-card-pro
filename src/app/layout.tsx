'use client'

import './styles/global.css';
import './styles/menuHeader.css';
import Link from 'next/link';
import Image from 'next/image';
import CardFaceDown from '../../public/imgHeader/YougiohCardFaceDown.jpg';
import blackHoleCard from '../../public/imgHeader/blackHoleCard.png';

import { useState, useEffect } from 'react';

// export const metadata = {
//   title: 'Yougioh-Card',
//   description: 'Create for to show the interesting world of Yougioh',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  const [widthScreen, setWidthScreen] = useState<number>();
  const [checkMenuMobile, setCheckMenuMobile] = useState<boolean>(false);

  useEffect(()=>{
    setWidthScreen(window.innerWidth) // for an initial value

    window.onresize = () => { 
      setWidthScreen(window.innerWidth) 
  
      if(widthScreen){
        if(widthScreen >= 800){
          setCheckMenuMobile(true)
        }else{
          setCheckMenuMobile(false)
        }
      }
    } 
  },[widthScreen])

  const handleChangeValue = () => {
    if(checkMenuMobile === true){
      setCheckMenuMobile(false)
    }else{
      setCheckMenuMobile(true)
    }
  }

  return (
    <html lang="en">
      <body>

        <nav 
        className='fixed'>

          <div className='relative w-screen'>
            <input 
            className='h-4 w-4 absolute right-6 top-6 z-20 opacity-0'
            type='checkbox'
            onClick={handleChangeValue}
            />
          </div>

          {widthScreen && 
          <div className='flex justify-end pt-5'>
            <div className={widthScreen >= 800 ? 'hidden' : 'CARD-MENU-BLACK-HOLE'}>
              {checkMenuMobile === false ?
                <Image 
                width='50'
                height='50'
                className='ease-in duration-500 animate-pulse-slow '
                src={CardFaceDown}
                alt='Yougioh card facing down'
                />
              :
                <Image
                width='50'
                height='50'
                className=' shadow-xl shadow-cyan-900/100 ease-in duration-500'
                src={blackHoleCard}
                alt='Yougioh card black hole'
                />}
            </div>
        
            <ul 
            className={
              (widthScreen >= 800 || checkMenuMobile === true) ? 
              widthScreen >= 800 ? 'STYLE-NAV-DESKTOP' : 'STYLE-NAV-MOBILE'
              : 
              'hidden'
              }>
              <li><Link href='#'>Home</Link></li>
              <li><Link href='#'>Deck</Link></li>
              <li><Link href='#'>About</Link></li>
            </ul>
          </div>}
        </nav>
        {children}
      </body>
    </html>
  )
}