/* eslint-disable react/prop-types */
const Card = ({
  name,
  calories,
  protein,
  carbohydrates,
  fiber,
  blubber,
  portion,
}) => {
  return (
    <>
      <h2>{name}</h2>
      <p>Calorias: {calories}</p>
      <p>Proteina: {protein}</p>
      <p>Carboidratos: {carbohydrates}</p>
      <p>Fibra: {fiber}</p>
      <p>Gordura: {blubber}</p>
      <p>portion: {portion}</p>
    </>
  );
};

export default Card;
