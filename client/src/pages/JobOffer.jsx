import jobspicture from "../assets/images/jobs-picture.png";
import joboffer from "../assets/images/joboffer.png";
import jobsInformatique from "../../../server/database/data/jobsInformatique.json";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Link } from "react-router-dom";

const JobOffer = () => {
  const responsive = {
    0: { items: 1 },
    576: { items: 2 },
    1024: { items: 4 },
  };

  return (
    <div className="min-h-screen">
      <section
        className="relative mx-12 mt-12 rounded-lg"
        style={{ width: "1350px", height: "480px" }}
      >
        <img
          src={jobspicture}
          alt="bureau"
          className="mx-auto object-cover rounded-lg border-1 border-black"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </section>

      <section
        className="relative mx-12 mt-12 rounded-lg"
        style={{ width: "1050px", height: "1150px" }}
      >
        <img
          src={joboffer}
          alt="bureau"
          className="mx-auto ml-20 object-cover rounded-lg border-1 border-black"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </section>

      <section className="bg-Lightblue text-center py-12 mt-10">
        <h2 className="text-2xl text-gray-500 mb-6">BLUE DEV</h2>
        <div className="flex justify-center space-x-6">
          <button className="px-6 py-3 bg-Purplee text-white font-bold rounded-lg shadow-lg hover:bg-black transition duration-300">
            Postuler
          </button>
          <button className="px-6 py-3 bg-white text-Purplee font-bold rounded-lg shadow-lg hover:bg-black transition duration-300">
            Sauvegarder
          </button>
        </div>
      </section>

      <section className="mt-10 mx-5 pb-10">
        <h2 className="text-3xl font-bold text-left ml-12 mb-4">
          Informatique
        </h2>
        <AliceCarousel
          items={jobsInformatique.map((job, index) => (
            <div
              key={index}
              className="relative p-4 bg-Greyy rounded-lg shadow border border-black"
              style={{ width: "20rem", height: "25rem" }}
            >
              <img
                src={job.photo}
                alt={job.title}
                className="w-full h-40 object-cover mb-4 bg-white"
                style={{ objectFit: "cover" }}
              />
              <h3 className="text-lg font-semibold">{job.title}</h3>
              <div className="text-sm text-Purplee mb-2">
                {job.characteristics.join(" ")}
              </div>
              <div className="text-sm text-gray-600 mb-2">
                {job.description}
              </div>
              <Link to={`/joboffer`}>
                <button className="absolute bottom-4 right-4 px-4 py-2 text-white bg-Purplee rounded-lg shadow-lg border border-black hover:bg-Purplee hover:border-purple-800 transition duration-300">
                  Voir
                </button>
              </Link>
            </div>
          ))}
          responsive={responsive}
          autoPlay
          autoPlayInterval={2000}
        />
      </section>
    </div>
  );
};

export default JobOffer;
