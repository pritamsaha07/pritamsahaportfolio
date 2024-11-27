import React from 'react'
import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa"
import logo from "../assets/Refined_Abstract_Logo_PS.png"

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-6'>
        <div className='"flex flex-shrink-8 items-denter'>
            <a href="/" aria-label="Home">
            <img src={logo} className='mx-2' width={83} height={53} alt='logo'/> 
             </a>
        </div>
        <div className="m-8 flex item-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/pritam-saha-2b710b1a1/" target='_blank' rel='noopener noreferrer' aria-label='Linkedin'>
                <FaLinkedin/>
            </a>
       
      
            <a href="https://github.com/pritamsaha07" target='_blank' rel='noopener noreferrer' aria-label='Linkedin'>
                <FaGithub/>
            </a>
        
       
            <a href="https://www.instagram.com/pritamsaha___/" target='_blank' rel='noopener noreferrer' aria-label='Linkedin'>
                <FaInstagram/>
            </a>
        </div>
        
    </nav>
  )
}

export default Navbar
