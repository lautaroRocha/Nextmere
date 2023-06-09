'use client'

import { add, remove, reset } from "../../../redux/features/wishesSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import BookMin from "../../products/components/BookMin";

export default function WishCounter(){
    const count = useAppSelector((state) => state.wishesReducer.value);
    const dispatch = useAppDispatch();

    return(
        <>
        <span>{count.length}</span>
        {count.map((pr, idx)=> <BookMin book={pr} key={idx}/> )}
        </>
    )
}