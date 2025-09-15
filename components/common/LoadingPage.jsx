import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Home from '../../src/pages/Home';
import App from '../../src/App';
import Stairs from './Stairs';

function LoadingPage() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
        const timer=setTimeout(()=>{
            setIsLoading(false);
        },3000);
        return()=> clearTimeout(timer);
    },[])
    if(isLoading){
        return (
          <>
          <div className='bg-black h-screen w-full flex  items-center '>
            <img src="https://i.pinimg.com/originals/4d/e0/43/4de043324013817f035722682e3d1fc3.gif" alt="Loading..." className=' bg-cover ' />
          </div>
          </>
        )
    }
    return(
        <>
        <Stairs>
        <App/>
        </Stairs>
        </>
    )

}

export default LoadingPage