import React from 'react'
import Review from '../components/Review'
import { useState,useEffect } from 'react'

import {getBooks } from "../helpers/Helpers"

export default function review() {





  const [bookData, setbookData] = useState(null)

  useEffect(() => {
    getBooks(setbookData)
  }, [])

  console.log(bookData);

  return (
    <div>
        <Review key={bookData?.id} id={bookData?.id} name={bookData?.book_name} image={bookData?.image}/>
        
    </div>
  )
}
