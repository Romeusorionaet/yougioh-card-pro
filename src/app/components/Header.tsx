import Image from 'next/image'
import DragonLogo from '../../../public/imgHeader/DragonLogo.png';

export function Header() {
    return(
        <header 
        className="
        flex flex-col items-center justify-center gap-1
         pt-28 bg-slate-900 
        ">
        
            <Image
            className='border border-orange-300 rounded-full'
            width='300'
            height='100'
            placeholder = 'empty'
            priority={true}
            src={DragonLogo}
            alt='Dragon blue'
            />

            <div 
            className="bg-bottom bg-no-repeat h-5 w-15 bg-contain bg-blue-900/20 rounded-e-full
            bg-[url('https://bit.ly/3ANfKOQ')]">
            </div>

      </header>
    )
}