

async function fetchProduct(id:number) {
    const res = await fetch("http://localhost:3000/api/books?id="+id);
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  }

export default async function ProductDetail({params} : { params: { id: number } }){
    const {id} = params
    const {books} = await fetchProduct(id)
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