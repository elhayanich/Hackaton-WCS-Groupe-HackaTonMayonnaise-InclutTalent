import { Link } from "react-router-dom";
import React from "react";
import Popup from "reactjs-popup";
import talentia from "../assets/images/Talentia_purple2x.png";

const Navbar = () => {
  return (
    <nav className="flex bg-Lightblue content-center justify-between border-b-2 border-black">
      <img src={talentia} alt="" className="h-8 w-28 ml-6 mt-4" />
      <div>
        <ul className=" flex flex-row mr-12">
          <li className="m-6">
            <Link to="/">Accueil</Link>
          </li>
          <li className="m-6">
            <Link to="/formation">Formation</Link>
          </li>
          <li className="m-6">
            <Link to="/jobs">Jobs</Link>
          </li>
          <li className="m-6">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="m-4">
            <Popup
              trigger={
                <button className="border-solid border-2 px-8 py-2 text-white bg-Purplee rounded-lg border-black ">
                  S'inscrire
                </button>
              }
              modal
              nested
            >
              {(close) => (
                <div className="bg-gray-200">
                  <div className=" border-solid border-2 border-black rounded-lg">
                    <div className="flex justify-end pr-4 pt-4">
                      <button
                        type="button"
                        className="px-2 text-white bg-Purplee rounded-md "
                        onClick={close}
                      >
                        X
                      </button>
                    </div>
                    <div className="flex flex-col items-center m-4 px-12 bg-gray-200">
                      <span className="font-extrabold">Bienvenue !</span>
                      <ul className="flex flex-row gap-6 my-4">
                        <li>
                          <button>Créer un compte</button>
                        </li>
                      </ul>
                      <div>
                        <form className="flex flex-col gap-4">
                          <input
                            type="email"
                            name="email"
                            placeholder="Se connecter avec Google"
                            className="rounded-lg py-1 pl-2 pr-12 border-solid border-2 border-black"
                          />
                          <input
                            type="email"
                            name="email"
                            placeholder="Se connecter avec LinkedIn"
                            className="rounded-lg py-1 pl-2 pr-12 border-solid border-2 border-black"
                          />
                        </form>
                        <hr />
                        <span className="flex justify-center m-2">ou</span>
                        <hr />
                        <form className="flex flex-col gap-4">
                          <input
                            type="firstname"
                            name="firstname"
                            placeholder="Prénom"
                            className="rounded-lg py-1 pl-2 pr-12 border-solid border-2 border-black"
                          />
                          <input
                            type="lastname"
                            name="lastname"
                            placeholder="Nom"
                            className="rounded-lg py-1 pl-2 pr-12 border-solid border-2 border-black "
                          />
                          <input
                            type="password"
                            name="password"
                            placeholder="Mot de passe"
                            className="rounded-lg py-1 pl-2 pr-12 border-solid border-2 border-black "
                          />
                        </form>{" "}
                        <div className=" flex flex-col m-4">
                          <div>
                            <input
                              type="checkbox"
                              id="scales"
                              name="scales"
                              className="m-2"
                            />
                            <label>
                              Je souhaite m'inscrire à la newsletter
                            </label>
                          </div>
                          <div>
                            <input
                              type="checkbox"
                              id="scales"
                              name="scales"
                              className="m-2"
                            />

                            <label>
                              J'ai lu et j'accepte les{" "}
                              <span className="font-semibold">CGU</span>
                              et la
                              <span className="font-semibold">
                                <br /> politique de protection des données.
                              </span>
                            </label>
                          </div>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                          <span>
                            <button>Mot de passe oublié ?</button>
                          </span>
                          <button
                            type="button"
                            className="border-solid border-2 px-8 py-2 text-white bg-indigo-600 rounded-lg border-black "
                          >
                            Connexion
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Popup>
          </li>
          <li className="m-4">
            <Popup
              trigger={
                <button className="border-solid border-2 px-8 py-2 text-white bg-Purplee rounded-lg border-black ">
                  Connexion
                </button>
              }
              modal
              nested
            >
              {(close) => (
                <div className="bg-gray-200">
                  <div className=" border-solid border-2 border-black rounded-lg">
                    <div className="flex justify-end pr-4 pt-4">
                      <button
                        type="button"
                        className="px-2 text-white bg-Purplee rounded-lg "
                        onClick={close}
                      >
                        X
                      </button>
                    </div>
                    <div className="flex flex-col items-center my-6 m-4 pb-8 pt-4 px-14 bg-gray-200">
                      <span className="font-extrabold mb-4">Bienvenue !</span>
                      <ul className="flex flex-row gap-6 my-4">
                        <li>
                          <button className="mb-4">Se connecter</button>
                        </li>
                      </ul>
                      <div>
                        <form className="flex flex-col gap-4">
                          <input
                            type="email"
                            name="email"
                            placeholder="Se connecter avec Google"
                            className="rounded-lg py-1 pl-2 pr-24 border-solid border-2 border-black"
                          />
                          <input
                            type="email"
                            name="email"
                            placeholder="Se connecter avec LinkedIn"
                            className="rounded-lg py-1 pl-2 pr-24 border-solid border-2 border-black"
                          />
                        </form>
                        <hr />
                        <span className="flex justify-center m-4">ou</span>
                        <hr />
                        <form className="flex flex-col gap-4">
                          <input
                            type="email"
                            name="email"
                            placeholder="Adresse email"
                            className="rounded-lg py-1 pl-2 pr-24 border-solid border-2 border-black"
                          />
                          <input
                            type="password"
                            name="password"
                            placeholder="Mot de passe"
                            className="rounded-lg py-1 pl-2 pr-24 border-solid border-2 border-black "
                          />
                        </form>
                        <div className="flex flex-col items-center gap-4">
                          <span className="my-8 ">
                            <button>Mot de passe oublié ?</button>
                          </span>
                          <button
                            type="button"
                            className="border-solid border-2 px-8 py-2 text-white bg-Purplee rounded-lg border-black "
                          >
                            Connexion
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Popup>
          </li>
        </ul>{" "}
      </div>
    </nav>
  );
};

export default Navbar;
