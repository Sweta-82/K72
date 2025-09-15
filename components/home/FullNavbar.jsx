import React, { useContext, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Marquee from '../common/Marquee';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Navcontext, { NavBarContext } from '../../src/context/Navcontext';
import Button from '../common/Button';

function FullNavbar() {
  const [open, setOpen] = useContext(NavBarContext);
  const fillNav = useRef(null);
  const navigate=useNavigate();
  const handleClick=(path)=>{
    setOpen(false);
    navigate(path);
  }
  const tl = useRef(null);
  useGSAP(() => {
    tl.current = gsap.timeline({ paused: true });
    tl.current.to('.link',{
      y:0,
      opacity: 1,
      stagger: 0, 
    });
    gsap.set('.link', {
      y: -10, opacity: 0 });
    gsap.set(fillNav.current, { 
      display: 'none' });
    }, []);

    useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      fillNav.current.style.display = 'flex'; 
      tl.current.play();
    } else {
      document.body.style.overflow = 'auto';
      tl.current.reverse().then(() => {
        fillNav.current.style.display = 'none'; 
      });
    }
  }, [open]);

  return (
    <div className=''>
      <div ref={fillNav}  className="text-white  fixed z-100 font-[font500] h-screen bg-red-0 w-full flex-col uppercase text-[8vw] inset-0 flex-wrap">
        <Navbar />
        <div></div>
        <div className="link bg-black text-center h-1/6 border-t-1 border-gray-500 flex justify-center items-center"></div>
        <div onClick={()=>handleClick('/project')} className="link group relative bg-black text-center h-1/6 border-t border-gray-500 flex justify-center items-center overflow-hidden">
          <div className='hover:opacity-0 w-full '>
          <h1 className="nav-h1 z-10 hover:opacity-0">project</h1>
        </div>
          <Marquee
            className="movelink text-[4.5vw] text-black absolute top-0 left-0 w-full opacity-0 transition-opacity duration-500 bg-[#d3fd50] text-center"
            Img="https://i.pinimg.com/originals/a2/b2/9f/a2b29f0577de8897aa845c7dc11f3d3b.gif"
          />
        </div>

        <div onClick={()=>handleClick('/agence')} className="link group relative bg-black text-center h-1/6 border-t border-gray-500 flex justify-center items-center overflow-hidden">
          <div className='hover:opacity-0 w-full '>
          <h1 className="nav-h1 z-10 hover:opacity-0">Agence</h1>
        </div>
          <Marquee
            className="movelink text-[4.5vw] text-black absolute top-0 left-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[#d3fd50]"
            Img="https://i.pinimg.com/originals/c5/eb/05/c5eb05561c26dcd11228ed33cd3e707c.gif"
          />
        </div>

        <div onClick={()=>handleClick('/contact')} className="link group relative bg-black text-center h-1/6 border-t border-gray-500 flex justify-center items-center overflow-hidden">
        <div className='hover:opacity-0 w-full '>
          <h1 className="nav-h1 z-10 hover:opacity-0">Contact</h1>
        </div>
          <Marquee
            className="movelink text-[4.5vw] text-black absolute top-0 left-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[#d3fd50]"
            Img="https://i.pinimg.com/originals/20/e9/22/20e92227c9b739044e377b3567cfdac0.gif"
          />
        </div>

        <Link className="link group relative bg-black text-center h-1/6 border-t border-gray-500 flex justify-center items-center overflow-hidden">
        <div className='hover:opacity-0 w-full '>
          <h1 className="nav-h1 z-10 hover:opacity-0">Blogue</h1>
        </div>
          <Marquee
            className="movelink text-[4.5vw] text-black absolute top-0 left-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[#d3fd50]"
            Img="https://i.pinimg.com/originals/98/81/5f/98815f30af15d94ab3dd1af44ef8e6a9.gif"
          />
        </Link>

        <div className="link bg-black text-sm font-[font300] text-center h-1/6 border-t-1 border-gray-500 flex justify-between  items-center ">
        <span  className='hover:text-[#d3fd50] '>MONTREAL_01:19:46</span>
        <span className='hover:text-[#d3fd50]  hidden sm:inline'>Politique de confidentialité</span>
        <span className='hover:text-[#d3fd50] hidden sm:inline'>Avis de confidentialité</span>
        <span className='hover:text-[#d3fd50] hidden sm:inline'>Rapport éthique</span>
        <div className='flex gap-5'>
          <Button label='fb' className='font-[2vw]'/>
          <Button label='ig' className='font-[2vw] '/>
          <Button label='be' className='font-[2vw]'/>
        </div>
        </div>
      </div>
    </div>
  );
}

export default FullNavbar;
