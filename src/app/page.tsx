import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './styles/page.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <div className={styles.grid}>
        <Link
          href="/products"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Products <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            A page with data fetching
          </p>
        </Link>

        <Link
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Cart <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Checkout your selected products
          </p>
        </Link>


      </div>
    </>
  )
}
