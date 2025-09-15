import React from 'react'
import ContactSection from './ContactSection'
import Navbar from '../../components/Navbar/Navbar'

function Contact() {
  return (
    <div>
      <ContactSection/>
      {[...Array(20)].map((e,i)=>(
        <ContactSection key={i}/>
      ))}
      
    </div>
  )
}

export default Contact