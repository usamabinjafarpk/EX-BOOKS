import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { getBookById, getChatsByBook } from "../../../../helpers/Helpers"

import BookDeatails from '../../../../components/Books/BookDeatails'
import Footer from '../../../../components/Footer'
import Header from '../../../../components/Header'
import { reactLocalStorage } from 'reactjs-localstorage'
import SellerChatCard from '../../../../components/Books/SellerChatCard'
import { supabase } from '../../../../supabase'

export default function BookByIDPage() {


  const router = useRouter()

  const [bookData, setbookData] = useState(null)
  const [buyersData, setbuyersData] = useState(null)
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
    if(router.isReady){
      getBookById(router.query.bookId, setbookData)
      getChatsByBook(router.query?.bookId, setbuyersData)
    }
  }, [router.isReady])

  
  return (
    <div className="relative bg-slate-200 min-h-screen ">
        <Header/>
        <div className='flex  justify-center items-center w-full'>
          <BookDeatails name={bookData?.name} about={bookData?.about} image={bookData?.image} author={bookData?.author}/>
          <div className='flex flex-col space-y-2 bg-white px-4 py-2'>
            { buyersData?.map((item)=>
              <SellerChatCard buyerId={item?.id} buyerName={item?.name}/>
            )}
          </div>
        </div>
        <Footer/>
    </div>
  )
}
