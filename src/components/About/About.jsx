import '../About/about.scss'

export default function About() {
  return (
    <div className='about' id='about'>
      <section class="about_left " id="about-left">
      <h2>About Me</h2>
      <p>Hello there I have completed my bachlors degree in <strong>BCA</strong> last year and I am a Front-End
        developer, and I love to write a code for web development, and i have experties in such languages and
        technologys, HTML, Css, javascript, reactjs, Bootstrap, git/github. </p>
      <button><a href="#contact">Contact now</a></button>
    </section>
    <section class="about_right " id="about_right">
      <p>html</p>
      <div class="container">
        <div class="skills html"><span>90%</span></div>
      </div>

      <p>CSS</p>
      <div class="container">
        <div class="skills css"> <span>80%</span> </div>
      </div>

      <p>JavaScript</p>
      <div class="container">
        <div class="skills js"> <span>65%</span></div>
      </div>

      <p>React</p>
      <div class="container">
        <div class="skills reactjs "><span>40%</span></div>
      </div>

      <p>Bootstrap</p>
      <div class="container">
        <div class="skills bootstrap "><span>70%</span></div>
      </div>
      <p>Git/Github</p>
      <div class="container">
        <div class="skills git "><span>65%</span></div>
      </div>
    </section>
    </div>
  )
}
