import './styles/globals.css'
import Link from 'next/link'
import styles from './styles/page.module.css'
import { Providers } from '../redux/provider'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export const PAGES_LINKS = [{
  title : "Home",
  link : "/"
},
  {
    title : "Wish List",
    link : "/wishlist"
  },
  {
    title : "Products",
    link : "/products"
  }
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <header>
        <nav>
      <ul >
        {PAGES_LINKS.map((page, idx) => {
          return(
            <Link href={page.link} key={idx}>
            <li>{page.title}</li>
          </Link>
          )})}
        </ul>  
        </nav>
      </header>  
      <Providers>
        <main className={styles.main}>
            {children}
        </main>
      </Providers>
      </body>
    </html>
  )
}
