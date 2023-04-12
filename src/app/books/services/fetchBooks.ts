export async function fetchBooks(){
    const res = await fetch("http://localhost:3000/api/books")
    if(!res.ok){
      throw new Error('Failed to fetch')
    }
    return res.json()
  }

export async function fetchSingleBook(id:String){
  const res = await fetch("http://localhost:3000/api/books?id="+id);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}