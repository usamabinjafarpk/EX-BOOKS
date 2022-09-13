import { useState, useRef, useEffect } from "react"
import { useForm } from "react-hook-form"
import { useRouter } from "next/router"

import { createMessage, getMessage, getMessages, getUser } from "../../../../helpers/Helpers" 

import { MdOutlineArrowBack, MdSend } from "react-icons/md"

import SingleMessageCard from "../../../../components/Cards/SingleMessageCard" 
import { supabase } from "../../../../supabase"


export default function ChatPage() {

    const router = useRouter()

    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const ref = useRef()

    const [messages, setmessages] = useState([])
    const [user, setuser] = useState(null)
    const [error, seterror] = useState(false)
    

    //get messages at initail loading
    const getData = async () => {
        const ids = {
            book: router?.query?.bookId,
            buyer: router?.query?.buyerId,
        }
        await getMessages(ids, setmessages, seterror)
    }
    useEffect(() => {
        router.isReady && getData()
    }, [router.isReady])

    useEffect(() => {
        fetchUser()
      }, [])
      const fetchUser = async () => {
        const {
          data: { user },
        } = await supabase.auth.getUser()
        setuser(user)
      }
      
    
    
    //get new messages without reloading
    useEffect(() => {
        const myChannel = supabase.channel('*').on('postgres_changes', { event: '*', schema: 'public', table: 'chats' }, (payload) => {
            getData()
        }).subscribe()

        return () => {
            supabase.removeChannel(myChannel)
        }
    }, [])
    
    
    //scroll down for new message
    useEffect(() => {
        ref.current.scrollIntoView({behavior: "smooth", block: "end"});
    }, [messages])
    

    // create a new message
    const onSubmit = async (data) => {
        const ids = {
            book: router?.query?.bookId,
            buyer: router?.query?.buyerId,
            sender: user?.id,
        }
        await createMessage(ids, data.message, seterror)
        reset()
    }

    const handleBackClick = () => {
        router.push(`/book/my/${router.query.bookId}`)
    }


    return (
        <div className='flex flex-col bg-zinc-900 text-white relative min-h-screen'>
            
            {/* header */}
            <div className='bg-zinc-800 flex items-center space-x-4 h-20 px-4 w-screen fixed top-0 z-50'>
                <MdOutlineArrowBack className='w-8 h-8 text-white cursor-pointer' onClick={handleBackClick}/>
                <div className='flex space-x-2'>
                    <div className='w-12 h-12 bg-white rounded-full flex justify-center items-center text-black text-xl'>
                        {messages[0]?.book?.seller?.name?.substring(0,2).toUpperCase()}
                    </div>
                    <div className='flex flex-col justify-center items-center pl-1'>
                        <h6>{messages[0]?.book?.seller?.name}</h6>
                    </div> 
                </div>
            </div>

            {/* content */}

            <div className={`grid grid-cols-1 gap-y-2 content-end justify-items-stretch px-4 min-h-screen
                 pb-16 pt-24 w-screen`} 
                ref={ref}>
                { messages?.map((item)=>
                    <SingleMessageCard host={user?.id} key={item.id} userId={item.sender.id} userName={item.sender.name} message={item.message}/>
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