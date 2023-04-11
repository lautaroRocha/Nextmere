'use client'

import { useAppDispatch, useAppSelector } from "../../../redux/hooks"
import Link from "next/link"
import { add, remove } from "../../../redux/features/wishesSlice"
import { useState, useEffect } from "react"


export default function BookMin({book}:any){

    const [isWished, setIsWished] = useState(false)
    const dispatch = useAppDispatch()

    const wishList = useAppSelector((state)=>  state.wishesReducer.value)
    
    const sendToWishList = () => {
        dispatch(add(book))
    }

    const removeFromWishList = () => {
        dispatch(remove(book))
    }

    useEffect(()=>{
        setIsWished(false)
        const isWished = wishList.find((prod : any) => prod.id === book.id)
        if(isWished){
            setIsWished(true)
        }
    }, [sendToWishList, removeFromWishList])


    return(
        <>
        <Link href={`books/${book.id}`}>  
        <article key={book.id}>
            <span>{book.title}</span>
            <img src={book.cover} alt={book.title} />
        </article>
        </Link> 
        <div>
            <button onClick={sendToWishList} disabled={isWished}>ADD</button>
            <button onClick={removeFromWishList} disabled={!isWished}>REMOVE</button>
        </div>
        </>
    )
}