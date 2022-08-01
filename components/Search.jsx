import React from 'react'
import {BiSearch} from "react-icons/bi"

export default function Search({label}) {
  return (
    <div className="relative">
        <input type="text" placeholder={label} className='bg-white  outline-none
                rounded-xl pl-5 px-4 w-72 h-8 placeholder-zinc-500'
                />
            <BiSearch className="absolute top-2 left-1"/>
                
    </div>
  )
}
