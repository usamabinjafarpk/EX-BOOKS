import React from 'react'
import Input from './Input'

export default function Signup() {
  return (
    <div>
          <div className="bg-zinc-900 w-screen h-screen flex flex-col justify-center items-center">
        {/* <img className="flex justify-start" src="EX-BOOKS.jpg"></img> */}
        <div className="bg-zinc-800 border border-zinc-700 rounded-lg 
         text-black  w-96 h-96 flex flex-col justify-center items-center
         space-y-3">
            <h1 className="text-xl">EX-BOOKS</h1>
            <div className='flex flex-col space-y-2'>
            <Input label='First Name' type='text' htmlFor='fname'/>
            <Input label='Last Name' type='text' htmlFor='lname'/>
            <Input label='Email' type='text' htmlFor='email'/>
            <Input label='Password' type='password' htmlFor='password'/>
            </div>

           
             <div className='flex flex-col space-y-2'>
                <button className="btn ">Signup</button> 
                
             </div>
        </div>
    </div>
    </div>
  )
}


