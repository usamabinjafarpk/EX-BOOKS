import { useRouter } from 'next/router'
import { FiHeart } from 'react-icons/fi'

export default function BookCard({id, name, image, author, seller, sold}) {

    const router = useRouter()

    const handleRoute = ()=> {
        router.push(`/book/${id}`)
    }

    const Route = ()=> {
        router.push('/review')
    }


    return (
      
           <div className='h-72 w-44 bg-gray-800 flex flex-col  justify-between rounded-xl relative'>
                <div className='bg-red-600 absolute h-8 w-full top-0 flex justify-center items-center'>Sold</div>
                <img onClick={Route} className="h-40  cursor-pointer flex justify-center items-center rounded-t-xl" src={image}/>
                <div className='flex flex-col px-2'>
                    <h5 className='text-base text-white font-bold'>{name}</h5>
                    <p className='text-white'>{author}</p>   
                </div>
                <div className='flex justify-between px-4 py-2'>
                    <button className="px-4 py-2 bg-slate-600 border text-white border-white h-8 flex justify-center items-center
                                    hover:bg-red-700 hover:border-zinc-900 hover:text-white"
                        onClick={handleRoute}>
                        {seller ? 'View' : 'Buy'}
                    </button>
                    <FiHeart className='h-10 text-white w-6 hover:fill-red-700 hover:text-red-700'/>
                </div>
            </div>
 
    )
}
