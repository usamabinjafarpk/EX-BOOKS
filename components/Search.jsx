import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { supabase } from '../supabase'

export default function Search({label}) {

  const { register, handleSubmit, formState: { errors } } = useForm()

  const router = useRouter()

  const [searchData, setsearchData] = useState(null)
  const [loading, setloading] = useState(false)


  const onSubmit = async (d) => {
    console.log(d);
    setsearchData(null)
    setloading(true)
    const author = await supabase.from('books').select('id, book_name, author').textSearch('author', `${d.search}`, {
      config: 'english',
    })
    const name = await supabase.from('books').select('id, book_name, author').textSearch('book_name', `${d.search}`, {
      config: 'english',
    })
  
    let data = []
    author?.data?.length > 0 && author?.data?.map((item)=> data.push(item))
    name?.data?.length > 0 && name?.data?.map((item)=> data.push(item))
    console.log(data);
    setsearchData(data)
    setloading(false)
  }

  return (
    <div className='flex relative'>
      <form className='flex' onSubmit={handleSubmit(onSubmit)}>
          <input placeholder={'Search book name, author'} type="text" {...register('search')} className='bg-white  outline-none
        rounded-xl pl-5 px-4 w-72 h-8 placeholder-zinc-500'
        />
            <input value='Submit' type='submit' className='relative cursor-pointer h-8 flex justify-center items-cente'/>
            
      </form>
      <div className='absolute flex flex-col space-y-2 text-white top-14 bg-white left-36 w-96'>
          {searchData?.map((item)=>
            <div className='flex flex-col bg-zinc-800 px-2 cursor-pointer' onClick={()=>router.push('/book/'+item?.id)}>
                <p className='text-sm font-semibold'>{item?.book_name}</p>
                <p className='text-xs'>{item?.author}</p>
            </div>
          )}
          {searchData?.length == 0 && <p className='text-zinc-900'>No match found</p>}
          {loading && <p className='text-zinc-900'>Loading...</p>}
        </div>
      </div>
  )
}
