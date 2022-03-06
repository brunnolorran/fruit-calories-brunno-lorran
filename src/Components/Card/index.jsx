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
      <h2>Nome: {name} Abacaxi</h2>
      <p>Calorias: {calories} 48</p>
      <p>Proteina: {protein} 0,54 g</p>
      <p>Carboidratos: {carbohydrates} 12,63 g</p>
      <p>Fibra: {fiber} 1,4 g</p>
      <p>Gordura: {blubber} 0,12 g</p>
      <p>portion: {portion} 1,2 fatias</p>
    </>
  );
};

export default Card;
