import Header from "../components/Header"
import Footer from "../components/Footer"
import Login from "../components/Login"
import Link from "next/link"
import { useState } from "react"
import Signup from "../components/Signup"
import Main from "../components/Main"
import Rating from "../components/RatingComponent"

export default function Home() {
  return (
    <div>
      <Header/>
      <Main/>
      <Footer/>
     
      {/* <Login/> */}
      {/* <Signup/> */}
    </div>
  
     
  )
}
