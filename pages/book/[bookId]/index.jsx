import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { getBookById } from "../../../helpers/Helpers"

import BookDeatails from '../../../components/Books/BookDeatails'
import ChatCard from '../../../components/Books/ChatCard'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import { supabase } from '../../../supabase'

export default function BookByIDPage() {


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
    router.isReady && getBookById(router.query.bookId, setbookData)
  }, [router.isReady])

  
  return (
    <div className="relative bg-slate-200 min-h-screen ">
        <Header/>
        <div className='flex justify-center w-full '>
          <BookDeatails name={bookData?.name} about={bookData?.about} image={bookData?.image} author={bookData?.author}/>
          <div className='flex flex-col'>
            {/* <BuyCard/> */}
            <ChatCard buyerId={user?.id} sellerName={bookData?.seller?.name}/>
          </div>
        </div>
        <Footer/>
    </div>
  )
}
