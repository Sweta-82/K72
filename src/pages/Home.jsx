import React from 'react'
import Video from '../../components/home/Video'
import HomeHerotext from '../../components/home/HomeHerotext'
import HomeBottomText from '../../components/home/HomeBottomText'
import Navbar from '../../components/Navbar/Navbar'
function Home() {
  return (
    <>
     <div
     className='h-full w-screen bg-black fixed'>
        <Video/>
     </div>
     <div className='flex h-full w-full relative flex-col justify-between bottom-0 '>
        <HomeHerotext/>
        <HomeBottomText/>
     </div> 
    </>
  )
}

export default Home