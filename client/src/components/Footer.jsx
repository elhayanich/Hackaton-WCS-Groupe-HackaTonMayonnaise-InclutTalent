const Footer = () => {
  return (
    <footer className="bg-purple-800  text-white w-full">
      {" "}
      {/* w-full pour que le fond prenne toute la largeur */}
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-start">
        <h1 className="text-xl font-bold">Talentia</h1>
        <div className="flex-grow">
          <div className="flex justify-end">
            <div className="flex flex-col space-y-2 mr-20">
              <a
                href="#"
                className="text-white hover:text-gray-300 text-xs -mb-2"
              >
                Accueil
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-300 text-xs -mb-2"
              >
                Formations
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-300 text-xs -mb-2"
              >
                Jobs
              </a>
              <a href="#" className="text-white hover:text-gray-300 text-xs">
                Blog
              </a>
            </div>
            <div className="flex flex-col space-y-2">
              <a
                href="#"
                className="text-white hover:text-gray-300 text-xs -mb-2"
              >
                Contactez-nous
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-300 text-xs -mb-2"
              >
                Mentions Légales
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-300 text-xs -mb-2"
              >
                Politique de confidentialité
              </a>
              <a href="#" className="text-white hover:text-gray-300 text-xs">
                Politique et gestion des cookies
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Email..."
            className="text-xs mr-2 px-2 py-1 rounded"
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            S'abonner
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
