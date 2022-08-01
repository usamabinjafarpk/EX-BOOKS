import { useState, useRef, useEffect } from "react"
import { useForm } from "react-hook-form"
import { useRouter } from "next/router"

import { createMessage, getMessage, getMessages, getUser } from "../../../helpers/Helpers" 
import { useAuthContext } from "../../../store/Context" 

import { MdOutlineArrowBack, MdSend } from "react-icons/md"

import WithAuth from "../../../modules/Layout/WithAuth" 
import SingleMessageCard from "../../../components/Cards/SingleMessageCard" 
import { supabase } from "../../../supabase"


export default function ChatPage() {

	const { user } = useAuthContext()

    const router = useRouter()

    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const ref = useRef()

    const [sellerDetails, setsellerDetails] = useState(null)

    const [messages, setmessages] = useState([])
    const [newMessage, setnewMessage] = useState(null)
    const [error, seterror] = useState(false)
    const [ids, setids] = useState({
        book: router?.query?.bookId,
        buyer: router?.query?.buyer,
        seller: router?.query?.seller,
        from: router?.query?.buyer,
        to: router?.query?.seller
    })
    

    //get seller details
    useEffect(() => {
        getUser(router?.query?.seller, setsellerDetails)
    }, [router.isReady])
    

    //get messages at initail loading
    const getData = async () => {
        const ids = {
            book: router?.query?.bookId,
            buyer: router?.query?.buyer,
            seller: router?.query?.seller,
        }
        await getMessages(ids, setmessages, seterror)
    }
    useEffect(() => {
      getData()
    }, [router.isReady])
    
    
    //get new messages without reloading
    useEffect(() => {
        getData()
        const messageListener = supabase.from("chats").on("INSERT", (payload) => 
            setnewMessage(payload.new)
        ).subscribe()
        return () => {
            supabase.removeSubscription(messageListener)
        }
    },[])
    
    
    useEffect(() => {
        const ids = {
            book: router?.query?.bookId,
            buyer: router?.query?.buyer,
            seller: router?.query?.seller,
        }
        getMessages(ids, setmessages, seterror)
    }, [newMessage])
    
    
    
    //scroll down for new message
    useEffect(() => {
        ref.current.scrollIntoView({behavior: "smooth", block: "end"});
    }, [messages])
    

    // create a new message
    const onSubmit = async (data) => {
        const ids = {
            book: router?.query?.bookId,
            buyer: router?.query?.buyer,
            seller: router?.query?.seller,
            from: router?.query?.buyer,
            to: router?.query?.seller
        }
        await createMessage(ids, data.message, seterror)
        reset()
    }

    const handleBackClick = () => {
        router.push(`/book/${router.query.bookId}`)
    }


    return (
        <div className='flex flex-col bg-zinc-900 text-white relative min-h-screen'>
            
            {/* header */}
            <div className='bg-zinc-800 flex items-center space-x-4 h-20 px-4 w-screen fixed top-0 z-50'>
                <MdOutlineArrowBack className='w-8 h-8 text-white cursor-pointer' onClick={handleBackClick}/>
                <div className='flex space-x-2'>
                    <div className='w-12 h-12 bg-white rounded-full'/>
                    <div className='flex flex-col justify-center items-center pl-1'>
                        <h6>{sellerDetails?.name}</h6>
                    </div> 
                </div>
            </div>

            {/* content */}

            <div className={`grid grid-cols-1 gap-y-2 content-end justify-items-stretch px-4 min-h-screen
                 pb-16 pt-24 w-screen`} 
                ref={ref}>
                { messages?.map((item)=>
                    <SingleMessageCard host={user?.id} key={item.id} userId={item.from.id} userName={item.from.name} message={item.message} time={item.time}/>
                )}
            </div>

            {/* message send */}
            <form onSubmit={handleSubmit(onSubmit)} 
                className='flex justify-between space-x-3 px-2 bg-zinc-800 h-14 w-screen fixed bottom-0 z-50'>
                <input type='text' {...register("message", {required: true})}
                    className='text-white bg-transparent outline-none w-full'/>
                <button type='submit'>
                    <MdSend className='w-8 h-8 text-white'/>
                </button>
            </form>   

        </div>
    )
}