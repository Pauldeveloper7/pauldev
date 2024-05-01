'use client'
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
const Navbar = () => {
  const router = useRouter()
  const [handleclick, setHandleclick] = useState(false)
  return (
    <section className='w-full h-20 flex justify-between items-center pr-8 pl-8 '>
        <div>
            <Image src={'images/logo.svg'} alt={'Logo '} width={35}  height={35} onClick={router.push('/')}/>
        </div>
        <div><h3>PAULDEV</h3></div>
        <div>
            <ul className=' flex gap-8 max-sm:hidden' >
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/'}>About</Link></li>
                <li><Link href={'/'}>Contact Us</Link> </li>
                <li><Link href={'/'}>Blogs </Link></li>
                <li><Link href={'/'}>Portfolio </Link></li>
                <li><Link href={'/'}>Resume </Link></li>
            </ul>
        <div className="menu sm:hidden">
          {
            handleclick? (
              <CloseIcon className='text-black' onClick={()=>{setHandleclick(!handleclick)}} />
            ):(
              <MenuIcon className='text-black' onClick={()=>{setHandleclick(!handleclick)}} />
            )
          }
        </div>
        {handleclick &&(
          <ul className='h-full w-full absolute  right-0 flex  flex-col justify-center items-center   bg-white gap-10 ' >
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/'}>About</Link></li>
                <li><Link href={'/'}>Contact Us</Link> </li>
                <li><Link href={'/'}>Blogs </Link></li>
                <li><Link href={'/'}>Portfolio </Link></li>
                <li><Link href={'/'}>Resume </Link></li>
          </ul>
        )}
        </div>
    </section>
  )
}

export default Navbar