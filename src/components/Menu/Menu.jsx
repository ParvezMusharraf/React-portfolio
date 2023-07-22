import './menu.scss'
export default function Menu({openMenu,setOpenMenu}) {
  return (
    <div className={'menu '+(openMenu && "active")}>
         <ul>
        <li>
          <a href="#hero">Home</a></li>
        <li>
          <a href="#about">About</a></li>
        <li>
          <a href="#services">Services</a></li>
        <li>
          <a href="#Projects">Projects</a></li>
        <li>
          <a href="#contact">Contact</a></li>
      </ul>
    </div>
  )
}
