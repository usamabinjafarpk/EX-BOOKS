import { useRouter } from "next/router"

export default function SellerChatCard({ buyerId, buyerName}) {

    const router = useRouter()

    const handleRoute = () => {
        router.push(`${router.asPath}/chat/${buyerId}`)
    }

    return (
        <div className='px-8 py-2 bg-zinc-200 rounded-lg flex flex-col justify-center items-center'>
            <h4 className="text-lg">{buyerName}</h4>
            <button className='border border-zinc-900  rounded-md w-52 
            hover:bg-black hover:border-zinc-900 hover:text-white'
                onClick={handleRoute}>
                Chat with {buyerName}
            </button>
        </div>
    )
}
