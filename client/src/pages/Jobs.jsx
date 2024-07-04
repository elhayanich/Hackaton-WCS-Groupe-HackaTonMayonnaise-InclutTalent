
import étoile from "../assets/images/star-icon.png";
import jobsInformatique from "../../../server/database/data/jobsInformatique.json";
import jobsAdministration from "../../../server/database/data/jobsAdministation.json";
import jobsCommerce from "../../../server/database/data/jobsCommerce.json";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Link } from "react-router-dom";



const Jobs = () => {
  const responsive = {
    0: { items: 1 },
    576: { items: 2 },
    1024: { items: 4 },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Section recherche avec la barre de recherche et filtre */}
      <section className="mt-16 mx-4 pb-10 text-center p-4 bg-Grey rounded-lg shadow text-black border border-black">
        <img src={étoile} alt="étoile" className="mx-auto w-10 h-12 mb-4" />
        <h1 className="text-xl font-bold">Trouvez l'emploi qui vous correspond</h1>
        <div className="mt-4 flex justify-center space-x-4">
  <input
    type="text"
    placeholder="Recherchez par job, mot-clé..."
    className="w-1/2 p-2 rounded-lg border border-black text-purple-600"
  />
  <input
    type="text"
    placeholder="France..."
    className="w-1/6 p-2 rounded-lg border border-black text-purple-600"
  />
  <input
    type="text"
    placeholder="CDI, CDD ..."
    className="w-1/6 p-2 rounded-lg border border-black text-purple-600"
  />
  <button className="w-1/6 p-2 rounded-lg border border-black bg-Purplee text-white">
    Filtrer
  </button>
</div>
      </section>

      {/* Section des offres de job avec React Alice Carousel */}
      <section className="mt-10 mx-5 pb-10">
        <h2 className="text-xl font-bold text-left ml-12 mb-4">Informatique</h2>
        <AliceCarousel
          items={jobsInformatique.map((job, index) => (
            <div key={index} className="relative p-4 bg-Greyy rounded-lg shadow border border-black" style={{ width: '20rem', height: '25rem' }}>
              <img src={job.photo} alt={job.title} className="w-full h-40 object-cover mb-4 bg-white" />
              <h3 className="text-lg font-semibold">{job.title}</h3>
              <div className="text-sm text-Purplee mb-2">{job.characteristics.join(" ")}</div>
              <div className="text-sm text-gray-600 mb-2">{job.description}</div>
              <Link to={`/joboffer`}>
                <button className="absolute bottom-4 right-4 px-4 py-2 text-white bg-Purplee rounded-lg shadow-lg border border-black hover:bg-Purplee hover:border-purple-800 transition duration-300">Voir</button>
              </Link>
            </div>
          ))}
          responsive={responsive}
          autoPlay
          autoPlayInterval={2000}
        />
      </section>

      {/* Section Administration */}
      <section className="mt-8 mx-4">
        <h2 className="text-xl font-bold text-left ml-12  mb-4">Administration</h2>
        <div className="bg-Lightblue pt-4">
        <AliceCarousel 
          items={jobsAdministration.map((job, index) => (
            <div key={index} className="relative p-4 bg-Greyy rounded-lg shadow border border-black" style={{ width: '20rem', height: '25rem' }}>
              <img src={job.photo} alt={job.title} className="w-full h-40 object-cover mb-4 bg-white" />
              <h3 className="text-lg font-semibold">{job.title}</h3>
              <div className="text-sm text-Purplee mb-2">{job.characteristics.join(" ")}</div>
              <div className="text-sm text-gray-600 mb-2">{job.description}</div>
              <Link to={`/joboffer/${job.id}`}>
                <button className="absolute bottom-4 right-4 px-4 py-2 text-white bg-Purplee rounded-lg shadow-lg border border-black hover:bg-Purplee hover:border-purple-800 transition duration-300">Voir</button>
              </Link>
            </div>
          ))}
          responsive={responsive}
          autoPlay
          autoPlayInterval={2000}
          infinite
        />
        </div>
      </section>

      {/* Section Commerce */}
      <section className="mt-8 mx-4 pb-10">
        <h2 className="text-xl font-bold text-left ml-12  mb-4">Commerce</h2>
        <AliceCarousel
          items={jobsCommerce.map((job, index) => (
            <div key={index} className="relative p-4 bg-Greyy rounded-lg shadow border border-black" style={{ width: '20rem', height: '25rem' }}>
              <img src={job.photo} alt={job.title} className="w-full h-40 object-cover mb-4 bg-white" />
              <h3 className="text-lg font-semibold">{job.title}</h3>
              <div className="text-sm text-Purplee mb-2">{job.characteristics.join(" ")}</div>
              <div className="text-sm text-gray-600 mb-2">{job.description}</div> 
              <Link to={`/joboffer/${job.id}`}>
                <button className="absolute bottom-4 right-4 px-4 py-2 text-white bg-Purplee rounded-lg shadow-lg border border-black hover:bg-Purplee hover:border-purple-800 transition duration-300">Voir</button>
              </Link>
            </div>
          ))}
          responsive={responsive}
          autoPlay
          autoPlayInterval={2000}
          infinite
        />
      </section>
    </div>
  );
};

export default Jobs;