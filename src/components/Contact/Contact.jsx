import '../Contact/contact.scss'

export default function Contact() {
  return (
    <div className='contact' id='contact'>
      <section class="contact_left" id="contact_left">
      <h2>Contact Me</h2>
        <section class="Contact_icon">
        <div class="inner_icon">
          <i class="fa-solid fa-phone"></i>
          <p>7020543440</p>
        </div>
        <div class="inner_icon">
          <i class="fa-solid fa-envelope"></i>
          <p>parvezmusharraf61@gmail.com</p>
        </div>
        <div class="inner_icon">
          <i class="fa-sharp fa-solid fa-location-dot"></i>
          <p>VHB colony New tarfail akola,Maharashtra Pin 444001</p>
        </div>
        </section>
      </section>
      <section class="contact_right" id="contact_right">
      <form class="contact-form">
        <input type="text" placeholder="Name"/>
        <input type="text" placeholder="Email"/>
        <textarea placeholder="Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
    </div>
  )
}
