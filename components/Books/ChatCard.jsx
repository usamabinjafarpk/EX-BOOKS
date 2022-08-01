import { useRouter } from "next/router"

export default function ChatCard({sellerId, buyerId, sellerName}) {

    const router = useRouter()

    const handleRoute = () => {
        router.push({
            pathname: `/${router.asPath}/chat`,
            query: { buyer: buyerId, seller: sellerId },
          })
    }

    return (
        <div className='bg-white w-96 h-28 border rounded-lg flex flex-col justify-center items-center'>
            <h1 className="text-2xl">Seller Description</h1>
            <h4 className="text-lg">{sellerName}</h4>
            <button className='border border-zinc-900  rounded-md w-52 
            hover:bg-black hover:border-zinc-900 hover:text-white'
                onClick={handleRoute}>
                Chat with Seller
            </button>
        </div>
    )
}
