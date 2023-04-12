import { useAppDispatch, useAppSelector } from "../../../redux/hooks"
import Link from "next/link"
import { add, remove } from "../../../redux/features/readSlice"
import { useState, useEffect } from "react"
import Image from "next/image"


export default function BookMin({book}:any){

    const [isRead, setIsRead] = useState(false)
    const dispatch = useAppDispatch()

    const readList = useAppSelector((state)=>  state.readReducer.value)
    
    const sendToReadList = () => {
        dispatch(add(book))
    }

    const removeFromReadList = () => {
        dispatch(remove(book))
    }

    useEffect(()=>{
        setIsRead(false)
        const isRead = readList.find((prod : any) => prod.id === book.id)
        if(isRead){
            setIsRead(true)
        }
    }, [sendToReadList, removeFromReadList])


    return(
        <>
        <Link href={`books/${book.id}`}>  
        <article key={book.id}>
            <span>{book.title}</span>
            <Image src={book.cover} alt={book.title} width={250} height={500}/>
        </article>
        </Link> 
        <div>
            <button onClick={sendToReadList} disabled={isRead}>ADD</button>
            <button onClick={removeFromReadList} disabled={!isRead}>REMOVE</button>
        </div>
        </>
    )
}