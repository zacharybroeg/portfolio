import React from 'react'
import './header.css'
import CallToAction from './CallToAction'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
   <header>
     <div className="container header__container">
       <h5>Hello I'm</h5>
       <h1>Zack Broeg</h1>
       <h5 className="text-light">Programmer</h5>
       <CallToAction />
       <HeaderSocials />
       <div className="me">
         <img src={ME} alt="me" />
       </div>
       <a href="#contact" className="scroll__down">Srcoll Down</a>
       
     </div>

   </header>
  )
}

export default Header