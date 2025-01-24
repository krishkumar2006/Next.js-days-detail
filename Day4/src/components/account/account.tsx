"use client"

import React from 'react'
import Image from 'next/image'
import accp from "../../../public/Image/accp.png"
import Link from 'next/link'



export default function Accountpage() {
  return (
    <div className=''>   
      
      <div className="flex justify-center relative">
      <Image src={accp} alt='account'className=" h-[316px] flex "></Image>
    
    
    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-extrabold text-[30px]'>
      MY ACCOUNT
      <br></br>
     <Link href=""> <p className='text-[20px] px-4 text-[black] font-light' > <span className='hover:underline '>Home</span><span className="text-xl px-2">→</span> 
     <span>my account</span>   
     </p> 
     </Link>
    </div>
    </div>
    <div>
    <div className='ml-[20%] space-y-4 '>
      <div className='text-3xl mt-9'>Log In</div>
      <div className=''>username or  email address</div>
      <input type='text' placeholder='' className='border-[grey] border-2 rounded-lg h-[50px] shadow-lg w-[20%]'></input>
<h1>Password</h1>
<input type='text' placeholder='' className='border-[grey] border-2 rounded-lg h-[50px] shadow-lg w-[20%]'></input>
<br></br>
<input type='checkbox'></input>
<span className='text-[15px] text-[grey] px-3'>Remenber me</span>
<br></br>
<button className='border-2 border-gray-800 rounded-md w-[100px] h-[50px] hover:bg-slate-400 hover:cursor-pointer hover:scale-105'>Log in</button>
<span className='px-5'>Lost your password?</span>


<div className='float-right -translate-y-72  relative -top-3    text-3xl mr-[40%] '>Register</div>
<span className='relative  left-[29%] -top-64'>Email</span>

<input className='relative left-[29%] -top-56  border-2 border-[grey] cursor-pointer h-[50] rounded -mx-px-'  type='text'  ></input>

<p className='relative left-[50%] -top-44'>A link to set a new password will be sent to your email address.
</p>

<p className='relative left-[50%] -top-44'> Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>

<button className='relative left-[50%] -top-44 w-[100px] border-2 h-[50px] border-black rounded-lg'> Register</button>

    </div>

    </div>
    </div>


  )
}

