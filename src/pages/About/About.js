import Slider from 'react-slick';
import './About.css'; // Ensure your CSS is included here
import placeHolder from '../../images/placeholder.jpg';
import instagramIcon from '../../images/instagramlogo.png';
import stock from '../../images/placeholder-image.jpg';
import hairCut from '../../images/haircut.png';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true
};


const people = [
  {
    name: 'Travis',
    description: 'Description for person 1.',
    imgSrc: placeHolder,
    userName: 'dogassmf',
    carouselImages: [stock, placeHolder, hairCut]
  },
  {
    name: 'Mike',
    description: 'Description for person 2.',
    imgSrc: placeHolder,
    userName: 'bigmikesux',
    carouselImages: [stock, placeHolder, hairCut]
  },
  {
    name: 'Big Country',
    description: 'Description for person 3.',
    imgSrc: placeHolder,
    userName: 'a_grant187',
    carouselImages: [stock, placeHolder, hairCut]
  },
  {
    name: 'Sam',
    description: 'Description for person 4.',
    imgSrc: placeHolder,
    userName: 'samuel.tbrown',
    carouselImages: [stock, placeHolder, hairCut]
  },
  {
    name: 'Reese',
    description: 'Description for person 5.',
    imgSrc: placeHolder,
    instagram: 'https://instagram.com/person5',
    userName: 'reesepaler',
    carouselImages: [stock, placeHolder, hairCut]
  },
  {
    name: 'Alex',
    description: 'Description for person 6.',
    imgSrc: placeHolder,
    userName: 'alexthebarber86_',
    carouselImages: [stock, placeHolder, hairCut]
  }
];

function About() {
  return (
    <div className="window">
      <div className="centered-content">
        <h1 className='shopHeader'>About Us</h1>
      </div>

      <div className="window-content centered-content">
        <p>filler text for about me</p>
      </div>

      <div className="people-grid">
        {people.map((person, index) => (
          <div key={index} className="person-card">
            <img src={person.imgSrc} alt={person.name} className="person-image" />
            <h2>{person.name}</h2>
            <p>{person.description}</p>
            <a href={`https://instagram.com/${person.userName}`} target="_blank" rel="noopener noreferrer" className="instagram-link">
              <img src={instagramIcon} alt="Instagram" className="instagram-icon" />
              {person.userName}
            </a>
            <Slider {...carouselSettings}>
              {person.carouselImages.map((image, i) => (
                <div key={i} className="carousel-slide">
                  <img src={image} alt={`Slide ${i}`} className="carousel-image" />
                </div>
              ))}
            </Slider>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;