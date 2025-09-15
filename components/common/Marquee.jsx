import React from 'react';

function Marquee({ labal1 = "pour tout voir", labal2='pour tout voir', Img = '', className = '' }) {
  return (
    <div className={`movelink overflow-hidden w-full h-[8vw] font-[font500] uppercase text-[4vw]  ${className} `}>
      <div   className='moveX flex absolute '>
        {[...Array(2)].map((e, idx) => (
          <div key={idx} className=' w-full flex items-center justify-between'>
            <h1 className='whitespace-nowrap p-2'>{labal1}</h1>
            <div
              style={{
                backgroundImage: Img ? `url(${Img})` : 'none',
                backgroundRepeat: 'center',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
              }}
              className='h-[6vw] w-[18vw] rounded-full'>
              &nbsp;
            </div>
            <h1 className='whitespace-nowrap ${className}' >{labal2}</h1>
            <div
              style={{
                backgroundImage: `url(${Img})`,
                backgroundRepeat: 'center',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
              }}
              className='h-[6vw] w-[18vw] rounded-full'>
              &nbsp;
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
