
import étoile from "../assets/images/star-icon.png";
import jobsInformatique from "../../../server/database/data/jobsInformatique.json";
import jobsAdministration from "../../../server/database/data/jobsAdministation.json";
import jobsCommerce from "../../../server/database/data/jobsCommerce.json";
import jobsMedical from "../../../server/database/data/jobsMedical.json";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Jobs = () => {
  // flèches droite et gauche avec le package slider 
  const CustomPrevArrow = (props) => (
    <button {...props} className="slick-arrow slick-prev" aria-label="Previous">
      <svg className="svg-icon" viewBox="0 0 20 20">
        <path fill="#6B46C1" d="M14.1 17.7l-7-7a.996.996 0 0 1 0-1.4l7-7c.4-.4 1-.4 1.4 0s.4 1 0 1.4L9.4 10l5.1 5.3c.4.4.4 1 0 1.4-.2.2-.6.3-.9.3z"/>
      </svg>
    </button>
  );

  const CustomNextArrow = (props) => (
    <button {...props} className="slick-arrow slick-next" aria-label="Next">
      <svg className="svg-icon" viewBox="0 0 20 20">
        <path fill="#6B46C1" d="M5.9 17.7l7-7c.4-.4.4-1 0-1.4l-7-7c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4L10.6 10 5.5 15.3c-.4.4-.4 1 0 1.4.3.4.7.4 1.1 0z"/>
      </svg>
    </button>
  );

  // Configurations du carrousel avec le package slider de React
  const sliderSettings = {
    dots: false, // Retirer les dots
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Section recherche avec les boutons des catégories  */}
      <section className="mt-16 mx-4 pb-10 text-center p-4 bg-gray-100 rounded-lg shadow text-black border border-black">
        <img src={étoile} alt="étoile" className="mx-auto w-10 h-12 mb-4" />
        <h1 className="text-l font-xs">Trouvez la formation qui vous correspond</h1>
        <div className="mt-2 flex justify-center">
          <input
            type="text"
            placeholder="Recherchez une formation..."
            className="w-1/2 p-2 rounded-full border border-black text-purple-800"
          />
        </div>
        <div className="mt-4 flex justify-center space-x-4">
          <button className="px-4 text-black rounded-lg shadow border border-black hover:bg-purple-700 hover:text-white transition duration-300">Informatique</button>
          <button className="px-4 py-2 text-black rounded-lg shadow border border-black hover:bg-purple-700 hover:text-white transition duration-300">Commerce</button>
          <button className="px-4 py-2 text-black rounded-lg shadow border border-black hover:bg-purple-700 hover:text-white transition duration-300">Administration</button>
          <button className="px-4 py-2 text-black rounded-lg shadow border border-black hover:bg-purple-700 hover:text-white transition duration-300">Médical</button>
        </div>
      </section>

      {/* 4 Sections des offres de job */}
      <section className="mt-8 mx-4 pb-10">
        <h2 className="text-xl font-semibold text-center mb-4">Informatique</h2>
        <Slider {...sliderSettings} className="space-x-4">
          {jobsInformatique.map((job, index) => (
            <div key={index} className="p-4 bg-gray-100 rounded-lg shadow border border-black relative">
              <img src={job.photo} alt={job.title} className="w-full h-40 object-cover mb-4" />
              <h3 className="text-lg font-semibold">{job.title}</h3>
              <div className="text-sm text-gray-600 mb-2">{job.characteristics.join(" ")}</div>
              <button className="absolute right-4 bottom-4 px-4 py-2 text-white bg-purple-700 rounded-lg shadow-lg border border-black hover:bg-purple-800 hover:border-purple-800 transition duration-300">Voir</button>
            </div>
          ))}
        </Slider>
      </section>

      <section className="mt-8 mx-4 pb-10">
        <h2 className="text-xl font-semibold text-center mb-4">Administration</h2>
        <Slider {...sliderSettings}>
          {jobsAdministration.map((job, index) => (
            <div key={index} className="p-4 bg-gray-100 rounded-lg shadow border border-black relative">
              <img src={job.photo} alt={job.title} className="w-full h-40 object-cover mb-4" />
              <h3 className="text-lg font-semibold">{job.title}</h3>
              <div className="text-sm text-gray-600 mb-2">{job.characteristics.join(" ")}</div>
              <button className="absolute right-4 bottom-4 px-4 py-2 text-white bg-purple-700 rounded-lg shadow-lg border border-black hover:bg-purple-800 hover:border-purple-800 transition duration-300">Voir</button>
            </div>
          ))}
        </Slider>
      </section>

      <section className="mt-8 mx-4 pb-10 ">
        <h2 className="text-xl font-semibold text-center mb-4">Commerce</h2>
        <Slider {...sliderSettings}>
          {jobsCommerce.map((job, index) => (
            <div key={index} className="p-4 bg-gray-100 rounded-lg shadow border border-black relative">
              <img src={job.photo} alt={job.title} className="w-full h-40 object-cover mb-4" />
              <h3 className="text-lg font-semibold">{job.title}</h3>
              <div className="text-sm text-gray-600 mb-2">{job.characteristics.join(" ")}</div>
              <button className="absolute right-4 bottom-4 px-4 py-2 text-white bg-purple-700 rounded-lg shadow-lg border border-black hover:bg-purple-800 hover:border-purple-800 transition duration-300">Voir</button>
            </div>
          ))}
        </Slider>
      </section>

      <section className="mt-8 mx-4 pb-10">
        <h2 className="text-xl font-semibold text-center mb-4">Médical</h2>
        <Slider {...sliderSettings}>
          {jobsMedical.map((job, index) => (
            <div key={index} className="p-4 bg-gray-100 rounded-lg shadow border border-black relative">
              <img src={job.photo} alt={job.title} className="w-full h-40 object-cover mb-4" />
              <h3 className="text-lg font-semibold">{job.title}</h3>
              <div className="text-sm text-gray-600 mb-2">{job.characteristics.join(" ")}</div>
              <button className="absolute right-4 bottom-4 px-4 py-2 text-white bg-purple-700 rounded-lg shadow-lg border border-black hover:bg-purple-800 hover:border-purple-800 transition duration-300">Voir</button>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default Jobs;
