
export default function SingleMessageCard({host, userName, userId, message}) {

    return (
      <div className={`flex flex-col py-2 bg-zinc-800 rounded-2xl rounded-tl-lg px-4 
        ${ host == userId ? 'justify-self-end': 'justify-self-start'} `}>
          {host != userId && <p className='text-sm text-rose-700 font-medium'>{userName}</p> }
          <p className='text-sm font-bold' >{message}</p>
      </div>
    )
  }