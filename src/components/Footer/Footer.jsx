import  '../Footer/footer.scss'

export default function Footer() {
  return (
    <div className='footer'>
      <div className="heading">
        <h5>Connect Me with</h5>
        <i class="fa-solid fa-down-long"></i>
      </div>
    <div class="icons" >
    <a href="https://github.com/"><i class="fa-brands fa-github"></i></a>
    <a href="https://twitter.com/"><i class="fa-brands fa-twitter "></i></a>
    <a href="https://www.linkedin.com/"><i class="fa-brands fa-linkedin"></i></a>
    <a href="https://www.linkedin.com/"><i class="fa-brands fa-instagram"></i></a>
    </div>
    <div className="footer">
          &copy; 2023 My Portfolio. All rights reserved.
    </div>
    </div>
  )
}
