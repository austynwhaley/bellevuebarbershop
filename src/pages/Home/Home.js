import './Home.css';
import barberPole from '../../images/barbpole.gif';
import cityBeat from '../../images/citybeat.png';
import ServicesSect from '../../components/ServicesSect/ServicesSect';
import { HashLink as Link } from 'react-router-hash-link'

function Home() {
  return (
    <div className="window">
      <div className="window-content centered-content">
        <img src={cityBeat} alt="city beat" className="flashing-image overlapping-image" />
      </div>
      <div className="centered-content">
        <img src={barberPole} alt="Left Icon" className="side-image flipped-horizontal" />
        <h1 className='shopHeader'>Bellevue Barbershop</h1>
        <img src={barberPole} alt="Right Icon" className="side-image" />
      </div>
      <div className="window-content centered-content">
        <p>Shorter hair or money back guaranteed!</p>
      </div>
      <div className="window-content centered-content">
        <button className="button">
          <Link className="nav-link" to="/booking">
            Book Appointment
          </Link></button>
      </div>
      <ServicesSect />
    </div>
  );
}

export default Home;
