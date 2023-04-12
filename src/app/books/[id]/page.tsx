import { fetchSingleBook } from "../services/fetchBooks"

export default async function ProductDetail({params} : { params: { id: String } }){
    const {id} = params
    const {books} = await fetchSingleBook(id)
    return(
        <>
            <div >
                <h1>{books.title}</h1>
            </div>
            <div>
                {books.description}
            </div>
            <img src={books.cover} alt={books.title} />
        </>
    )
}