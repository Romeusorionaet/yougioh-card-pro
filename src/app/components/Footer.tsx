
export function Footer() {
    return(
        <div 
      className='bg-gradient-to-b from-black to-slate-900 border-t-8 border-cyan-900 pb-10'>
        <nav 
        className='flex gap-10 justify-around p-2 border-double border-b-4 border-sky-900'>

          <div className='w-10'>
            <h3 className='mb-2'>Contacts</h3>
            <ul className='flex flex-col gap-2 text-gray-300'>
              <li><a href='https://www.linkedin.com/in/romeu-soares-87749a231/' target='blank'>Linkedin</a></li>
              <li><a href='https://github.com/Romeusorionaet' target='blank'>Github</a></li>
              <li><a href='https://www.instagram.com/romeusoaresdesouto/' target='blank'>Instagram</a></li>
              <li><a href='mailto:romeusoares14569@gmail.com' target='blank'>Email</a></li>
              <li><a href='https://wa.me/5584981127596' target='blank'>WhatsApp</a></li>
            </ul>
          </div>

          <div className='w-10'>
            <h3 className='mb-2'>API</h3>
            <ul className='flex flex-col gap-2 text-sm text-gray-300'>
              <li><a href='https://ygoprodeck.com/api-guide/' target='blank'>Direitos autorais de YGOPRODeck.com</a></li>
              <li><span>API Changelog v7</span></li>
            </ul>
          </div>

        </nav>
      </div>
    )
}