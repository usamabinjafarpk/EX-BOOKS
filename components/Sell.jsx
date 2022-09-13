import  { useEffect } from 'react'
import Header from './Header'
import Input from './Input'
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { supabase } from '../supabase';
import { addBook, sellBook } from '../helpers/Helpers';
import { useRouter } from 'next/router';


export default function Sell() {

  const { register, handleSubmit, formState: { errors } } = useForm()

  const [error, seterror] = useState(null)
  const [user, setuser] = useState(null)
  const [loading, setloading] = useState(false)


  const router = useRouter()

  const onSubmit = data => {
    data.seller = user.id
    addBook({data: data, seterror: seterror, router: router, setloading: setloading})
  }
  
  useEffect(() => {
    fetchUser()
  }, [])
  const fetchUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser()
    setuser(user)
  }
  
  return (
    <div>
        <Header/>
        <div className='h-screen text-white'>
            <form onSubmit={handleSubmit(onSubmit)} className='h-screen bg-black flex flex-col justify-center items-center space-y-3'>
              <h1 className='text-xl'>UPLOAD BOOK DETAILS HERE</h1>
              <h1>Book Name</h1>
              <Input label='Book Name' type='text' htmlFor='book_name' register={register} error={errors.book_name}/>
              Author Name
              <Input label='Author Name' type='text' htmlFor='author'register={register} error={errors.author}/>
              About Book
              <Input label='About Book' type='text' htmlFor='about' register={register} error={errors.about}/>
              Category
              <Input label='Category' type='text' htmlFor='category' register={register} error={errors.category}/>
              Cover picture
              <input className='bg-white  outline-none
                rounded-xl py-2 px-4 w-52 h-8 placeholder-zinc-500' 
                type="file" {...register('image', { required: 'Book Image field is required' })} />
              Book Price
              <Input label='Book Price' type='number' htmlFor='price' register={register} error={errors.price}/>
              <button className='btn' type='submit'>
                {loading ? 'Saving...' : 'Submit'}
              </button>
            </form>
        
        </div>
    </div>
  )
}
