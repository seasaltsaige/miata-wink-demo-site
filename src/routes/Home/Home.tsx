import { Link } from 'react-router-dom'
import RightArrow from "../../assets/RightArrow.svg";
import './Home.css'
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { useEffect, useState } from 'react';

const features = [
  ["the", "Ultimate"],
  ["an", "Affordable"],
  ["a", "Stylish"],
  ["the", "Iconic"],
  ["a", "Bold"],
  ["a", "Custom"],
];

function Home() {
  const { width } = useWindowDimensions();
  const [curr, setCurr] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCurr((last) => (last + 1) % features.length), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='home-page'>
      <div className='splash-cta'>
        <video playsInline disablePictureInPicture autoPlay muted loop className='cta-video'>
          <source src="/cta-video.mp4" />
        </video>
        <div className='text-cta'>
          <h1 className='cta-header-top'><strong>Upgrade</strong> your Miata's <strong>Style</strong></h1>
          {width > 750 ? <br /> : ""}
          <h1 className='cta-header-bottom'>with<span key={curr} className='cta-header-cycle'> {features[curr][0]} <strong>{features[curr][1]}</strong></span> Wink Mod</h1>
          <div className='cta-button-container'>
            <Link className='cta-button' to="/info">Learn More <RightArrow /> </Link>
            {/* <Link className='cta-button' to="/gallery">See it in Action <RightArrow /> </Link> */}
            {/* <Link className='cta-button' to="/contact">Get a Quote<RightArrow /> </Link> */}
          </div>
        </div>
        <p className='temp-video-notice'>
          Temporary, example video footage found here: <br />
          <strong><a href="https://www.youtube.com/watch?v=kBX6aGvIQJU" target='_blank'>https://www.youtube.com/watch?v=kBX6aGvIQJU</a></strong>
          <p style={{ margin: 0 }}><a href="https://www.youtube.com/@EverydayDriver" target='_blank'>@EverydayDriver</a> on YouTube</p>
        </p>
      </div>
    </div >
  )
}

export default Home;