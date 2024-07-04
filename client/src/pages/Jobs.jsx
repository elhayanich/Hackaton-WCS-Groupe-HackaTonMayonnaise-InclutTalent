
import étoile from "../assets/images/star-icon.png";
import jobsInformatique from "../../../server/database/data/jobsInformatique.json";
import jobsAdministration from "../../../server/database/data/jobsAdministation.json";
import jobsCommerce from "../../../server/database/data/jobsCommerce.json";
import jobsMedical from "../../../server/database/data/jobsMedical.json";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";


const Jobs = () => {
  const responsive = {
    0: { items: 1 },
    576: { items: 2 },
    1024: { items: 4 },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Section recherche avec les boutons des catégories */}
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

      {/* Section des offres de job avec React Alice Carousel */}
      <section className="mt-10 mx-5 pb-10">
        <h2 className="text-xl font-semibold text-left ml-12 mb-4">Informatique</h2>
        <AliceCarousel
          items={jobsInformatique.map((job, index) => (
            <div key={index} className="p-4 bg-gray-100 rounded-lg shadow border border-black" style={{ width: '20rem', height: '25rem' }}>
              <img src={job.photo} alt={job.title} className="w-full h-40 object-cover mb-4 bg-white" />
              <h3 className="text-lg font-semibold">{job.title}</h3>
              <div className="text-sm text-gray-600 mb-2">{job.characteristics.join(" ")}</div>
              <button className="px-4 py-2 text-white bg-purple-700 rounded-lg shadow-lg border border-black hover:bg-purple-800 hover:border-purple-800 transition duration-300">Voir</button>
            </div>
          ))}
          responsive={responsive}
          autoPlay
          autoPlayInterval={2000}
        />
      </section>

       {/* Section Administration */}
       <section className="mt-8 mx-4 pb-10 bg-blue-100">
        <h2 className="text-xl font-semibold text-left ml-12  mb-4">Administration</h2>
        <AliceCarousel
          items={jobsAdministration.map((job, index) => (
            <div key={index} className="p-4 bg-gray-100 rounded-lg shadow border border-black" style={{ width: '20rem', height: '25rem' }}>
              <img src={job.photo} alt={job.title} className="w-full h-40 object-cover mb-4 bg-white" />
              <h3 className="text-lg font-semibold">{job.title}</h3>
              <div className="text-sm text-gray-600 mb-2">{job.characteristics.join(" ")}</div>
              <button className="px-4 py-2 text-white bg-purple-700 rounded-lg shadow-lg border border-black hover:bg-purple-800 hover:border-purple-800 transition duration-300">Voir</button>
            </div>
          ))}
          responsive={responsive}
          autoPlay
          autoPlayInterval={2000}
          infinite
        />
      </section>

      {/* Section Commerce */}
      <section className="mt-8 mx-4 pb-10">
        <h2 className="text-xl font-semibold text-left ml-12  mb-4">Commerce</h2>
        <AliceCarousel
          items={jobsCommerce.map((job, index) => (
            <div key={index} className="p-4 bg-gray-100 rounded-lg shadow border border-black" style={{ width: '20rem', height: '25rem' }}>
              <img src={job.photo} alt={job.title} className="w-full h-40 object-cover mb-4 bg-white" />
              <h3 className="text-lg font-semibold">{job.title}</h3>
              <div className="text-sm text-gray-600 mb-2">{job.characteristics.join(" ")}</div>
              <button className="px-4 py-2 text-white bg-purple-700 rounded-lg shadow-lg border border-black hover:bg-purple-800 hover:border-purple-800 transition duration-300">Voir</button>
            </div>
          ))}
          responsive={responsive}
          autoPlay
          autoPlayInterval={2000}
          infinite
        />
      </section>

      {/* Section Médical */}
      <section className="mt-8 mx-4 pb-10 bg-blue-100">
        <h2 className="text-xl font-semibold text-left ml-12  mb-4">Médical</h2>
        <AliceCarousel
          items={jobsMedical.map((job, index) => (
            <div key={index} className="p-4 bg-gray-100 rounded-lg shadow border border-black" style={{ width: '20rem', height: '25rem' }}>
              <img src={job.photo} alt={job.title} className="w-full h-40 object-cover mb-4 bg-white" />
              <h3 className="text-lg font-semibold">{job.title}</h3>
              <div className="text-sm text-gray-600 mb-2">{job.characteristics.join(" ")}</div>
              <button className="px-4 py-2 text-white bg-purple-700 rounded-lg shadow-lg border border-black hover:bg-purple-800 hover:border-purple-800 transition duration-300">Voir</button>
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