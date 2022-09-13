import { useEffect, useState } from "react"

import { useRouter } from 'next/router'
import Header from "../../../components/Header"
import Footer from "../../../components/Footer"
import BookCard from "../../../components/Cards/BookCard"
import { getBooksBySeller } from "../../../helpers/Helpers"
import { supabase } from "../../../supabase"


export default function MyBooks() {

  const router = useRouter()


    const [bookData, setbookData] = useState(null)
    const [user, setuser] = useState(null)


    useEffect(() => {
      fetchUser()
    }, [])
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      setuser(user)
    }
    

  useEffect(() => {
    user?.id && getBooksBySeller(setbookData, user?.id)
  }, [user])

  
  return (
    <div style={{backgroundImage:'url(login5.jpg)'}} className="relative min-h-screen ">
      <Header/>
        <div className="grid grid-cols-4 gap-x-6 justify-items-center place-content-center pt-4 pb-40 px-56">
          {
            bookData?.map((book)=> 
              <BookCard key={book?.id} id={'my/' + book?.id} name={book?.book_name} image={book?.image} author={book?.author} 
                seller={book?.seller == user?.id} sold={book?.buyer}/>
            )
          }
        </div>
      <Footer/>
    </div>
  
     
  )
}
