import React from 'react'
import Link from 'next/link'
import Input from './Input'
import { useState} from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form';
import { supabase } from '../supabase'





export default function Login() {

  const router = useRouter()


  const { register, handleSubmit, formState: { errors } } = useForm()

  const [error, seterror] = useState(null)
  const [loading, setloading] = useState(false)

  const onSubmit = async (data) => {
      seterror(null)
      setloading(true)
      const {error} = await supabase.auth.signInWithPassword({email: data.email, password: data.password})
      setloading(false)
      error ? seterror(error) : router.replace('/')
  }



  return (
    <div>
    {/* <img className='w-screen h-screen' src='login.jpg'></img> */}
        
          <div style={{backgroundImage: 'url(login6.jpg)'}} className="h-screen w-screen flex flex-col justify-center items-center">
        <form className="bg-transparent border border-white rounded-lg 
         text-black  w-96 h-80 flex flex-col justify-center items-center
         space-y-3"onSubmit= {handleSubmit(onSubmit)}>
            <h1 className="text-white text-2xl">EX-BOOKS</h1>
            <h1 className="text-white text-2xl">Let's learn together</h1>
            <Input label='Email' type='text' htmlFor='email' register={register} error={errors['email']}/>
            <Input label='Password' type='password' htmlFor='password' register={register} error={errors['password']}/>
             <div className='flex flex-col space-y-2'>
                <button className="btn ">{loading ? 'Loading...' : 'Login' }</button> 
                <Link href="/signup">
                <button className="btn">New user</button>
                </Link>
                <a className="text-right text-white">Forgot Password?</a>
             </div>
        </form>
    </div>
    </div>
  )
}
