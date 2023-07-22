
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './navbar.scss'
import { Mail, Person } from '@mui/icons-material';


export default function Navbar({openMenu, setOpenMenu}) {
  return (
    <div className={"navbar " + (openMenu && "active")}>
    <div className="wrapper">
 <div className="left">
   <a href="#intro" className='logo'>genius.</a>
   <div className="itemContainer">
     <Person className="icon"/>
     <span>+91 7020543440</span>
   </div>
   <div className="itemContainer">
     <Mail className="icon"/>
     <span>parvezmusharraf61@gmail.com</span>
   </div>
 </div>
 <div className="right">
   <div className="hamburger"onClick={()=>setOpenMenu(!openMenu)}>
   <span className='line1'></span>
   <span className='line2'></span>
   <span className='line3'></span>
   </div>
 </div>
</div>

 {/* <a class="navbar-brand" href="#hero" >My Portfolio</a>
 <ul class="nav-links">
   <li><a class="nav-link" href="#hero">Home</a></li>
   <li><a class="nav-link" href="#about">About</a></li>
   <li><a class="nav-link" href="#services">Services</a></li>
   <li><a class="nav-link" href="#contact">Contact</a></li>
 </ul>
 <div class="icons" >
   <a href="https://github.com/"><i class="fa-brands fa-github"></i></a>
   <a href="https://twitter.com/"><i class="fa-brands fa-twitter "></i></a>
   <a href="https://www.linkedin.com/"><i class="fa-brands fa-linkedin"></i></a>
 </div> */}
</div>
  )
}
