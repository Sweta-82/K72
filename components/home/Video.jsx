import React from 'react'
import heroVideo from '../../src/assets/Videos/hero1.mp4'
function Video() {
  return (
    <>
        <video className='h-full w-full object-cover'
         autoPlay loop muted src={heroVideo} ></video>
    </>
  )
}

export default Video