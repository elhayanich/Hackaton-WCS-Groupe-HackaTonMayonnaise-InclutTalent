const Navbar = () => {
  return (
    <nav className="flex bg-slate-100 content-center justify-between">
      <span className=" m-4 text-purple-950 text-4xl">Talentia</span>
      <div>
        <ul className=" flex flex-row gap-10 mr-12">
          <li className="m-6">Accueil</li>
          <li className="m-6">Formation</li>
          <li className="m-6">Jobs</li>
          <li className="m-4">
            <button className="border-solid border-2 p-2 text-white bg-indigo-600 rounded-lg border-black shadow-md">
              Connexion
            </button>
          </li>
        </ul>{" "}
      </div>
    </nav>
  );
};

export default Navbar;
