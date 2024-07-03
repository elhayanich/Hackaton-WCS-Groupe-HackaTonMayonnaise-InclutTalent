import Button from "./Button";

const Card = ({ title, description }) => (
  <div className="bg-white rounded-lg shadow-lg p-6">
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="text-gray-600 mt-2">{description}</p>
    <Button>voir</Button>
  </div>
);

export default Card;
