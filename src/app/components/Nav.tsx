import Image from 'next/image'
import React from 'react'
import { useContextApi } from './ContextApi';

const Nav = () => {
    const { setSearch } = useContextApi();
    return (
        <div className=' w-full h-16 absolute bottom-0 sm:relative    sm:flex justify-center  bg-stone-50
        '>
            <nav className=' w-full hidden   sm:w-11/12 lg:w-10/12 h-full  text-black sm:flex gap-1 sm:gap-2 justify-between
             items-center shadow-sm rounded-md p-1 sm:p-2  ' >
                <div className='h-full w-full sm:w-7/12  flex gap-4 items-center '>
                    <div className='w-3/12 sm:w-2/12  h-full flex relative justify-center  items-center '>

                        <Image src="/bookmyshow.svg" alt="Icon failed to load" fill className='aspect-auto ' />
                    </div>
                    <div className=' w-9/12 p-[6px] pl-3 rounded-md flex gap-4 justify-center items-center   border-[1px] border-gray-200'>
                        <Image src="/Search.svg" alt="Icon failed to load" width={20} height={20} className='aspect-auto' />
                        <input type="text" onChange={(e) => setTimeout(() => setSearch(e.target.value || ''), 500)} placeholder='Search for Movies, Events, Plays, Sports and Activities' className='w-full outline-none h-full text-sm ' />
                    </div>

                </div>
                <div className=' hidden w-0 sm:flex  relative sm:w-5/12 gap-2 justify-around md:justify-end md:gap-4 items-center'>
                    <select title='City' disabled className=' min-w-1/6 border-[1px] border-gray-100 max-w-1/6 h-full min-h-6  truncate px-2 ' ><option value="Gurugram ">Gururam </option></select>
                    <button disabled type='submit' className='w-fit px-2 py-1 text-white  text-nowrap bg-red-500 rounded-md text-sm hover:bg-red-600 cursor-pointer '>Sing In</button>

                    <div className="flex flex-col relative justify-center w-fit min-w-7 h-full min-h-6">

                        <Image src={'./Menu.svg'} fill alt='sorry' />
                    </div>


                </div>

            </nav>
            <nav className='w-full flex bg-stone-100 text-gray-700 z-40 justify-around items-center h-[72px]  shadow-inner text-md font-medium antialiased   sm:hidden  bottom-0 sticky left-0 right-0'>
                <h1 className='flex flex-col items-center justify-center'>
                    <Image src={'/My_home.png'} width={30} height={30} alt='Home' />
                    <span className='text-red-500'>
                        Home
                    </span>
                </h1>
                <h1 className='flex flex-col items-center justify-center'>
                    <Image src={'/movies.png'} width={30} height={30} alt='Movies' />
                    <span>
                        Movies
                    </span>

                </h1>
                <h1 className='flex flex-col items-center justify-center'>
                    <Image src={'/live_events.png'} width={30} height={30} alt='Live' />
                    <span>
                        Live Event
                    </span>

                </h1>
                <h1 className='flex flex-col items-center justify-center'>
                    <Image src={'/profile.png'} width={30} height={30} alt='Profile' />
                    <span>
                        Profile
                    </span>

                </h1>

            </nav>
        </div>
    )
}

export default Nav
