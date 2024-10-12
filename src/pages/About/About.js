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
    description: 'Owner - Kentucky & Ohio Master Barber. Reigning from Norwood, Ohio. Father of 2; Frankie and Ozzy. Husband of a beautiful lady, Chelsea. We have 2 dogs. A pug named Francisco and a wiener dog named Boogie. I call them my little grill out! Cincinnati Bengals season ticket holder and enjoys them win or lose. WHO DEY. When I’m not in the shop I’m cutting hair on country musician Zach Bryan’s tour. I have a lot of recommendations when it comes trying new places to eat. Traveled to every state besides Alaska and some different countries as well. Book with Travis soon!',
    imgSrc: travisHs,
    userName: 'bellevuebarbershop',
    carouselImages: [stock, placeHolder, hairCut]
  },
  {
    name: 'Sam',
    description: 'Master Barber. 26 years old reigning from the good ‘ol Blue Grass state and currently resides in our very own beautiful city of Bellevue. Sam enjoys all things Kentucky Wildcats. GO BIG BLUE. Sam books about 1.5 weeks out so book it quick!',
    imgSrc: samHs,
    userName: 'samuel.tbrown',
    carouselImages: [stock, placeHolder, hairCut]
  },
  {
    name: 'Mike',
    description: `Master Barber. Reigning from our very town - Bellevue Alumni. Former woodworker and music tour worker. He's restored antique furniture and traveled the country but now has a burning passion for barbering. Diehard Bengals fan who loves traveling and seeing live music. If you wanna have a good laugh and a great cut, book with "Big Mike" before it's too late!`,
    imgSrc: mikeHs,
    userName: 'bigmikesux',
    carouselImages: [stock, placeHolder, hairCut]
  },
  {
    name: 'Andrew',
    description: 'Master Barber. Andrew AKA Big Country. 6’8 jolly giant reigning from a Cattle Farm in Petersburg, KY. Enjoys being a father to a 3 year old little girl, Harper. Fan of most cars but especially Japanese imports and American Muscle. Harley enthusiast. Texas Longhorn college football fan. Fan of the hometown sports. Listener of any music that has meaning. Former construction worker who’s putting his hands to use for the community. Book with Andrew aka Big Country soon!',
    imgSrc: BcHs,
    userName: 'a_grant187',
    carouselImages: [stock, placeHolder, hairCut]
  },
  {
    name: 'Reese',
    description: 'Master Barber Reese Tanner reigns from the state of Indiana. 29 years young.  Former Army Officer, current hippie van lifer. He enjoys spending most of his time outdoors or playing guitar. Reese was one of the first haircuts done in this building now the tables have turned. Get in tune by booking with Reese soon.',
    imgSrc: reeseHs,
    userName: 'reesepaler',
    carouselImages: [stock, placeHolder, hairCut]
  },
  {
    name: 'Alex',
    description: `KY/OH/GA/NV Master Barber Alex is 34 years old and has been a master barber for 8 years. He loves to travel with his wife Emily and dogs. Enjoys going to bengals games. 90s hip hop is his go to. Always down to play some madden/ncaa on PlayStation. Book with Alex quick before it’s too late! `,
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
            <div className='imgContainer'><img src={person.imgSrc} alt={person.name} className="person-image" /></div>
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