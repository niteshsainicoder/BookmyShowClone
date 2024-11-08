'use client';
import Image from 'next/image'
import React, { useState } from 'react'
import { useContextApi } from './ContextApi';

const MobileNav = () => {
  const { setSearch } = useContextApi();
  const [clicked, setclicked] = useState(false)
  const [search, setsearch] = useState('');
  return (<>
    <div className='sm:hidden w-full    h-12 flex items-center justify-between '>
      <div className="w-8/12 h-fit max-w-8/12 truncate text-xl px-4 text-md text-gray-600 ">It All Starts Here!</div>
      <div className='w-4/12 h-fit flex   justify-center items-center '>
        <button type='button' onClick={() => setclicked(true)} className='relative px-2 border-[1px]  border-gray-400 rounded-lg  bg-stone-100 hover:bg-stone-200   w-[40px]  h-[30px]' >
          <Image src={'/Search.svg'} fill alt='search' className='aspect-square' />
        </button>      </div>

    </div>
    {clicked && <div className='min-w-screen  z-50 min-h-[calc(100%-20px)] absolute top-20 left-0 right-0 bottom-0 bg-stone-300 flex justify-center items-center  '>
      <div className='min-w-[250px] min-h-[300px] rounded-lg bg-white border-gray-200 border gap-4 flex justify-center items-center flex-col'>
      <h1 className='w-full text-center text-stone-800 font-semibold '>Search your favourite</h1>
        <input placeholder='Search movies ..' type='text' className='w-8/12 h-7 rounded-lg  ' onChange={(e) => setsearch(e.target.value)} />
        <div className='flex justify-between items-center w-8/12'>
          <button type='button'
            className='rounded-lg px-3 border-[2px] border-stone-500 bg-gray-300 hover:bg-gray-400' onClick={() => { setclicked(!clicked) }}>close</button>
          <button type='button'
            className='rounded-lg px-3 border-[2px] border-stone-500 bg-gray-300 hover:bg-gray-400'
            onClick={() => { setclicked(false); setSearch(search) }}>search</button>

        </div>   </div>
    </div>}
  </>
  )
}

export default MobileNav
