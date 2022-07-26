import React from 'react'
import Link from 'next/link'
import Header from './Header'
import Input from './Input'
import RatingComponent from '../components/RatingComponent'
import { BiStar } from 'react-icons/bi'

export default function Review() {
  return (
    <div>
        <Header/>
        <div className="bg-black text-white flex flex-col justify-center items-center h-12">
            BOOK DETAILS
        </div>
        <div className="flex justify-center items-center pt-10 ">
        <div className="justify-content-center items-center flex border border-red-700 w-screen bg-lime-400 text-white ">
        <img className='h-60' src="secret.jpg"></img>
        <ol className="flex flex-col justify-center items-center space-x-5 space-y-5">
            <li className='text-3xl'>   The Secret</li>
            <li>By:Rhonda Byrne</li>  
            <li><Input label='Enter your Email' type='text' htmlFor='email'/></li>
            <li><Input label='Enter your review here...' type='text' htmlFor='review'/></li>
            <li className='border-emerald-50'><RatingComponent/></li>
            <li><button className='bg-black border text-white border-white  rounded-xl w-52 
                                    hover:bg-red-700 hover:border-red-900 hover:text-white;'>Submit</button></li>
        </ol>
            
        </div>
        </div>
    </div>
  )
}
