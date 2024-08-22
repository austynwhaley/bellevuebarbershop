import './Services.css';
import cutImg from '../../images/haircut.png'
import dogLogo from '../../images/bfaveic.png'
import pixCut from '../../images/pixcut.png'

function Services() {
    return (
      <div className="container">
        <div className="centered-content">
          <h1 className="serviceHeader">Services</h1>
        </div>

        <div className="services-columns">
          <div className="column">
            <h2>Haircuts</h2>
            <div className="services">
                <img src={cutImg} alt="Haircut" className="cut-image" />
            </div>
            <p>Classic cuts, fades, and modern styles.</p>
          </div>
          <div className="column">
            <h2>Shaves</h2>
            <div className="services">
                <img src={pixCut} alt="Haircut" className="cut-image" />
            </div>
            <p>Hot towel shaves for a clean, smooth look.</p>
          </div>
          <div className="column">
            <h2>Beard Trims</h2>
            <div className="services">
                <img src={dogLogo} alt="Haircut" className="cut-image doggie" />
            </div>
            <p>Precision trims to keep your beard sharp.</p>
          </div>
        </div>
  
      </div>
    );
  }
  
  export default Services;
  
