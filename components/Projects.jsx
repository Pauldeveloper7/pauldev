import React from 'react'
import VideocamIcon from '@mui/icons-material/Videocam';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AcUnitIcon from '@mui/icons-material/AcUnit';
const Projects = () => {
  return (
    <section className='flex justify-center items-center pt-[130px] flex-col gap-8'>
        <h1 className='text-3xl font-extrabold'>PROJECTS</h1>
      <div className='flex gap-8 font-extrabold'>
          <div className=" w-[280px] h-[280px] flex gap-7 flex-col justify-center bg-[#8A8582] rounded-xl items-center">
           <h3 >Video calling web app</h3>
           <VideocamIcon />
        </div>
        <div className=" w-[280px] h-[280px] flex gap-7 flex-col justify-center bg-[#8A8582] rounded-xl items-center">
          <h3>Ecommerce website</h3>
          <ShoppingCartIcon />
        </div>
        <div className=" w-[280px] h-[280px] flex gap-7 flex-col justify-center bg-[#8A8582] rounded-xl items-center">
         <h3>AI prompt sharing </h3>
         <AcUnitIcon />
        </div>
        </div>
    </section>
  )
}

export default Projects