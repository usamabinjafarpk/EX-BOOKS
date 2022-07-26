import React from 'react'
import Header from "../components/Header"
import Link from 'next/link'

export default function BookDeatails() {
  return (
    <div>
        <Header/>
        <div className="bg-black text-white flex justify-center items-center h-12">
            BOOK DETAILS
        </div>
        <div className="flex justify-center items-center pt-10 ">
        <div className="justify-content-center items-center flex border border-red-700 w-screen bg-black text-white ">
        <img className='h-60' src="secret.jpg"></img>
        <ol className="flex flex-col justify-center items-center space-x-5">
            <li className='text-3xl'>   The Secret</li>
            <li>By:Rhonda Byrne</li>
            <h1>About</h1>
            <h1>Regarded as a life-changing book by many readers, the Secret by Rhonda Byrne is a self-help book that embarks to motivate the reader about a universal paradigm about success that can be achieved through it remains hidden for most people. The book explores about unveiling this little secret which may transform how people look at things and lead them on to the road of success and true happiness.According to the author, the book makes proper use of the 'law of attraction? and shows how positive thinking can open treasure trove of bountiful happiness, health and wealth. The book posits the law of attraction as a primeval law that completes the law of the universe (as well of our lives) through the process 'like attracts like?. The author is also of the view that as people think-and-feel, so do they send a corresponding frequency to the universe that in turn attracts events and circumstances of the same frequency. Hence, if one is always able to think positive and think right, naturally, one will obtain the best results always. In all this argument however, there is no scientific basis for the views expressed as to how such 'attraction' affect the biological and physical processes of the body.In propounding these provocative views, the book highlights visualization and gratitude as the two major powerful processes that help people manifest their dreams and desires. Although hailed by many as the secret to good life and better living, the book has also attracted some serious criticism, with many claiming it to be a 'highly controversial? book.</h1>
            <li>
              <Link href='/review'>
              <button className="pr-5 bg-slate-600 border text-white border-white w-24
                              hover:bg-red-700 hover:border-zinc-900 hover:text-white;">Rate/Review</button>
              </Link>
                              </li>
        </ol>       
        </div>
        </div>
    </div>
  )
}
