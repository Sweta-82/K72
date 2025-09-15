import React, { useRef } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Navbar from '../../components/Navbar/Navbar'
import Marquee from '../../components/common/Marquee'
import Footer from '../../components/common/Footer'

import agencyHeroImg from '../assets/images/ageance hero img.jpg';
import img1 from '../assets/images/ageance hero img.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';
import img4 from '../assets/images/img4.jpg';
import img5 from '../assets/images/img5.jpg';
import img6 from '../assets/images/img6.jpg';
import img7 from '../assets/images/img7.jpg';
import img8 from '../assets/images/img8.jpg';


function Agence() {

  const imgesArray = [img1, img2, img3, img4, img5, img6, img7, img8];

  const imgDivRef = useRef(null);
  const sectionRef=useRef(null);
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(function(){
    gsap.to(imgDivRef.current,{
      scrollTrigger:{
        trigger:imgDivRef.current,
        markers:false,
        start: "top 18%",
        end:"top -240%",
        scrub:true,
        pin:true,
        // pinSpacing: true,
        // pinReparent:true,
        pinType:'transform',
        onUpdate:(e)=>{
          const imagesIndex=Math.floor(e.progress * (imgesArray.length-1));
          console.log(imgDivRef.current.src);
          imgDivRef.current.src=imgesArray[imagesIndex];
        }
      }
    })

    gsap.to('body', {
    backgroundColor: 'black',
    duration:5,
    scrollTrigger: {
      trigger: sectionRef.current,
      start: 'top -40%',
      end: 'bottom 40%',
      scrub: 2,
      markers: false,
    }

  });
  gsap.to(('.img-div2'),{
    y:-820,
    scrollTrigger: {
      trigger: '.page-3',
      start: 'top 40%',
      end: 'bottom 0%',
      scrub: 0.5,
      markers: false,
    }
  })
  })
  return (
    <>
    <Navbar svgColor='black' />
    <div className='fixed'>
    <div id="" className='section-1 py-1'>
      <div  className=''>
      <img ref={imgDivRef} className=' absolute bg-gray-500 overflow-hidden  w-[14.5vw] h-[45vh] rounded-[2vw] top-0  left-[30vw]  object-cover '
       src={agencyHeroImg} alt="" />
    </div>
    <div className='font-[font500] relative'>
      <div className='mt-[55vh]'>
        <h1 className='text-[20vw] text-center leading-[17vw] uppercase'>Soixan7e Douze</h1>
      </div>
      
        <div className=''>
        <p className='pl-[40%]   text-[4.5vw] leading-[5vw]'> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais<br></br> on la tue à long terme. C’est pour ça qu’on s’engage à donner de <br></br>la perspective, pour bâtir des marques influentes.</p>
        </div>
    </div>
    </div>
    <div className='section-2 h-[45vw] text-xl font-[font500] mt-35 '>
      <div className='flex justify-evenly  w-1/2 h-1/2 '>
      <p>Expertise</p>
      <div>
      <p>stategie</p>
      <p>Publicsite</p>
      <p>Breanding</p>
      <p>Design</p>
      <p>Contenu</p>
      </div>
      </div>
      <div className='flex  mr-[5vw] ml-[5vw] mt-10' ref={sectionRef}>
      <p className='px-[5vw] '>Nos projets_ naissent dans l’humilité, grandissent dans la curiosité et vivent grâce à la créativité sous toutes ses formes.</p>
      <p className='px-[5vw]'>Notre création_ bouillonne dans un environnement où le talent a le goût d’exploser. Où on se sent libre d’être la meilleure version de soi-même</p>
      <p className='px-[5vw]'>Notre culture_ c’est l’ouverture aux autres. Point. Tout l’équipage participe à bâtir une agence dont on est fiers. </p>
      </div>
   
    </div>
    <div className='page-3 h-[100vw] w-screen overflow-x-hidden flex justify-center items-center'>
        <Marquee 
        Img='https://i.pinimg.com/originals/66/d6/7b/66d67bf4a0e2bf1ab10c3983b7fd1c5d.gif'
        labal1='ROEYAERTS'
        labal2='planificateur stratégique principal'
        className='text-[#d3fd50] text-[6vw]  font-[font500] fixed'
        />
        
      <div className='w-[32vw] h-[48vw]  absolute bottom-[120]  '>
        <img src={img7} alt="" className='rounded-[2vw]' />
      </div>
      <div className='img-div2 w-[32vw] h-[48vw]   absolute bottom-0'>
        <img src={img7} alt="" className='overflow-hidden rounded-[2vw]' />
      </div>
      <div className='mt-10  w-screen'>
        <Marquee Img={''}
        labal1='ROEYAERTS'
        labal2='planificateur stratégique principal'
        className='text-white text-[2vw] font-[font500] fixed'
        />
      </div>
    </div>
        
        <Footer />
        </div>
    </>
  )
}



export default Agence




















