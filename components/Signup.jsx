import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

import { signUp } from '../helpers/Helpers';
import Select from '../components/Select';


import Input from './Input'

export default function Signup() {

  const router = useRouter()


  const { register, handleSubmit, formState: { errors } } = useForm()

  const [error, seterror] = useState(null)
  const [loading, setloading] = useState(false)

  const onSubmit = async (data) => {
    seterror(null)
    setloading(true)
    await signUp({email: data.email, password: data.password, metadata: data, seterror: seterror, router: router})
    setloading(false)
  }



  return (
    <div>
          <div style={{backgroundImage: 'url(login6.jpg)'}}  className=" w-screen h-screen flex flex-col justify-center items-center">
        {/* <img className="flex justify-start" src="EX-BOOKS.jpg"></img> */}
        <form className="bg-transparent border border-white rounded-lg 
         text-black  w-96 h-3/6 flex flex-col justify-center items-center
         space-y-3" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-white text-xl">EX-BOOKS</h1>
            <h1 className="text-white text-2xl">Let's learn together</h1>
            <div className='flex flex-col space-y-2'>
            <Input label='Full Name' type='text' htmlFor='name' register={register}/>

            <Input label='Email' type='text' htmlFor='email' register={register} error={errors.email}/>
            <Input label='Password' type='password' htmlFor='password' register={register} error={errors.password}/>
            <Select label='Gender' name='gender' register={register} error={errors.gender}/>
            <Input label='Phone Number' type='tel' htmlFor='phone' register={register} error={errors.phone}/>
            <Input label='Address' type='text' htmlFor='address' register={register} error={errors.address}/>
            <Input label='Pincode' type='number' htmlFor='pincode' register={register} error={errors.pincode}/>
            </div>

           
             <div className='flex flex-col space-y-2'>
                <button type='submit' className="btn ">{loading ? 'Loading...' : 'Signup' }</button> 
                
             </div>
             { error && <p className='text-rose-600 text-center text-base'>{error}</p> }
        </form>
    </div>
    </div>
  )
}


