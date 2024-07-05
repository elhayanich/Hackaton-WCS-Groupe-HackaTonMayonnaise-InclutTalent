import React from "react";
import Card from "../components/Card";
import Toggle from "../components/Toggle";
import Welcome from "../assets/images/welcome.png";
import talentia from "../assets/images/Talentia_purple2x.png";
import Jobremote from "../assets/images/jobremote.png";
import Jobcom from "../assets/images/jobcom.png";
import Jobdev from "../assets/images/jobdev.png";
import Jobadmin from "../assets/images/jobadmin.png";
import Jobmedi from "../assets/images/jobmedi.png";
const Home = () => {
  return (
    <div>
      <main className="bg-purple-50 min-h-screen p-8">
        <header className="text-center">
          <img src={talentia} alt="" className="sm:w-1/2 mx-auto" />
          <h2 className="text-gray-700 text-lg mt-5 mb-8">
            Là où vos capacités rencontrent votre carrière.
          </h2>
          <img src={Welcome} alt="Image de bienvenue" />
        </header>
        <section className="mt-10 flex items-start">
          <div className="w-1/2 mr-8">
            <h2 className="text-3xl text-purple-700 mb-6">Formations</h2>
            <p class="text-gray-700 text-xl font-semibold">
              Chaque programme est <strong>adapté</strong> pour garantir une{" "}
              <strong>accessibilité maximale</strong> et répondre aux besoins
              spécifiques de notre communauté.
              <br />
              <br />
              Chez <strong>Talentia</strong>, nous savons que la{" "}
              <strong>formation</strong> est la clé pour ouvrir de nouvelles{" "}
              <strong>opportunités professionnelles</strong> et développer des
              <strong> compétences précieuses</strong>. C'est pourquoi nous
              proposons une large gamme de programmes de formation spécialement
              conçus pour vous. Pour en savoir plus
              <br />
              <br />
              Nos formations couvrent divers domaines et compétences, allant du
              développement web et du design graphique à l'analyse de données et
              bien plus encore.
            </p>
          </div>
          <div className="w-1/2">
            <Card
              title="Formations variées et adaptées"
              description="Nous proposon plusieurs offre de formation adaptés a vos passion et vos besoins "
              buttonText="Voir"
              imgSrc={Jobremote}
              className="bg-purple-200 hover:bg-purple-300 transition-colors w-64 h-64" // Taille carrée pour la carte
            />
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-3xl text-purple-700 mb-2">
            Découvrez les jobs du moment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-7 pb-7">
            <Card
              title="Informatique"
              description="Découvrez nos offres d'emploi dans l'informatique."
              imgSrc={Jobdev}
            />
            <Card
              title="Commerce"
              description="Explorez nos opportunités d'emploi dans le commerce"
              imgSrc={Jobcom}
            />
            <Card
              title="Administration"
              description="Parcourez nos offres d'emploi dans l'administration"
              imgSrc={Jobadmin}
            />
            <Card
              title="Médical"
              description="Découvrez nos offres d'emploi dans le secteur médical"
              imgSrc={Jobmedi}
            />
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
              <h2 className="text-3xl text-purple-700 mb-20 ">À propos</h2>
              <p class="text-gray-600 text-lg font-semibold">
                Créée par une équipe <strong>passionnée</strong> et{" "}
                <strong>diversifiée</strong> composée de trois développeurs web,
                deux web designers et deux data analysts,
                <strong>Talentia</strong> vise à <strong>révolutionner</strong>{" "}
                l'accès à l'emploi et à la formation pour les 18-30 ans en
                situation de handicap.
                <br />
                <br />
                Chez <strong>Talentia</strong>, nous croyons fermement que
                chaque individu mérite une chance équitable de démontrer son{" "}
                <strong>potentiel</strong> et de s'épanouir professionnellement.
                <br />
                <br />
                Notre mission est de mettre en relation des jeunes talents avec
                des entreprises <strong>inclusives</strong> et des programmes de
                formation
                <strong> adaptés</strong>, afin de faciliter leur insertion sur
                le marché du travail et de promouvoir leur développement
                personnel et professionnel.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-3xl text-purple-700 mb-2 text-center">FAQ</h2>
          <div className="faq mx-auto max-w-2xl">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-4 text-center">
              <h3 className="text-xl font-semibold">
                Quels types d'emplois sont disponibles pour les personnes en
                situation de handicap chez Talentia ?
              </h3>
              <Toggle
                className="text-gray-600 mt-2"
                buttonText="Cliquez pour afficher la réponse"
                responseText="Notre site propose une variété d'emplois adaptés aux personnes avec différents types de handicaps. Les offres sont issues de divers secteurs tels que la technologie, l'administration, la vente au détail et plus encore. Chaque emploi listé offre des aménagements raisonnables pour répondre aux besoins spécifiques des candidats handicapés"
              />
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 mb-4 text-center">
              <h3 className="text-xl font-semibold">
                Comment le site assure-t-il que les formations proposées sont
                accessibles aux personnes en situation de handicap ?
              </h3>
              <Toggle
                className="text-gray-600 mt-2"
                buttonText="Cliquez pour afficher la réponse"
                responseText="Toutes les formations listées sur notre site sont évaluées pour garantir leur accessibilité. Cela inclut l'accessibilité physique des lieux de formation et l'adaptation des matériels pédagogiques (documents en gros caractères, interprètes en langue des signes, contenu accessible numériquement, etc.). Nous collaborons étroitement avec les formateurs pour s'assurer qu'ils sont préparés à répondre aux besoins de tous les participants."
              />
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 mb-4 text-center">
              <h3 className="text-xl font-semibold">
                Le site offre-t-il des ressources supplémentaires pour aider les
                personnes en situation de handicap dans leur recherche d'emploi
                ?
              </h3>
              <Toggle
                className="text-gray-600 mt-2"
                buttonText="Cliquez pour afficher la réponse"
                responseText="Oui, notre site propose diverses ressources pour aider les candidats handicapés. Cela inclut des conseils pour la rédaction de CV, la préparation aux entretiens, et des informations sur les droits des personnes handicapées en milieu professionnel. Nous offrons également un accompagnement personnalisé par des conseillers spécialisés dans l'insertion professionnelle des personnes handicapées."
              />
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-xl font-semibold">
                Comment puis-je m'inscrire et quelles informations dois-je
                fournir ?
              </h3>
              <Toggle
                className="text-gray-600 mt-2"
                buttonText="Cliquez pour afficher la réponse"
                responseText="Pour vous inscrire, vous devez créer un compte sur notre site en fournissant votre nom, adresse e-mail, et détails professionnels. Vous avez également la possibilité d'indiquer la nature de votre handicap pour nous aider à mieux cibler les opportunités qui correspondent à vos besoins. Le processus d'inscription est simple et sécurisé, et vous permettra d'accéder à toutes les fonctionnalités du site."
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
