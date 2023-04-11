import BooksList from './components/BooksList'
import styles from '../styles/page.module.css'
import BooksFilter from './components/BooksFilter'


export default async function Products (){
    return (
        <>
            <BooksFilter />
            <div className={styles.grid}>
               <BooksList />
            </div>
        </>
    )
}