import ProducstList from './components/ProductsList'
import styles from '../styles/page.module.css'


export default async function Products (){
    return (
        <>
            <div className={styles.center}>
                <h1 >Productos</h1>
            </div>
            <div className={styles.grid}>
               <ProducstList />
            </div>
        </>
    )
}