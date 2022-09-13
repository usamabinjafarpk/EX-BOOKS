import { useState, useEffect } from 'react'
import Search from './Search'
import Link from "next/link"
import {supabase} from '../supabase'
import { useRouter } from 'next/router'

export default function Header() {

const router = useRouter()

const [error, seterror] = useState(null)
const [user, setuser] = useState(null)
  
const logout=async()=>{
  const { error } = await supabase.auth.signOut()
  error ? seterror(error) : router.replace('/login')
}

useEffect(() => {
  fetchUser()
}, [])
const fetchUser = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser()
  setuser(user)
}





  return (
    <div className="sticky top-0 w-screen h-28 z-50 ">
      <div className='flex justify-between items-center h-20  bg-slate-600 px-60'>
        <Link href='/'>
          <img className="h-20 cursor-pointer " src="/EX-BOOKS.jpg"/>
        </Link>               
        <Search />

        {/* profile and sell button */}
        <div className='flex space-x-4'>

          <div className='flex items-center space-x-4'>
          <Link href='/book/my'>
              <button className='bg-white rounded-full px-10 py-2 border-4 border-slate-900'>My Books</button>
            </Link>
            <Link href='/sell'>
              <button className='bg-white rounded-full px-10 py-2 border-4 border-slate-900'>Sell</button>
            </Link>
          </div>
          {user ?
            <div className='flex space-x-2 items-center'>
              <button className='bg-white rounded-full px-10 py-2 border-4 border-slate-900' onClick={logout}>Logout</button>
              <div className='text-base bg-indigo-900 text-white ring ring-white font-bold uppercase rounded-full w-8 h-8 
                flex justify-center items-center'>
                {user?.user_metadata?.name?.substring(0,2)}
              </div> 
            </div> 
          : 
            <Link href="/login">
              <button className="mr-12 ">Login</button>
            </Link>}
       </div>

      </div>

      <div className='flex justify-between items-center h-8 bg-slate-300'>

      </div>
        
        
    </div>
  )
}
//aaa