import './About.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

//carsouel
import placeHolder from '../../images/placeholder.jpg';
import stock from '../../images/placeholder-image.jpg';
import hairCut from '../../images/icons/haircut.png';

//icons
import instagramIcon from '../../images/icons/instagramlogo.png';

//team photos
import teamPhoto1 from '../../images/photos/Bellevue Barbershop - Phil Armstrong -44.jpg';
import teamPhoto2 from '../../images/photos/Bellevue Barbershop - Phil Armstrong -49.jpg';
import teamPhoto3 from '../../images/photos/Bellevue Barbershop - Phil Armstrong -58.jpg';
import teamPhoto4 from '../../images/photos/Bellevue Barbershop - Phil Armstrong -60.jpg';
import teamPhoto5 from '../../images/photos/Bellevue Barbershop - Phil Armstrong -65.jpg';
import teamPhoto6 from '../../images/photos/Bellevue Barbershop - Phil Armstrong -69.jpg';
import teamPhoto7 from '../../images/photos/Bellevue Barbershop - Phil Armstrong -72.jpg';
import teamPhoto8 from '../../images/photos/Bellevue Barbershop - Phil Armstrong -104.jpg';

//headshots
import mikeHs from '../../images/photos/mike-headshot.jpg'
import travisHs from '../../images/photos/travis-headshot.jpg'
import BcHs from '../../images/photos/bc-headshot.jpg'
import samHs from '../../images/photos/sam-headshot.jpg'
import reeseHs from '../../images/photos/reese-headshot.jpg'
import alexHs from '../../images/photos/alex-headshot.jpg'



const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  adaptiveWidth: true
};

const teamPhotos = [
  teamPhoto1,
  teamPhoto2,
  teamPhoto3,
  teamPhoto4,
  teamPhoto5,
  teamPhoto6,
  teamPhoto7,
  teamPhoto8,
];


const barbers = [
  {
    name: 'Travis',
    description: 'Description for person 1.',
    imgSrc: travisHs,
    userName: 'dogassmf',
    carouselImages: [stock, placeHolder, hairCut]
  },
  {
    name: 'Sam',
    description: 'Description for person 4.',
    imgSrc: samHs,
    userName: 'samuel.tbrown',
    carouselImages: [stock, placeHolder, hairCut]
  },
  {
    name: 'Mike',
    description: 'Description for person 2.',
    imgSrc: mikeHs,
    userName: 'bigmikesux',
    carouselImages: [stock, placeHolder, hairCut]
  },
  {
    name: 'Andrew',
    description: 'Description for person 3.',
    imgSrc: BcHs,
    userName: 'a_grant187',
    carouselImages: [stock, placeHolder, hairCut]
  },
  {
    name: 'Reese',
    description: 'Description for person 5.',
    imgSrc: reeseHs,
    instagram: 'https://instagram.com/person5',
    userName: 'reesepaler',
    carouselImages: [stock, placeHolder, hairCut]
  },
  {
    name: 'Alex',
    description: 'Description for person 6.',
    imgSrc: alexHs,
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
        <p>Meet the team</p>
      </div>

      <div className='group-photo'>
        <Slider className="slider" {...carouselSettings}>
          {teamPhotos.map((image, i) => (
            <div key={i} className="about-carousel-slide">
              <img src={image} alt={`Slide ${i}`} className="about-carousel-image" />
            </div>
          ))}
        </Slider>
      </div>

      <div className="barbers-grid">
        {barbers.map((person, index) => (
          <div key={index} className="person-card">
            <h2>{person.name}</h2>
            <img src={person.imgSrc} alt={person.name} className="person-image" />
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