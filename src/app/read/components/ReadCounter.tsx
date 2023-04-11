'use client'
import { useAppSelector } from "../../../redux/hooks";
import { bookList } from "@/utils/brandon_books";
import BookMin from "../../books/components/BookMin";

export default function ReadCounter(){
    const count = useAppSelector((state) => state.wishesReducer.value);
    return(
        <>
        <span>{count.length} / {bookList.length}</span>
        {count.map((pr, idx)=> <BookMin book={pr} key={idx}/> )}
        </>
    )
}