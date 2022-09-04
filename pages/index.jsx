import { useEffect, useState } from "react"

import {getBooks } from "../helpers/Helpers"
import { useRouter } from 'next/router'
import Header from "../components/Header"
import Footer from "../components/Footer"
import BookCard from "../components/Cards/BookCard"


export default function Home() {

  const router = useRouter()


  const [bookData, setbookData] = useState(null)

  useEffect(() => {
    getBooks(setbookData)
  }, [])

  console.log(bookData);
  
  return (
    <div style={{backgroundImage:'url(login5.jpg)'}} className="relative min-h-screen ">
      <Header/>
        <div className="grid grid-cols-4 gap-x-6 justify-items-center place-content-center pt-4 pb-40 px-56">
          {
            bookData?.map((book)=> 
              <BookCard key={book?.id} id={book?.id} name={book?.book_name} image={book?.image} author={book?.author}/>
            )
          }
        </div>
      <Footer/>
    </div>
  
     
  )
}
