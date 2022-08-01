
export default function BookDeatails({name, image, about, author}) {

  return (
    <div className="flex flex-col w-full">
        <div className="flex justify-center items-center h-12">
            BOOK DETAILS
        </div>
        <div className="justify-content-center items-center flex flex-col  ">
          <img className='h-60' src={image}/>
          <ol className="flex flex-col justify-center items-center space-x-5 ">
              <li className='text-3xl'>{name}</li>
              <li>{author}</li>
              <p>{about}</p>
          </ol>       
        </div>
    </div>
  )
}
