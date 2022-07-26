import React from 'react'
import Header from './Header'
import Input from './Input'

export default function Sell() {
  return (
    <div>
        <Header/>
        <div className='h-screen text-white'>
            <div className='h-screen bg-black flex flex-col justify-center items-center space-y-3'>
            <h1 className='text-xl'>UPLOAD BOOK DETAILS HERE</h1>
            <h1>Book Name</h1>
        <Input label='Book Name' type='text' htmlFor='Bname'/>
        Author Name
        <Input label='Author Name' type='text' htmlFor='Aname'/>
        About Book
        <Input label='About Book' type='text' htmlFor='Desc'/>
        Upload cover picture
        <Input label='' type='file' htmlFor='pic'/>
       
        <button className='btn'>Submit</button>
            </div>
        
        </div>
    </div>
  )
}
