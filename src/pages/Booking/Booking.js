import './Booking.css';

function Booking() {
  return (
    <div className="window">
      <div className="centered-content">
        <h1 className='shopHeader'>Booking!!</h1>
      </div>

      <div className="window-content centered-content">
      <iframe src="https://bellevuebarbershop.resurva.com/book?embedded=true" name="resurva-frame" frameborder="0" width="450" height="450" style={{maxWidth:"100%"}}></iframe>
      </div>
    </div>
  );
}

export default Booking;
