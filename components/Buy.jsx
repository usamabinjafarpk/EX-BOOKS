import React from 'react'
import Header from '../components/Header'

export default function Buy() {
  return (
    <div>
        <div>
        <Header/>
    <div className='bg-slate-900 min-h-screen flex flex-col justify-center items-center'>
        
        <div className='bg-slate-500 w-4/5 h-96 border rounded-lg'>
            <div className='flex flex-row justify-between p-24'>

         <select name='test' className='w-64 h-9 border rounded-xl'>
            <option value ="">select one</option>
            <option value ="aaa">2 Books</option>
            <option value ="bbb">3 Books</option>
            <option value ="ccc">4 Books</option>
            <option value ="ddd">5 Books</option>
        </select>

        <select name='test' className='w-64 h-9 border rounded-xl'>
            <option value ="">select one</option>
            <option value ="aaa">1 Month</option>
            <option value ="aaa">2 Month</option>
            <option value ="bbb">3 Month</option>
            <option value ="ccc">4 Month</option>
            <option value ="ddd">5 Month</option>
        </select>
            </div>

        <div className='flex flex-col justify-center items-center p-24'>
            <button className='btn '>Rs.300/.</button>
            
        </div>

        </div>
        
    </div>
         
    </div>
  
    </div>
  )
}
