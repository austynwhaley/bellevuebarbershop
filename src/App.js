import './App.css';
import barberPole from './images/barbpole.gif'
import dogLogo from './images/bfaveic.png'

function App() {
  return (
    <div className="window">
      <div className="centered-content">
        <img src={barberPole} alt="Left Icon" className="side-image flipped-horizontal" />
        <h1>Bellevue Barbershop</h1>
        <img src={barberPole} alt="Right Icon" className="side-image" />
      </div>
      <div className="window-content centered-content">
        <p>Shorter hair or money back guaranteed!</p>
      </div>
      <div className="window-content centered-content">
      <button className="button">Book Appointment</button>
      </div>\
      <div className="window-content centered-content">
      <img src={dogLogo} alt="Right Icon" className="side-image" />
      </div>
    </div>
  );
}

export default App;
