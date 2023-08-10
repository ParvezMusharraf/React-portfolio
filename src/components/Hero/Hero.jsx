import './hero.scss'

export default function Hero(props) {
  return (
    <div className='hero' id='hero'>
      <div className="text" id="text" >
        <h2>Hello, My name is</h2>
        <h1>{props.name}</h1>
        <p>and I am {props.role} with passion for building beautiful and user-friendly website   . </p>
    </div>
    <div className="right_img">
    <img src="https://themewagon.github.io/satner/img/banner/home-right.png" alt=""/>
    </div>
    </div>
  )
}
