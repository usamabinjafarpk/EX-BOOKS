import React from 'react'
import Input from "../components/Input"
import Search from './Search'
import Link from "next/link"
import { useAuthContext } from '../store/Context'
import {supabase} from '../supabase'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Header() {

const {user}=useAuthContext()
const router = useRouter()

const [error, seterror] = useState(null)
  
const logout=async()=>{
  const { error } = await supabase.auth.signOut()
  error ? seterror(error) : router.replace('/login')
}

  return (
    <div className="bg-slate-600 flex h-20 w-screen px-3 space-x-48 items-center position-fixed z-999">
        <Link href='/'>
        <img className="h-20 cursor-pointer " src="EX-BOOKS.jpg"/>
        </Link>               
        <Search label="Find Books....." htmlFor="search"/>
        <button className=' border border-black p-2 rounded-lg h-8 w-auto flex items-center '>CATEGORIES</button>
        <Link href='/sell'>

        <button className=''>Sell</button>
        </Link>
        <div>
        {user ? <div>
          <h2>Welcome {user?.user_metadata?.name}</h2>
          <button                           onClick={logout}>Logout</button>
          </div>: 
        <Link href="/login">

       <button className="mr-12 ">LOGIN</button>
        
        </Link>}
       </div>
        
        
    </div>
  )
}
