import { NextResponse } from "next/server"
import {bookList} from "../../../../utils/brandon_books"

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const selectedBook = bookList.find( book => String(book.id) == id)
      if(id){
        return NextResponse.json({books : selectedBook})
      }else{
        return NextResponse.json({books :bookList})
      }
  }
  