import React from "react";
import Card from "../components/Card";
import Toggle from "../components/Toggle";

const Home = () => {
  return (
    <main className="bg-slate-100 min-h-screen p-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-purple-800 mb-4">Talentia</h1>
        <p className="text-gray-700 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia natus
          fuga, beatae eos facere facilis nemo voluptate, quis aliquam, nobis
          repudiandae debitis! Esse provident quibusdam atque, illo modi
          perferendis cum?
        </p>
      </header>
      <section className="mt-10">
        <h2 className="text-3xl text-purple-700 mb-2">Formations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card
            title="Formation A"
            description="Je propose une formation pour personne en situation de handicap."
          />
        </div>
      </section>
      <section className="mt-10">
        <h2 className="text-3xl text-purple-700 mb-2">Job</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card title="Ecrivain" description="Besoin d'un manchot" />
        </div>
      </section>
      <section className="mt-10">
        <h2 className="text-3xl text-purple-700 mb-2">A propos</h2>
        <img
          src="/path-to-your-image.jpg"
          alt="Image description"
          className="mx-auto"
        />
        <p className="text-gray-600 mt-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Exercitationem ex error eum sapiente. Accusamus libero enim mollitia,
          ad ratione doloremque ipsum quidem consequuntur quisquam vero quod
          quaerat alias aliquam numquam.
        </p>
      </section>
      <section className="mt-10">
        <h2 className="text-3xl text-purple-700 mb-2">FAQ</h2>
        <div className="faq">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold">C'est quoi talentia?</h3>

            <Toggle
              className="text-gray-600 mt-2"
              buttonText="Cliquez pour afficher la réponse"
              responseText="Voici la réponse détaillée à votre question."
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
