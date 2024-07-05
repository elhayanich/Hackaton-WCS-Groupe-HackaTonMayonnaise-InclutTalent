import photoCV from "../assets/images/cv-picture.png";
import experienceProfil from "../assets/images/experienceProfil.png";
import experienceProfil2 from "../assets/images/experienceProfil2.png";

const Profil = () => {
  return (
    <main>
      <div>
        <ul className="flex flex-row justify-center gap-10 m-6">
          <li className="text-Purplee">Profil</li>
          <li>Candidatures</li>
          <li>Alertes</li>
          <li>Paramètres</li>
          <li>Déconnexion</li>
        </ul>
      </div>
      {/* cadre Profil */}
      <div className=" border-2 border-black my-8 mx-44 rounded-xl bg-gray-200">
        <div className="flex justify-end pr-4 pt-4">
          <button className="border-solid border-2 px-8 py-2 text-white bg-Purplee rounded-lg border-black">
            Modifier
          </button>
        </div>
        <div className="flex flex-row pl-6 pb-12">
          <div>
            <img src={photoCV} alt="" className="w-28 h-42 rounded-lg" />
          </div>
          <div className="ml-6 flex flex-col gap-1">
            <span className="font-extrabold text-2xl mb-2">Silver Morgane</span>
            <p>04/07/1995</p>
            <p>Non Binaire</p>
            <p>silver.morgane@email.com</p>
            <p>+33 1 23 45 67 89</p>
          </div>
        </div>
      </div>

      {/* Main contenu */}
      <div>
        <span className="text-4xl ml-40 mt-10 font-extrabold text-Purplee">
          Expériences professionnelle
        </span>
        <img src={experienceProfil} alt="" className="ml-36 mt-4" />
        <img src={experienceProfil2} alt="" className="ml-32 mt-6 mb-6" />
      </div>
    </main>
  );
};

export default Profil;
