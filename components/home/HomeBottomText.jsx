import React from 'react'
import { Link } from 'react-router-dom'
function HomeBottomText() {
  return (
    <> 
    <div className='flex justify-end mb-5'>
      <p className='w-1/5   text-white font-[font300] leading-[1.6vw]  pr-[0.5vw] text-sm'>
        K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle pour générer de l’émotion. Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.
      </p>
    </div>
    {/* </div> */}
    <div className='bottom-0 font-[font300] justify-center gap-[2vw] flex  text-white text-[7vw] uppercase '>
    <Link to='/project' className='border-4 border-white rounded-full px-5 hover:text-[#d3fd50] hover:border-[#d3fd50] leading-[7vw]  '>project</Link>
    <Link to='/agence' className='border-4 border-white rounded-full px-5  hover:text-[#d3fd50] hover:border-[#d3fd50] leading-[7vw] ' >agence</Link>
    </div>
    </>
  )
}

export default HomeBottomText