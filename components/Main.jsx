import React from 'react'
import {FiHeart} from "react-icons/fi"
import Link from 'next/link'

export default function Main() {
  return (
    <div className="bg-slate-200 min-h-screen min-w-max flex px-12 py-8">
        <div className="grid grid-cols-7 gap-8 justify-items-center place-content-center">

            <div className='border border-zinc-700 h-52 w-36 bg-gray-800 flex flex-col justify-center '>
                <Link href="/book_details">
                <img className="h-40  cursor-pointer flex justify-center items-center" src='Dc.webp'/>
                </Link>
                <div className='flex justify-between pr-3'>
                  <Link href='/buy'>
                  <button className="mx-4 my-2 bg-slate-600 border text-white border-white w-10
                                  hover:bg-red-700 hover:border-zinc-900 hover:text-white;">Buy</button>
                  </Link>
                  <FiHeart className='h-10 w-6 hover:fill-red-700 hover:text-red-700'/>
                </div>
            </div>
              <div className='border border-zinc-700 h-52 w-36 bg-gray-800 flex flex-col justify-center '>
                <Link href="/book_details">
                <img className="h-40  cursor-pointer flex justify-center items-center" src='90days.webp'/>
                </Link>
                <div className='flex justify-between pr-3'>
                  <button className="mx-4 my-2 bg-slate-600 border text-white border-white w-10
                              hover:bg-red-700 hover:border-zinc-900 hover:text-white;">Buy</button>
                  <FiHeart className='h-10 w-6 hover:fill-red-700 hover:text-red-700'/>
                </div>     
              </div>

              <div className='border border-zinc-700 h-52 w-36 bg-gray-800 flex flex-col justify-center '>
                <Link href="/book_details">
                <img className="h-40  cursor-pointer flex justify-center items-center" src='aadu.jpg'/>
                </Link>
                <div className='flex justify-between pr-3'>
                  <button className="mx-4 my-2 bg-slate-600 border text-white border-white w-10
                              hover:bg-red-700 hover:border-zinc-900 hover:text-white;">Buy</button>
                  <FiHeart className='h-10 w-6 hover:fill-red-700 hover:text-red-700'/>
                </div>  
              </div>

              <div className='border border-zinc-700 h-52 w-36 bg-gray-800 flex flex-col justify-center '>
                <Link href="/book_details">
                <img className="h-40  cursor-pointer flex justify-center items-center" src='alchemist.jpg'/>
                </Link>
                <div className='flex justify-between pr-3'>
                  <button className="mx-4 my-2 bg-slate-600 border text-white border-white w-10
                              hover:bg-red-700 hover:border-zinc-900 hover:text-white;">Buy</button>
                  <FiHeart className='h-10 w-6 hover:fill-red-700 hover:text-red-700'/>
                </div>  
              </div>

              <div className='border border-zinc-700 h-52 w-36 bg-gray-800 flex flex-col justify-center '>
                <Link href="/book_details">
                <img className="h-40  cursor-pointer flex justify-center items-center" src='career.jpg'/>
                </Link>
                <div className='flex justify-between pr-3'>
                  <button className="mx-4 my-2 bg-slate-600 border text-white border-white w-10
                              hover:bg-red-700 hover:border-zinc-900 hover:text-white;">Buy</button>
                  <FiHeart className='h-10 w-6 hover:fill-red-700 hover:text-red-700'/>
                </div>  
              </div>
              

              <div className='border border-zinc-700 h-52 w-36 bg-gray-800 flex flex-col justify-center '>
                <Link href="/book_details">
                <img className="h-40  cursor-pointer flex justify-center items-center" src='khasak.jpg'/>
                </Link>
                <div className='flex justify-between pr-3'>
                  <button className="mx-4 my-2 bg-slate-600 border text-white border-white w-10
                              hover:bg-red-700 hover:border-zinc-900 hover:text-white;">Buy</button>
                  <FiHeart className='h-10 w-6 hover:fill-red-700 hover:text-red-700'/>
                </div>  
              </div>

              <div className='border border-zinc-700 h-52 w-36 bg-gray-800 flex flex-col justify-center '>
                <Link href="/book_details">
                <img className="h-40  cursor-pointer flex justify-center items-center" src='orma.jpg'/>
                </Link>
                <div className='flex justify-between pr-3'>
                  <button className="mx-4 my-2 bg-slate-600 border text-white border-white w-10
                              hover:bg-red-700 hover:border-zinc-900 hover:text-white;">Buy</button>
                  <FiHeart className='h-10 w-6 hover:fill-red-700 hover:text-red-700'/>
                </div>  
              </div>

              

              <div className='border border-zinc-700 h-52 w-36 bg-gray-800 flex flex-col justify-center '>
                <Link href="/book_details">
                <img className="h-40  cursor-pointer flex justify-center items-center" src='rich.jpg'/>
                </Link>
                <div className='flex justify-between pr-3'>
                  <button className="mx-4 my-2 bg-slate-600 border text-white border-white w-10
                              hover:bg-red-700 hover:border-zinc-900 hover:text-white;">Buy</button>
                  <FiHeart className='h-10 w-6 hover:fill-red-700 hover:text-red-700'/>
                </div>  
              </div>

              <div className='border border-zinc-700 h-52 w-36 bg-gray-800 flex flex-col justify-center '>
                <Link href="/book_details">
                <img className="h-40  cursor-pointer flex justify-center items-center" src='secret.jpg'/>
                </Link>
                <div className='flex justify-between pr-3'>
                  <button className="mx-4 my-2 bg-slate-600 border text-white border-white w-10
                              hover:bg-red-700 hover:border-zinc-900 hover:text-white;">Buy</button>
                  <FiHeart className='h-10 w-6 hover:fill-red-700 hover:text-red-700'/>
                </div>  
              </div>

              <div className='border border-zinc-700 h-52 w-36 bg-gray-800 flex flex-col justify-center '>
                <Link href="/book_details">
                <img className="h-40  cursor-pointer flex justify-center items-center" src='thepower.jpg'/>
                </Link>
                <div className='flex justify-between pr-3'>
                  <button className="mx-4 my-2 bg-slate-600 border text-white border-white w-10
                              hover:bg-red-700 hover:border-zinc-900 hover:text-white;">Buy</button>
                  <FiHeart className='h-10 w-6 hover:fill-red-700 hover:text-red-700'/>
                </div>  
              </div>

              <div className='border border-zinc-700 h-52 w-36 bg-gray-800 flex flex-col justify-center '>
                <Link href="/book_details">
                <img className="h-40  cursor-pointer flex justify-center items-center" src='bnd.jpg'/>
                </Link>
                <div className='flex justify-between pr-3'>
                  <button className="mx-4 my-2 bg-slate-600 border text-white border-white w-10
                              hover:bg-red-700 hover:border-zinc-900 hover:text-white;">Buy</button>
                  <FiHeart className='h-10 w-6 hover:fill-red-700 hover:text-red-700'/>
                </div>  
              </div>

              <div className='border border-zinc-700 h-52 w-36 bg-gray-800 flex flex-col justify-center '>
                <Link href="/book_details">
                <img className="h-40  cursor-pointer flex justify-center items-center" src='summer.webp'/>
                </Link>
                <div className='flex justify-between pr-3'>
                  <button className="mx-4 my-2 bg-slate-600 border text-white border-white w-10
                              hover:bg-red-700 hover:border-zinc-900 hover:text-white;">Buy</button>
                  <FiHeart className='h-10 w-6 hover:fill-red-700 hover:text-red-700'/>
                </div>  
              </div>

              <div className='border border-zinc-700 h-52 w-36 bg-gray-800 flex flex-col justify-center '>
                <Link href="/book_details">
                <img className="h-40  cursor-pointer flex justify-center items-center" src='sum.webp'/>
                </Link>
                <div className='flex justify-between pr-3'>
                  <button className="mx-4 my-2 bg-slate-600 border text-white border-white w-10
                              hover:bg-red-700 hover:border-zinc-900 hover:text-white;">Buy</button>
                  <FiHeart className='h-10 w-6 hover:fill-red-700 hover:text-red-700'/>
                </div>  
              </div>

              <div className='border border-zinc-700 h-52 w-36 bg-gray-800 flex flex-col justify-center '>
                <Link href="/book_details">
                <img className="h-40  cursor-pointer flex justify-center items-center" src='proposal.webp'/>
                </Link>
                <div className='flex justify-between pr-3'>
                  <button className="mx-4 my-2 bg-slate-600 border text-white border-white w-10
                              hover:bg-red-700 hover:border-zinc-900 hover:text-white;">Buy</button>
                  <FiHeart className='h-10 w-6 hover:fill-red-700 hover:text-red-700'/>
                </div>  
              </div>
   
        </div>

    </div>
  )
}
