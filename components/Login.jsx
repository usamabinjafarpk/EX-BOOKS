import React from 'react'
import Signup from './Signup'
import Link from 'next/link'
import Input from './Input'
import { useState} from 'react'
import { useAuthContext } from '../store/Context';
import { signIn } from '../helpers/Helpers';
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form';





export default function Login() {

  const router = useRouter()

  const { setuser, setsession } = useAuthContext()

  const { register, handleSubmit, formState: { errors } } = useForm()

  const [error, seterror] = useState(null)
  const [loading, setloading] = useState(false)

  const onSubmit = async (data) => {
      seterror(null)
      setloading(true)
      const {user, session, error} = await signIn({email: data.email, password: data.password})
      setloading(false)
      setuser(user)
      setsession(session)
      error ? seterror(error) : router.replace('/')
  }



  return (
    <div className="bg-zinc-900 w-screen h-screen flex flex-col justify-center items-center">
        {/* <img className="flex justify-start" src="EX-BOOKS.jpg"></img> */}
        <form className="bg-zinc-800 border border-zinc-700 rounded-lg 
         text-black  w-96 h-80 flex flex-col justify-center items-center
         space-y-3"onSubmit= {handleSubmit(onSubmit)}>
            <h1 className="text-xl">EX-BOOKS</h1>
            <Input label='Email' type='text' htmlFor='email' register={register} error={errors['email']}/>
            <Input label='Password' type='password' htmlFor='password' register={register} error={errors['password']}/>
             <div className='flex flex-col space-y-2'>
                <button className="btn ">{loading ? 'Loading...' : 'Login' }</button> 
                <Link href="/signup">
                <button className="btn">New user</button>
                </Link>
                <a className="text-right">Forgot Password?</a>
             </div>
        </form>
    </div>
  )
}
