'use client';
import { useEffect, useState } from "react";
import Carousel from "./components/Carousel";
import CategoryBar from "./components/CategoryBar";
import Moviecard from "./components/Moviecard";
import Nav from "./components/Nav";
import { useContextApi } from "./components/ContextApi";
import Image from "next/image";
import MobileNav from "./components/MobileNav";

interface Movies {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
  Genre: string;
}

export default function Home() {
  const [loading, setloading] = useState(true);
  const [notfound, setnotFound] = useState(false)
  const { Movies, Search, setMovies } = useContextApi();
  const homepageMovies: string[] = ['bhool bhulaiyaa 3', 'singham again', 'Salaar 2', 'Kalki 2898 AD', '12th fail', 'Sita ramam', 'Kanguva'];

  const fetchMovies = async (title: string) => {
    const params = new URLSearchParams({ t: title }); // Use 't' to search for a single movie
    const url = `https://www.omdbapi.com/?apikey=90d20b2e&${params.toString()}`;
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.Response === "True") {
        return data; // Return the movie object directly
      } else {
        return null; // If no valid result, return null
      }
    } catch (error) {
      console.log('API fetch error:', error);
      return null;
    }
  };
  const searchmovies = async (title: string) => {
    const params = new URLSearchParams({ s: title }); // Use 't' to search for a single movie
    const url = `https://www.omdbapi.com/?apikey=90d20b2e&${params.toString()}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.Response === "True") {
        return data.Search; // Return the movie object directly
      } else {
        return null; // If no valid result, return null
      }
    } catch (error) {
      console.log('API fetch error:', error);
      return null;
    }
  }
  useEffect(() => {
    setloading(true);

    // Only fetch movies if they are not already in state or search is empty
    if (Search === '') {
      const fetchAllMovies = async () => {
        // Fetch all movies concurrently using Promise.all
        const moviePromises = homepageMovies.map((title) => fetchMovies(title));
        const fetchedMovies = await Promise.all(moviePromises);

        // Filter out null values (in case any movie fetch failed)
        const validMovies = fetchedMovies.filter((movie) => movie !== null);

        // Update the state with the fetched movies
        setloading(false);
        setMovies(validMovies as Movies[]);
      };

      fetchAllMovies(); // Start fetching movies
    } else if (Search !== '') {
      setnotFound(false);
      const fetchsearch = async () => {
        const movie = await searchmovies(Search);
        if (movie === null) {
          setnotFound(true)

        } setloading(false);
        setMovies(movie as Movies[]);
      }
      fetchsearch();
    }
  }, [Search, setMovies]); // Only run on mount (no infinite fetch loop)

  return (
    <div className="bg-stone-100 max-w-screen overflow-hidden min-h-screen relative">
      <MobileNav />
      <Nav />
      <CategoryBar />
      <Carousel />
      <div className="flex flex-col w-full mt-12 items-center px-2  max-h-[270px]  sm:max-h-fit sm:px-6 h-fit ">
        <h1 className="w-full  lg:w-10/12  flex justify-between font-bold text-lg mb-4 sm:mb-0 sm:text-2xl  text-stone-900 antialiased">
          Recommended Movies
          <span className="text-red-500 text-xs hover:font-semibold transition duration-800  px-4 p-1   sm:text-sm font-medium "> See All {'>'}</span>
        </h1>
        <div className={`w-full min-h-fit max-h-fit
             sm:px-0 lg:w-10/12  sm:h-[470px] remove-scrollbar sm:min-h-[470px] py-2 overflow-x-auto gap-2 sm:gap-4 snap-x flex ${loading || notfound ? 'justify-center item-center' : ''} scroll-smooth`}>
          {Movies?.length > 0 ? Movies?.map((val, index) => (
            <Moviecard key={index} val={val} />
          )) :
            loading && (<Image src={'/loading2.jpg'} width={400} height={100} alt="loading" className="  aspect-square w-1/3 h-1/3 max-w-[80px] max-h-[80px] sm:max-w-[100px] sm:max-h-[100px] mix-blend-darken animate-spin-slow      " />)
            || notfound && (<Image src={'/notfound.jpg'} width={400} height={10} alt="Not Found" className="  aspect-square w-1/3 h-1/3 max-w-[150px] max-h-[150px] mix-blend-darken " />)
          }  </div>
      </div>
    </div>
  );
}
