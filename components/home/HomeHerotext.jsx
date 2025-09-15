import React from 'react'
import Video from './Video'

function HomeHerotext() {
  return (
    <div className='section-1 text-[9vw] leading-[9vw] pt-1 mb-2  text-white font-[font500] text-center uppercase '>
        <div className=' mt-10 sm:mt-0 '>L'étincelle</div>
        <div className='flex justify-center'>qui
            <div className='hidden sm:h-[18vh] w-[15vw] sm:inline rounded-full overflow-hidden '><Video /></div>
            génère</div>
        <div>la créativité</div>
    </div>
  )
}

export default HomeHerotext