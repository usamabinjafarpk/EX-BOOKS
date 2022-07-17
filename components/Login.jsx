import React from 'react'
import Signup from './Signup'
import Link from 'next/link'
import Input from './Input'
import { useAuthContext } from '@/store/Context';
import { signIn } from '@/lib/supabaseHelpers'

import InputText from '@/modules/Form/InputText';
import Layout from '@/modules/Layout/Layout';



export default function Login() {
  return (
    <div className="bg-zinc-900 w-screen h-screen flex flex-col justify-center items-center">
        {/* <img className="flex justify-start" src="EX-BOOKS.jpg"></img> */}
        <div className="bg-zinc-800 border border-zinc-700 rounded-lg 
         text-black  w-96 h-80 flex flex-col justify-center items-center
         space-y-3">
            <h1 className="text-xl">EX-BOOKS</h1>
            <Input label='Email' type='text' htmlFor='email'/>
            <Input label='Password' type='password' htmlFor='password'/>
             <div className='flex flex-col space-y-2'>
                <button className="btn ">Login</button> 
                <Link href="/signup">
                <button className="btn">New user</button>
                </Link>
                <a className="text-right">Forgot Password?</a>
             </div>
        </div>
    </div>
  )
}
