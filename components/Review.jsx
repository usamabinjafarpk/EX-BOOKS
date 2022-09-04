import React from 'react'
import Link from 'next/link'
import Header from './Header'
import Input from './Input'
import RatingComponent from '../components/RatingComponent'
import { BiStar } from 'react-icons/bi'
import { useForm } from 'react-hook-form';


export default function Review({id, name, image, author}) {

  const { register, handleSubmit, formState: { errors } } = useForm()

  return (
    <div>
        <Header/>
        <div className="bg-black text-white flex flex-col justify-center items-center h-12">
            BOOK DETAILS
        </div>
        <div className="flex justify-center items-center pt-10 ">
        <div className="justify-content-center items-center flex border border-red-700 w-96 bg-lime-400 text-black ">
        <img className='h-60' src="https://wallpapercave.com/wp/wp6668685.jpg"/>
        <ol className="flex flex-col justify-center items-center space-x-5 space-y-5">
            <li className='text-3xl'> Rich Dad Poor Dad</li>
            <li>By:Robert Kiyosaki</li>  
            <li><Input label='Enter your Email' type='text' htmlFor='email' register={register} error={errors.email}/></li>
            <li><Input label='Enter your review here...' type='text' htmlFor='review' register={register} error={errors.review}/></li>
            <li className='border-emerald-50'><RatingComponent/></li>
            <li><button className='bg-black border text-white border-white  rounded-xl w-52 
                                    hover:bg-red-700 hover:border-red-900 hover:text-white;'>Submit</button></li>
        </ol>
            
        </div>
        </div>
    </div>
  )
}
