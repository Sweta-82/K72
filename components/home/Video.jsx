import React from 'react'

function Video() {
  return (
    <>
        <video className='h-full w-full object-cover'
         autoPlay loop muted src="src/assets/Videos/hero1.mp4" ></video>
    </>
  )
}

export default Video