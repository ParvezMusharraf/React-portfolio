import './menu.scss'
export default function Menu({openMenu,setOpenMenu}) {


  return (
    <div className={'menu '+(openMenu && "active")}>
         <ul>
        <li onClick={()=>setOpenMenu(false)}>
          <a title='Home' href="#hero">Home</a></li>
        <li onClick={()=>setOpenMenu(false)}>
          <a title='about' href="#about">About</a></li>
        <li onClick={()=>setOpenMenu(false)}>
          <a title='services' href="#services">Services</a></li>
        <li onClick={()=>setOpenMenu(false)}>
          <a title='Coming Soon' href="#Projects">Projects</a></li>
        <li onClick={()=>setOpenMenu(false)}>
          <a title='Contact Me' href="#contact">Contact</a></li>
      </ul>
    </div>
  )
}
