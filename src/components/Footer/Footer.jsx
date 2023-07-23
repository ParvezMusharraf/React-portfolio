import  '../Footer/footer.scss'

export default function Footer() {
  return (
    <div className='footer'>
      <div className="heading">
        <i title="Connect" className="fa-solid fa-down-long"></i>
      </div>
    <div className="icons" >
    <a title="Github" href="https://github.com/ParvezMusharraf"><i class="fa-brands fa-github"></i></a>
    <a title="Twitter" href="https://twitter.com/"><i class="fa-brands fa-twitter "></i></a>
    <a title="Linkedin" href="https://www.linkedin.com/in/parvez-musharraf-a94533252/"><i class="fa-brands fa-linkedin"></i></a>
    <a title="Instagram" href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a>
    </div>
    <div className="footer">
          &copy; 2023 My Portfolio. All rights reserved.
    </div>
    </div>
  )
}
