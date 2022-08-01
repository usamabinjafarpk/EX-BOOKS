import React from 'react'
import Header from './Header'
import Input from './Input'
import { useForm } from 'react-hook-form';

export default function Sell() {

  const { register, handleSubmit, formState: { errors } } = useForm()
  
  return (
    <div>
        <Header/>
        <div className='h-screen text-white'>
            <div className='h-screen bg-black flex flex-col justify-center items-center space-y-3'>
            <h1 className='text-xl'>UPLOAD BOOK DETAILS HERE</h1>
            <h1>Book Name</h1>
        <Input label='Book Name' type='text' htmlFor='Bname' register={register} error={errors.Bname}/>
        Author Name
        <Input label='Author Name' type='text' htmlFor='Aname'register={register} error={errors.Aname}/>
        About Book
        <Input label='About Book' type='text' htmlFor='Desc' register={register} error={errors.Desc}/>
        Upload cover picture
        <Input label='' type='file' htmlFor='pic' register={register} error={errors.pic}/>
        Book Price
        <Input label='Book Price' type='number' htmlFor='price' register={register} error={errors.price}/>
        <button className='btn'>Submit</button>
            </div>
        
        </div>
    </div>
  )
}
