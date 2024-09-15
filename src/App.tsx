import { Link } from 'react-router-dom'
import RightArrow from "./assets/RightArrow.svg";
import './App.css'
function App() {

  return (
    <div className='home-page'>
      <div className='splash-cta'>
        <video autoPlay muted loop className='cta-video'>
          <source src="/cta-video.webm" />
          {
            /*

             */
          }
        </video>
        <div className='text-cta'>
          <h1 className='cta-header-top'>Upgrade your Miata's Style</h1>
          <br />
          <h1 className='cta-header-bottom'>with the Ultimate, Affordable, Wink Mod</h1>
          <div className='cta-button-container'>
            <Link className='cta-button' to="/info">Learn More <RightArrow /> </Link>
            <Link className='cta-button' to="/gallery">See it in Action <RightArrow /> </Link>
          </div>
        </div>

        <p className='temp-video-notice'>
          Temporary example video footage found here: <br />
          <strong><a href="https://www.youtube.com/watch?v=kBX6aGvIQJU" target='_blank'>https://www.youtube.com/watch?v=kBX6aGvIQJU</a></strong> <br />
          <p><a href="https://www.youtube.com/@EverydayDriver" target='_blank'>@EverydayDriver</a> on YouTube</p>
        </p>
      </div>



    </div >
  )
}

export default App
