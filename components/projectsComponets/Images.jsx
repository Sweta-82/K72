import React from 'react'

function Images({ leftChildren, rightChildren, leftImg = '', rightImg = '', height = 'h-[450px]' }) {
  
  return (
    <div className={`relative flex gap-1 w-full ${height}`}>
      <div style={{ backgroundImage: `url(${leftImg})` , backgroundRepeat: 'center', backgroundPosition: 'center',
          backgroundSize: 'cover' }} className={`group w-1/2 h-full hover:rounded-4xl duration-150 relative flex items-center justify-center overflow-hidden`}>
        <div className='absolute top-0 left-0 h-full w-full bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
          {leftChildren}
        </div>
      </div>
      <div style={{ backgroundImage: `url(${rightImg})`, backgroundRepeat: 'center', backgroundPosition: 'center',
          backgroundSize: 'cover'  }}  className={`group w-1/2 h-full hover:rounded-4xl duration-150 relative flex items-center justify-center overflow-hidden`}>
        <div className='absolute top-0 left-0 h-full w-full bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
          {rightChildren}
        </div>
      </div>
    </div>
  )
}

export default Images
