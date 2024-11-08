import Image from 'next/image'
import React from 'react'

interface Movies {
  Poster: string
  Title: string
  Type: string
  Year: string
  imdbID: string
  Genre: string
}


const Moviecard = ({ val }: { val: Movies }) => {
  return (
    <div key={val.Title} className=' w-[100px] max-w-[100px]  min-w-[100px] min-h-[220px] max-h-[220px] sm:w-[240px]  snap-center rounded-lg md:snap-start sm:min-w-[240px] sm:h-[450px] flex flex-col  sm:p-2  bg-neutral-100 sm:min-h-[450px] transition-all'>
      <div className='w-full min-h-[148px] sm:min-h-[370px] sm:max-h-[370px] rounded-lg overflow-hidden relative border-[1px]  border-gray-300 transition-all duration-200 shadow-md hover:shadow-stone-400 hover:shadow-lg    '>
        <Image src={val.Poster !== 'N/A' ? val.Poster : '/no-image.jpeg'} loading='lazy' quality={100} alt='sorry' fill sizes='(100vw, 100vh)' className='object-cover' />
      </div>
      <div className=' w-full h-full max-h-full  flex antialiased flex-col justify-around text-justify  pt-1 sm:pt-2 items-around'>
        <h1 className='sm:font-bold text-sm sm:text-lg text-wrap truncate text-justify p-2  w-full h-full'>{val.Title}</h1>
        <p className='hidden sm:block px-2'>{val?.Genre}</p>
      </div>
    </div>
  )
}

export default Moviecard
