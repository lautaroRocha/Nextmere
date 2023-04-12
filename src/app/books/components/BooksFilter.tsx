'use client'

import { useAppDispatch } from "@/src/redux/hooks"
import { searchByInput, searchBySaga } from "@/src/redux/features/searchSlice"

export default function BooksFilter(){

    const dispatch = useAppDispatch();

    return(
        <>
         <label htmlFor="search"> Search
            <input type="search" onChange={(e)=>{dispatch(searchByInput(e.target.value.toLowerCase()))}} name="search" id="" />
        </label>
        <label htmlFor="filter"> Filter by Saga
            <select name="filter" id="" onChange={(e)=>{dispatch(searchBySaga(e.target.value))}}>
                <option value="">All</option>
                <option value="The Stormlight Archive">The Stormlight Archive</option>
                <option value="Mistborn | Era I">Mistborn Era I</option>
                <option value="Mistborn | Era II">Mistborn Era II</option>
                <option value="Elantris">Elantris</option>
                <option value="Warbreaker">War Breaker</option>
                <option value="White Sands">White Sands</option>
                <option value="Tress of the Emerald Sea">Tress of the Emerald Sea</option>
            </select>
        </label>
        </>
    )
}