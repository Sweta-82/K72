import React, { useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'

function Stairs({children}) {
    const stairsParent = useRef(null)
    const location=useLocation();
    console.log(location.pathname);
    const appDiv=useRef(null);
  useGSAP(()=>{

    // document.body.style.overflow = 'hidden'
    
    const tl=gsap.timeline({
        // onComplete:()=>{
        //   document.body.style.overflow = 'auto'  
        // }
    });
    tl.to(stairsParent.current,{
      display:'block',
    //   delay:-0.1,
    })
    tl.from('.starirs',{
      height:0,
      stagger:{
        amount:-0.2
      },
      // duration:2,
    })
    tl.to('.starirs',{
      y:'100%',
      stagger:{
        amount:-0.2
      },
    })

    tl.to(stairsParent.current,{
      display:'none'
    })
    tl.to('.starirs',{
      y:'0%',
    })
    gsap.from(appDiv.current,{
      opacity:0,
    //   delay:1.5,
    //   duration:0.5,
      scale:1,
    })
  },[location])
  return (
  <>
  
  <div ref={stairsParent} >
      <div className=' h-screen w-screen flex fixed z-10'>
        <div className='starirs h-full w-1/4 bg-black'></div>
        <div className='starirs h-full w-1/4 bg-black'></div>
        <div className='starirs h-full w-1/4 bg-black'></div>
        <div className='starirs h-full w-1/4 bg-black'></div>        
      </div>
    </div>
    <div ref={appDiv}>
    {children}
    </div>
  </>
  )
}

export default Stairs