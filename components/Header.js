import React from 'react'
import Input from "../components/Input"
import Search from './Search'
import Link from "next/link"
import { useAuthContext } from '../store/Context'
import {supabase} from '../supabase'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { FiMessageSquare } from 'react-icons/fi'

export default function Header() {

const {user}=useAuthContext()
const router = useRouter()

const [error, seterror] = useState(null)
  
const logout=async()=>{
  const { error } = await supabase.auth.signOut()
  error ? seterror(error) : router.replace('/login')
}

  return (
    <div className="sticky top-0 w-screen h-28 z-50 ">
      <div className='flex justify-between items-center h-20  bg-slate-600 px-60'>
        <Link href='/'>
          <img className="h-20 cursor-pointer " src="/EX-BOOKS.jpg"/>
        </Link>               
        <Search label="Find Books....." htmlFor="search"/>

            <button onClick={()=>router.push('/request')}>Request a Book</button>

        {/* profile and sell button */}
        <div className='flex space-x-4'>

          <div className='flex items-center space-x-4'>
            <FiMessageSquare className='w-8 h-8 text-white cursor-pointer' 
              onClick={()=> router.push('chats')}/>
            <Link href='/sell'>
              <button className='bg-white rounded-full px-10 py-2 border-4 border-slate-900'>Sell</button>
            </Link>
          </div>
          {user ?
            <div className='flex space-x-2 items-center'>
              <button className='bg-white rounded-full px-10 py-2 border-4 border-slate-900' onClick={logout}>Logout</button>
              <div className='text-base bg-indigo-600 text-white ring ring-white font-bold uppercase rounded-full w-8 h-8 
                flex justify-center items-center'>
                {user?.user_metadata.name?.substring(0,2)}
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