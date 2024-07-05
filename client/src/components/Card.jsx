import Button from "./Button";

const Card = ({ title, description, imgSrc }) => (
  <div className="bg-white rounded-xl shadow-xl p-6 flex flex-col items-center text-center">
    <div className="flex justify-center mb-4">
      <img src={imgSrc} alt="Développement Web" className="h-24 w-24" />{" "}
    </div>
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="text-gray-600 mt-2">{description}</p>
    <Button>Voir</Button>
  </div>
);

export default Card;
