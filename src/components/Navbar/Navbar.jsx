
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './navbar.scss'
import { Mail, Person } from '@mui/icons-material';


export default function Navbar({openMenu, setOpenMenu}) {
  return (
    <div className={"navbar " + (openMenu && "active")}>
    <div className="wrapper">
  <div className="left">
    <a href="#intro" className='logo'>Portfolio</a>
    <div className="itemContainer">
      <Person className="icon"/>
      <span title='You can call'>+91 7020543440</span>
    </div>
    <div className="itemContainer">
      <Mail className="icon"/>
      <span title="Email">parvezmusharraf61@gmail.com</span>
    </div>
  </div>
  <div className="right">
    <div title="Click" className="hamburger"onClick={()=>setOpenMenu(!openMenu)}>
    <span className='line1'></span>
    <span className='line2'></span>
    <span className='line3'></span>
    </div>
  </div>
</div>
</div>
  )
}
