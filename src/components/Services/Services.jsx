import "../Services/services.scss"

export default function Services() {
  return (
    <div className='services' id='services'>
      <h2>My Services</h2>
    <section class="pro_services" id="pro_services">
      <div class="service">
        <p>
        <i class="fa-brands fa-html5 fa-3x "></i>
          <i class="fa-brands fa-css3-alt fa-3x"></i>
        </p>
        <h3>Html+Css development</h3>
        <p>Design Using Html Css </p>
      </div>
      <div class="service">
      <i class="fa-brands fa-square-js fa-3x"></i>
        <h3>JavaScript Development</h3>
        <p>Experties in javascript </p>
      </div>
      <div class="service">
        <i class="fa-brands fa-react fa-3x "></i>
        <h3>React Development</h3>
        <p>React is Future </p>
      </div>
    </section>
    </div>
  )
}
