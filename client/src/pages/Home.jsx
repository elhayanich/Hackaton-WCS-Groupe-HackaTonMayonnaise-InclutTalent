import React from "react";
import Card from "../components/Card";
import Toggle from "../components/Toggle";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div>
      <main className="bg-purple-50 min-h-screen p-8">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-purple-800 mb-4">Talentia</h1>
          <p className="text-gray-700 text-lg">
            Découvrez nos formations adaptées et accessibles à tous.
          </p>
        </header>
        <section className="mt-10 flex items-start">
          <div className="w-1/2 mr-8">
            <h2 className="text-3xl text-purple-700 mb-6">Formations</h2>
            <p className="text-gray-700 text-lg">
              Chaque programme est adapté pour garantir une accessibilité
              maximale et répondre aux besoins spécifiques de notre communauté.
              <br />
              Chez Talentia, nous savons que la formation est la clé pour ouvrir
              de nouvelles opportunités professionnelles et développer des
              compétences précieuses. C'est pourquoi nous proposons une large
              gamme de programmes de formation spécialement conçus spécialement
              pour vous. Pour en savoir plus
              <br />
              Nos formations couvrent divers domaines et compétences, allant du
              développement web et du design graphique à l'analyse de données et
              bien plus encore.
            </p>
          </div>
          <div className="w-1/2">
            <Card
              title="Formation A"
              description="Je propose une formation pour personne en situation de handicap."
              buttonText="Voir"
              className="bg-purple-200 hover:bg-purple-300 transition-colors w-64 h-64" // Taille carrée pour la carte
            />
          </div>
        </section>
        <section className="mt-10">
          <h2 className="text-3xl text-purple-700 mb-2">Job</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card title="Job 1" description="Description du post" />
            <Card title="Job 2" description="Description du post" />
            <Card title="Job 3" description="Description du post" />
            <Card title="Job 4 " description="Description du post" />
          </div>
        </section>
        <section className="mt-10">
          <div className="flex items-start justify-center gap-4">
            <img
              src="/src/assets/images/wheelchair-work.png"
              alt="Image description"
              className="flex-none w-1/2"
            />
            <div className="w-1/2">
              <h2 className="text-3xl text-purple-700 mb-2">À propos</h2>
              <p className="text-gray-600">
                Créée par une équipe passionnée et diversifiée composée de trois
                développeurs web, deux web designers et deux data analysts,
                Talentia vise à révolutionner l'accès à l'emploi et à la
                formation pour les 18-30 ans en situation de handicap.
                <br />
                Chez Talentia, nous croyons fermement que chaque individu mérite
                une chance équitable de démontrer son potentiel et de s'épanouir
                professionnellement.
                <br />
                Notre mission est de mettre en relation des jeunes talents avec
                des entreprises inclusives et des programmes de formation
                adaptés, afin de faciliter leur insertion sur le marché du
                travail et de promouvoir leur développement personnel et
                professionnel.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-3xl text-purple-700 mb-2 text-center">FAQ</h2>
          <div className="faq mx-auto max-w-2xl">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-4 text-center">
              <h3 className="text-xl font-semibold">Question 1</h3>
              <Toggle
                className="text-gray-600 mt-2"
                buttonText="Cliquez pour afficher la réponse"
                responseText="Voici la réponse détaillée à votre question."
              />
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 mb-4 text-center">
              <h3 className="text-xl font-semibold">Question 2</h3>
              <Toggle
                className="text-gray-600 mt-2"
                buttonText="Cliquez pour afficher la réponse"
                responseText="Voici la réponse détaillée à votre question."
              />
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 mb-4 text-center">
              <h3 className="text-xl font-semibold">Question 3</h3>
              <Toggle
                className="text-gray-600 mt-2"
                buttonText="Cliquez pour afficher la réponse"
                responseText="Voici la réponse détaillée à votre question."
              />
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-xl font-semibold">Question 4</h3>
              <Toggle
                className="text-gray-600 mt-2"
                buttonText="Cliquez pour afficher la réponse"
                responseText="Voici la réponse détaillée à votre question."
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
