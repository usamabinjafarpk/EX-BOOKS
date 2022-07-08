import { useState } from "react"
import Link from 'next/link'

import { MdOutlineVisibilityOff, MdOutlineVisibility } from "react-icons/md"

export default function Input({label, htmlFor, type, error}) {


    const [inputType, setinputType] = useState(type)
    const [showPassword, setshowPassword] = useState(false)


    const handlePassword = ()=>{
        if(inputType == 'text'){
          setinputType('password')
          setshowPassword(false)
        }else if(inputType == 'password'){
          setinputType('text')
          setshowPassword(true)
        }
      }

    return(
        <div className="flex flex-col space-y-4 relative text-zinc-900">
            <input type={inputType} placeholder={label} className='bg-white  outline-none
                rounded-xl py-2 px-4 w-52 h-8 placeholder-zinc-500'
                />
            {showPassword && type =='password' ?
                <MdOutlineVisibilityOff className='flex absolute -inset-y-1 right-4 my-auto cursor-pointer w-6 h-6 -top-3' onClick={handlePassword}/>
                : type == 'password' &&
                <MdOutlineVisibility className='flex absolute -inset-y-1 right-4 my-auto cursor-pointer w-6 h-6 -top-3' onClick={handlePassword}/>
            }
            
            

            {/* <p>{error}</p> */}
        </div>
      )
}
