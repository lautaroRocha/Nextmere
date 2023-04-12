import BooksList from './components/BooksList'
import styles from '../styles/page.module.css'
import BooksFilter from './components/BooksFilter'
import {fetchBooks} from './services/fetchBooks'

export default async function Products (){

    const {books} = await fetchBooks()

    return (
        <>
            <BooksFilter />
            <div className={styles.grid}>
               <BooksList books={books}/>
            </div>
        </>
    )
}