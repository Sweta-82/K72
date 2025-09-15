import React from 'react'
import { Link } from 'react-router-dom'
function Button({  to = '/', label = ' click me',children, className=''}) {
  return (
    <div>
        <Link 
            to={to} 
            className={`px-7 py-1  border-white border-2 rounded-full hover:text-[#d3fd50] hover:border-[#d3fd50]  text-white uppercase font-[font500] ${className} text-[4vw]`}>
            {children? children:label}
        </Link>
    </div>
  )
}

export default Button