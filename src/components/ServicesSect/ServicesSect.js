import './ServicesSect.css';
import cutImg from '../../images/icons/haircut.png'
import pixCut from '../../images/icons/pixcut.png'

function ServicesSect() {
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
            <p>Haircuts & facial hair grooming</p>
          </div>
          <div className="column">
            <h2>Shaves</h2>
            <div className="services">
                <img src={pixCut} alt="Haircut" className="cut-image" />
            </div>
            <p>Hot towels, Straight Razor, and Hot shaves</p>
          </div>
        </div>
  
      </div>
    );
  }
  
  export default ServicesSect;
  
