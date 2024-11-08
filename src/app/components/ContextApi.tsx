'use client';
import { createContext, useContext, useState } from "react";
interface Movies {
    Poster: string
    Title: string
    Type: string
    Year: string
    imdbID: string
    Genre:string

}

interface Data {
    Movies: Movies[],
    Search: string,
    setMovies: (movies: Movies[]) => void;
    setSearch: (search: string) => void;



}
const Context = createContext<Data>({ Movies: [], Search: '', setMovies: () => { }, setSearch: () => { } })
export default Context;

export const ContextApi = ({ children }: { children: React.ReactNode }) => {

    const [Movies, setMovies] = useState<Movies[]>([]);
    const [Search, setSearch] = useState<string>('');
    return (
        <Context.Provider value={{ Movies, Search, setMovies, setSearch }}>{children}</Context.Provider>
    )
}

export const useContextApi = () => {
    return useContext(Context)
} 