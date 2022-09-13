import { useEffect, useState } from "react"

import {getBooks } from "../helpers/Helpers"
import { useRouter } from 'next/router'
import Header from "../components/Header"
import Footer from "../components/Footer"
import BookCard from "../components/Cards/BookCard"
import { supabase } from "../supabase"


export default function Home() {

  const router = useRouter()


  const [bookData, setbookData] = useState(null)
  const [user, setuser] = useState(null)

  useEffect(() => {
    fetchUser()
    getBooks(setbookData)
  }, [])
  const fetchUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser()
    setuser(user)
  }
  

  
  return (
    <div style={{backgroundImage:'url(login5.jpg)'}} className="relative min-h-screen ">
      <Header/>
        <div className="grid grid-cols-4 gap-x-6 justify-items-center place-content-center pt-4 pb-40 px-56">
          {
            bookData?.filter((item)=> item.seller !== user?.id)?.map((book)=> 
              <BookCard key={book?.id} id={book?.id} name={book?.book_name} image={book?.image} author={book?.author}/>
            )
          }
        </div>
      <Footer/>
    </div>
  
     
  )
}
