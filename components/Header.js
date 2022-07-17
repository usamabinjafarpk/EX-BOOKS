import React from 'react'
import Input from "../components/Input"
import Search from './Search'
import Link from "next/link"

export default function Header() {


  return (
    <div className="bg-slate-600 flex h-20 w-screen px-3 space-x-48 items-center position-fixed">
        <Link href='/'>
        <img className="h-20 cursor-pointer " src="EX-BOOKS.jpg"/>
        </Link>
        <Search label="Find Books....." htmlFor="search"/>
        <button className=' border border-black p-2 rounded-lg h-8 w-auto flex items-center '>CATEGORIES</button>
        <Link href='/sell'>

        <button className=''>Sell</button>
        </Link>
        <Link href="/login">

        <button className="mr-12 ">Login</button>
        </Link>
        
    </div>
  )
}
