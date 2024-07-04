const Footer = () => {
  return (
    <footer className="bg-purple-800 text-white">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex space-x-6">
            <a href="#" className="text-white hover:text-gray-300">
              Accueil
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Formations
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Jobs
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Blog
            </a>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-white hover:text-gray-300">
              Contactez-nous
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Mentions Légales
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Politique de confidentialité
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Politique et gestion des cookies
            </a>
          </div>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Email..."
              className="mr-2 px-2 py-1 rounded"
            />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              S'abonner
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
