import { BsThreeDots } from 'react-icons/bs';

interface Props {
    text: string;
}

export function Chat({text}: Props) {

    return(
        <div className='w-4/5 flex flex-col gap-1 pt-5 px-5 tablet:px-20'>

            <div 
            className='h-1 w-5 rounded-lg bg-slate-900 flex justify-center items-center text-4xl'>
              <BsThreeDots />
            </div>

            <div className='max-w-3xl bg-gradient-to-t from-zinc-900 rounded-lg p-2'>
                {text}
            </div>

        </div>
    )
}