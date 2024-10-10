import './Home.css';
import barberPole from '../../images/icons/barbpole.gif';
import cityBeat from '../../images/icons/citybeat.png';
import bookIcon from '../../images/icons/book.png';
import ServicesSect from '../../components/ServicesSect/ServicesSect';

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
      <div className="window-content centered-content button-section">
        <button className="button">
          <a className="book-link" href="https://bellevuebarbershop.resurva.com/book">
            Book Appointment
          </a>
        </button>
      </div>

      {/* Centering the bookIcon */}
      <div className="centered-content book-icon-container">
        <img src={bookIcon} alt="Book Icon" className="bookIcon" />
      </div>

      <ServicesSect />
    </div>
  );
}

export default Home;
