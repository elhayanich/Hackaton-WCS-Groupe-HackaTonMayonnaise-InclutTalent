import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex bg-blue-100 content-center justify-between border-b-2 border-black">
      <span className=" m-4 text-purple-950 text-4xl">Talentia</span>
      <div>
        <ul className=" flex flex-row gap-10 mr-12">
          <li className="m-6">
            <Link to="/">Accueil</Link>
          </li>
          <li className="m-6">
            <Link to="/formation">Formation</Link>
          </li>
          <li className="m-6">
            <Link to="/jobs">Jobs</Link>
          </li>
          <li className="m-4">
            <Link>
              <button className="border-solid border-2 px-8 py-2 text-white bg-indigo-600 rounded-lg border-black ">
                Connexion
              </button>
            </Link>
          </li>
        </ul>{" "}
      </div>
    </nav>
  );
};

export default Navbar;
