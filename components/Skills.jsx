import Image from 'next/image'
import React from 'react'

const Skills = () => {
  return (
    <section className='w-[80%]  rounded-md bg-[#8A8582] flex flex-col gap-10 item-center justify-center text-center m-auto relative top-10 '>
        <div>
            <h1 className='text-3xl font-extrabold pt-6'>Skills </h1>
        </div>
        <div className='flex  gap-5 '>
       <div className=" m-auto flex gap-5 flex-col justify-center items-center">
        <h2 className='font-extrabold'>Web Designing </h2>
        <Image src={'images/webdesign.svg'} alt='Web designing' width={200} height={200}/>
       </div>
       <div className=" m-auto flex gap-5 flex-col justify-center items-center">
        <h2 className='font-extrabold'>Front end developement </h2>
        <Image src={'images/frontend.svg'} alt='Web designing' width={200} height={200}/>
       </div>       
       <div className=" m-auto flex gap-5 flex-col justify-center items-center">
        <h2 className='font-extrabold'>Back end developement </h2>
        <Image src={'images/backend.svg'} alt='Web designing' width={200} height={200}/>
       </div>        
       </div>
    </section>
  )
}

export default Skills