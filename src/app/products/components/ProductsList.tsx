
import BookMin from './BookMin';

async function fetchBooks(){
  const res = await fetch("http://localhost:3000/api/books")
  if(!res.ok){
    throw new Error('Failed to fetch')
  }
  return res.json()
}

export default async function ProducstList(): Promise<JSX.Element> {
    const {books} = await fetchBooks()

    return books.map((pr: any) => (
      <>
        <BookMin book={pr} />
      </>
    ))
}
