import React from 'react'
import Button from './Button'
import { IoEarthOutline } from "react-icons/io5";
function Footer() {
  return (
    <div>
      <div className='w-full h-[30vw] bg-black p-[0.5vw] mt-5'>
      <div className=' flex gap-3'>
      <Button label='fb' className='font-[5vw]'/>
      <Button label='ig' className='font-[5vw]'/>
      <Button label='be' className='font-[5vw]'/>
      <div className='ml-auto'>
      <Button label='contact ♥' className='font-[5vw] '/>
      </div>
      </div>
      <div className='text-white flex justify-between mt-25 md:mt-55'>
        {/* only on desktop and larger */}
        {/* <span className='md:hidden mt-0 absolute'><IoEarthOutline /></span> */}
        <span  className='hover:text-[#d3fd50] '>MONTREAL_01:19:46</span>
        <span className='hover:text-[#d3fd50] hidden md:inline'>Politique de confidentialité</span>
        <span className='hover:text-[#d3fd50] '>Avis de confidentialité</span>
        <span className='hover:text-[#d3fd50] '>Rapport éthique</span>
      </div>
    </div>
    </div>
  )
}

export default Footer