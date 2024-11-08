'use client';
import React from 'react'
import { useContextApi } from './ContextApi';

const CategoryBar = () => {
    const { Search, setMovies } = useContextApi();
    const fetchAccording = async (title: string) => {
        if (!Search) {
            return;
        }
        try {
            const type = new URLSearchParams({ type: title, s: Search });

            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}&${type.toString()}`);
            const jsonresponse = await response.json()
            if (
                jsonresponse.Search?.length > 0 || jsonresponse.Search) {
                setMovies(jsonresponse.Search)
            }
            else {
                setMovies([{
                    Poster: '/notfound.jpg',
                    Title: title,
                    Type: '',
                    Year: '',
                    imdbID: '',
                    Genre: ''
                }])
            }
            console.log(jsonresponse.Search, 'from category');
        } catch (error) {
            console.log('error', error);

        }

    }
    return (
        <div className='w-full h-fit bg-stone-50 mt-1 flex justify-center'>
            <div className=' md:w-10/12  sm:flex gap-2 justify-between text-sm text-gray-700
             items-center shadow-sm rounded-md p-2'>
                <div className='flex gap-5 justify-around items-center  '>

                    <h2 className='cursor-pointer text-gray-800' onClick={() => fetchAccording('movie')}>Movies</h2>
                    <h2 className='cursor-pointer text-gray-800' onClick={() => fetchAccording('series')}>Streams</h2>
                    <h2 className='cursor-pointer text-gray-800' onClick={() => fetchAccording('episode')}>Events</h2>
                    <h2 className=' sm:block cursor-not-allowed' >Plays</h2>
                    <h2 className='hidden sm:block cursor-not-allowed'>Sports</h2>
                    <h2 className='hidden sm:block cursor-not-allowed'>Activities</h2>
                </div>
                <div className=' hidden sm:flex gap-5 cursor-pointer '>
                    <h2>List your show</h2>
                    <h2>Corporate</h2>
                    <h2>Offers</h2>
                    <h2>Gift Cards</h2>
                </div>
            </div>
        </div>
    )
}

export default CategoryBar
