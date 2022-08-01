import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { getBookById } from "../../../helpers/Helpers"

import BookDeatails from '../../../components/Books/BookDeatails'
import BuyCard from '../../../components/Books/BuyCard'
import ChatCard from '../../../components/Books/ChatCard'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import { useAuthContext } from '../../../store/Context'

export default function BookByIDPage() {

  const { user } = useAuthContext()

  const router = useRouter()

  const [bookData, setbookData] = useState(null)

  useEffect(() => {
    getBookById(router.query.bookId, setbookData)
  }, [router.isReady])

  console.log(bookData);
  
  return (
    <div className="relative bg-slate-200 min-h-screen ">
        <Header/>
        <div className='flex justify-between w-full '>
          <BookDeatails name={bookData?.name} about={bookData?.about} image={bookData?.image} author={bookData?.author}/>
          <div className='flex flex-col'>
            <BuyCard/>
            <ChatCard buyerId={user?.id} sellerId={bookData?.seller?.id} sellerName={bookData?.seller?.name}/>
          </div>
        </div>
        <Footer/>
    </div>
  )
}
