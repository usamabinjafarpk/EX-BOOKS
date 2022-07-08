import React from 'react'
import {BsFacebook} from "react-icons/bs"
import {AiFillInstagram} from "react-icons/ai"
import {MdEmail} from 'react-icons/md'
import {IoMdCall} from "react-icons/io"

export default function Footer() {
  return (
      <div className="w-min-screen item-center bg-slate-800 flex text-white space-x-7 justify-between z-index-1">
        <div className='space-x-12'>
        <h1>ABOUT US</h1>
          <ul>
            <li><button>privacy policy</button></li>
            <li><button>Terms of Service</button></li>
            <li><button>Community Guidelines</button></li>
            <li><button>Contact Us</button></li>
          </ul>
        </div>
        <div className='space-x-7'>
          <h1>FOLLOW US</h1>
          <ul className="flex space-x-5">
          <li><button> <BsFacebook/></button></li>
          <li><button><AiFillInstagram/></button></li>
          <li><button> <MdEmail/> </button></li>
          <li><button> <IoMdCall/> </button></li>
         
           
          </ul>

        </div>
      </div>
    
  )
}
