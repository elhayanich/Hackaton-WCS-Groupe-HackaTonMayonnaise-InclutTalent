import React from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <main>
      <div className="flex flex-col items-center ">
        <div className="flex flex-col items-center border-solid border-2 border-black m-4 pb-8 pt-4 px-16 bg-slate-200">
          <Link to="/" className="flex justify-items-end ">
            <button
              type="button"
              className="px-2 text-white bg-indigo-600 rounded-lg"
            >
              X
            </button>
          </Link>
          <span className="font-extrabold">Bienvenue !</span>
          <ul className="flex flex-row gap-6 my-4">
            <li>
              <button className="border-b-2 border-black">Se connecter</button>
            </li>
            <Link to="/Connect">
              <li>
                <button>Créer un compte</button>
              </li>
            </Link>
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
              <span className="mt-2 ">
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
    </main>
  );
};

export default LogIn;
