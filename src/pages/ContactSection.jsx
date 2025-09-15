import React, { useRef } from 'react'
import Marquee from '../../components/common/Marquee'
import Button from '../../components/common/Button'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all'
function ContactSection() {
  const marqueDiv=useRef(null);
  const marqueDivAnimation=useRef(null);
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(() => {
  gsap.to(marqueDiv.current, {
    scrollTrigger: {
      trigger: marqueDiv.current,
      start: "top 50%",
      end: "bottom 0%",
      scrub: true,
      markers: false,
    },
    rotate: -15,
    transformOrigin: 'center center', 
  });
});

  return (
    <>
    <div className=' bg-black w-full h-[1000px] text-white overflow-x-hidden '>
        <p className='text-5xl text-center uppercase font-[font300] pt-15 text-[12vw] sm:pt-2 sm:text-[10vw] sm:leading-[8.5vw]'>
            Pour<br></br>
            parler de<br></br>
            votre<br></br>
            projet
        </p>
        <div className='sm:flex sm:justify-between pr-[4vw] pl-[4vw] mt-4 text-center'>
        <p className='mb-5'>Dans un écran ou un bureau.<br></br>
        Chez vous. Chez nous.<br></br>
        Partout.<br></br>
        </p>
        <p>
          525 Av. Viger O - Suite 400<br></br>
          Montréal, QC H2Z 1G6 →<br></br>
        </p>
        </div>
        <div ref={marqueDiv}
        onMouseEnter={()=>{
            marqueDivAnimation.current.style.height='0%'
        }}
        onMouseLeave={()=>{
            marqueDivAnimation.current.style.height='100%'
        }}
        className=' h-[8vw] flex items-center bg-white top-0  rotate-3 mt-5 '>
        <div ref={marqueDivAnimation} className='w-full bg-[#d3fd50] overflow-hidden transition-all fixed top-0'>
        </div>
            <Marquee
            Img='https://i.pinimg.com/originals/66/d6/7b/66d67bf4a0e2bf1ab10c3983b7fd1c5d.gif'
            labal1='ROEYAERTS'
            labal2='planificateur stratégique principal'
            className='text-[5vw] text-black font-[font500]'
            />
        </div>

        <div className='mt-30 text-center'>
          <p className='mb-5'>Suivez-nous</p>
          <div className='flex justify-center gap-2'>
          <Button label='fb' className='font-[5vw]'/>
          <Button label='ig' className='font-[5vw]'/>
          <Button label='be' className='font-[5vw]'/>
          </div>
        </div>
    </div>
    </>
  )
}

export default ContactSection