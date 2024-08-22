import './Services.css';

function Services() {
    return (
      <div className="container">
        <div className="centered-content">
          <h1 className="serviceHeader">Services</h1>
        </div>
        <div className="serviceItems">
        <p className="disclaim centered-content">Add a hot towel to any service for $5.</p>
          <div className="service-item">
            <div className="section">
              <h2>Haircuts - $30</h2>
              <p>Classic cuts, fades, and modern styles.</p>
            </div>
          </div>
          <div className="service-item">
            <div className="section">
              <h2>Beard Trims - $20</h2>
              <p>Precision trims to keep your beard sharp.</p>
            </div>
          </div>
          <div className="service-item">
            <div className="section">
              <h2>Haircut & Beard Trims - $45 </h2>
              <span className='flash'>*SAVINGS!*</span>
              <p> - Includes headshaves</p>
              <p> - Add Hot Towel +$5</p>
              <p> - With straight razor +$10.</p>
            </div>
          </div>
          <div className="service-item">
            <div className="section">
              <h2>Straight Razor Skin Fade - $40</h2>
              <p> A sleek and precise fade achieved with a straight razor for a sharp, professional look.</p>
            </div>
          </div>
          <div className="service-item">
            <div className="section">
              <h2>Razor Skin Fade & Beard Trim - $55</h2>
              <p>A polished look featuring a clean skin fade with a neatly trimmed beard for a sharp and refined appearance.</p>
            </div>
          </div>
          <div className="service-item">
            <div className="section">
              <h2> Straight Razor Skin Fade & Beard Trim - $65</h2>
              <p> - Straight Razor used for a closer and more precise shave.</p>
            </div>
          </div>
          <div className="service-item">
            <div className="section">
              <h2>Straight Razor Face Shave - $50</h2>
              <p>An old-school, close shave using a straight razor for an exceptionally smooth and clean finish.</p>
            </div>
          </div>
          <div className="service-item">
            <div className="section">
              <h2>Haircut & Clean Face Shave - $75</h2>
              <p>A fresh haircut paired with a smooth, clean shave for a complete, polished look.</p>
            </div>
          </div>
          <div className="service-item">
            <div className="section">
              <h2>Senior Discount - $25</h2>
              <p>- On haircuts and head shaves.</p>
            </div>
          </div>
          
        </div>
      </div>
    );
}

export default Services;
