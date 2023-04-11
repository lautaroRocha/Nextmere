export default function BooksFilter(){
    return(
        <>
         <label htmlFor="search"> Search
            <input type="search" name="search" id="" />
        </label>
        <label htmlFor="filter"> Filter by Saga
            <select name="filter" id="">
                <option value="">All</option>
                <option value="The Stormlight Archive">The Stormlight Archive</option>
                <option value="Mistborn Era I">Mistborn Era I</option>
                <option value="Mistborn Era II">Mistborn Era II</option>
                <option value="Elantris">Elantris</option>
                <option value="White Sands">White Sands</option>
                <option value="War Breaker">War Breaker</option>

            </select>
        </label>
        </>
    )
}