import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Images from '../../components/projectsComponets/Images'
import Button from '../../components/common/Button'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Footer from '../../components/common/Footer'

import imgDiv1 from '../../src/assets/images/img-div1.jpg';
import imgDiv2 from '../../src/assets/images/img-div2.jpg';
import imgDiv3 from '../../src/assets/images/img-div3.jpg';
import imgDiv4 from '../../src/assets/images/img-div4.jpg';
import imgDiv5 from '../../src/assets/images/img-div5.jpg';
import imgDiv6 from '../../src/assets/images/img-div6.jpg';
import imgDiv7 from '../../src/assets/images/img-div7.jpg';
import imgDiv8 from '../../src/assets/images/img-div8.jpg';
import imgDiv9 from '../../src/assets/images/img-div9.jpg';
import div8 from '../../src/assets/images/div-8.jpg';
import div9 from '../../src/assets/images/div-9.jpg';


const projects = [
  {
    leftImg: imgDiv1,
    rightImg: imgDiv2,
    leftBtnLabel: 'Voir le projet 1',
    rightBtnLabel: 'Voir le projet 1'
  },
  {
    leftImg: imgDiv3,
    rightImg: imgDiv4,
    leftBtnLabel: 'Voir le projet 2',
    rightBtnLabel: 'Voir le projet 1'
  },
  {
    leftImg: imgDiv5,
    rightImg: imgDiv6,
    leftBtnLabel: 'Voir le projet 3',
    rightBtnLabel: 'Voir le projet 1'
  },
  {
    leftImg: imgDiv7,
    rightImg: imgDiv8,
    leftBtnLabel: 'Voir le projet 3',
    rightBtnLabel: 'Voir le projet 1'
  },
  {
    leftImg: imgDiv9,
    rightImg: div8,
    leftBtnLabel: 'Voir le projet 3',
    rightBtnLabel: 'Voir le projet 1'
  },
  {
    leftImg: div9,
    rightImg: imgDiv9,
    leftBtnLabel: 'Voir le projet 3',
    rightBtnLabel: 'Voir le projet 1'
  },
];

function Project() {


  gsap.registerPlugin(ScrollTrigger)
  useGSAP(()=>{
    gsap.from('.hero',{
      height:'10px',
      // scaleX:-2,
      transformOrigin: 'center center',
      stagger:{
        amount:0,
      },
      scrollTrigger:{
        trigger:'.p-div',
        markers:false,
        start:'top 100%',
        end:'top -300%',
        scrub:true,
       }
    })
  })
  return (
    <>
    <Navbar svgColor='black' />
    <div className=''>
      <div className=' pt-[18vw] pl-3 text-[14vw]  font-[font500] uppercase'>
      <h1>projects
        <sup className='font-font[300] text-blue-700'>16</sup>
      </h1>
      {/* <span>16</span> */}
      </div>
      {/* upper */}
      <div className=' gap-1 w-full pt-5 -mt-13  p-div'>
        {projects.map((e,idx)=>(
        <div className="hero mt-2" key={idx}>
        <Images
        leftImg={e.leftImg}
        rightImg={e.rightImg}
        leftChildren={<Button label={e.leftBtnLabel} className=' text-[3vw]' />}
        rightChildren={<Button label={e.leftBtnLabel}  className='text-[3vw]'/>}
        />
        </div>
        ))}
      </div>
    </div>

    <Footer/>

    </>
  )
}

export default Project