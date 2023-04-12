'use client'

import BookMin from './BookMin';
import { useAppSelector} from '@/src/redux/hooks';
import { useState, useEffect, useMemo } from 'react';


export default function BooksList({books}): Promise<JSX.Element> {

  const [filteredBooks, setFilteredBooks] = useState(books);
  const searchedInput = useAppSelector((state)=>state.searchReducer.search)
  const searchedSaga = useAppSelector((state)=>state.searchReducer.saga) 

    useEffect(()=>{
      if(searchedSaga){
        if(searchedInput){
          setFilteredBooks([...filteredBooks].filter((book) => book.saga === searchedSaga))
        }else{
          setFilteredBooks(books.filter((book) => book.saga === searchedSaga))
        }
      }else{
        if(searchedInput){
          setFilteredBooks(books.filter((book) => book.title.toLowerCase().includes(searchedInput)))
        }else{
          setFilteredBooks(books)
        }
      }
    }, [searchedSaga])

    useEffect(()=>{
      if(searchedInput){
        if(searchedSaga){
          setFilteredBooks([...filteredBooks].filter((book) => book.title.toLowerCase().includes(searchedInput)))
        }else{
          setFilteredBooks(books.filter((book) => book.title.toLowerCase().includes(searchedInput)))
        }
      }else{
        if(searchedSaga){
          setFilteredBooks(books.filter((book) => book.saga === searchedSaga))
        }else{
          setFilteredBooks(books)

        }
      } 
    }, [searchedInput])
 

    return filteredBooks.map((pr: any, index:any) => <BookMin book={pr} key={index}/>)
}
