import React from 'react'
import Input from "../components/Input"
import Search from './Search'
import Link from "next/link"

export default function Header() {


  return (
    <div className="bg-slate-600 flex h-20 w-screen px-3 space-x-64 items-center position-fixed">
        <img className="h-20 " src="EX-BOOKS.jpg"/>
        <Search label="Find Books....." htmlFor="search"/>
        <button className=' border border-black p-2 rounded-lg h-8 w-auto flex items-center '>CATEGORIES</button>
        <Link href="/login">

        <button className="mr-12 ">Login</button>
        </Link>
        
    </div>
  )
}
