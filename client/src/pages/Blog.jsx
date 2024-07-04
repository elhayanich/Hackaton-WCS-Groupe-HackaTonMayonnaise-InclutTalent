import React from "react";
import Button from "../components/Button";

const Blog = () => {
  return (
    <div className="bg-white min-h-screen">
      <main className="max-w-4xl mx-auto pt-10 px-4">
        <section className="flex mb-12 items-start">
          <div className="flex-1 text-left pr-6">
            <h2 className="text-xl font-bold mb-4 text-purple-700">
              Démographie et Inclusion : Âge, Nationalité et Genre au Travail.
            </h2>
            <p className="text-gray-600 mb-6">
              Cet article analyse la répartition démographique des employés,
              incluant l'âge, la nationalité et le genre, dans une perspective
              d'inclusion.
            </p>
            <Button className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600">
              En savoir plus
            </Button>
          </div>
          <img
            src="/path/to/your/image1.png"
            alt="Demographie et Inclusion"
            className="w-1/2"
          />
        </section>

        <section className="flex mb-12 flex-row-reverse items-start">
          <div className="flex-1 text-left pl-6">
            <h2 className="text-xl font-bold mb-4 text-purple-700">
              Équité et Diversité : Répartition du Handicap dans les Divisions
              et Postes.
            </h2>
            <p className="text-gray-600 mb-6">
              Découvrez comment le handicap est représenté à travers les
              différentes divisions et niveaux de gestion au sein de notre
              organisation.
            </p>
            <Button className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600">
              En savoir plus
            </Button>
          </div>
          <img
            src="/path/to/your/image2.png"
            alt="Equité et Diversité"
            className="w-1/2"
          />
        </section>

        <section className="flex mb-12 items-start">
          <div className="flex-1 text-left pr-6">
            <h2 className="text-xl font-bold mb-4 text-purple-700">
              Analyse des Loisirs et du Handicap : Répartition des Intérêts
            </h2>
            <p className="text-gray-600 mb-6">
              Cet article explore les loisirs des employés en tenant compte de
              la présence ou non d'un handicap.
            </p>
            <Button className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600">
              En savoir plus
            </Button>
          </div>
          <img
            src="/path/to/your/image3.png"
            alt="Analyse des Loisirs"
            className="w-1/2"
          />
        </section>
      </main>
    </div>
  );
};

export default Blog;
