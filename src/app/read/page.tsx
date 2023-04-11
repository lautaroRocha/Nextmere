import styles from '../styles/page.module.css'
import WishCounter from './components/WishCounter'

export default async function WishPage (){
    return (
        <>
            <div className={styles.center}>
                <h1 >WishList</h1>
            </div>
            <WishCounter />
        </>
    )
}