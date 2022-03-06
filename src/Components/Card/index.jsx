import { CardSize, Title, Text, Details } from "./styles";
import { HiOutlineArrowSmRight } from "react-icons/hi";

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
      <CardSize>
        <Title>{name}</Title>
        <Text>Calorias: {calories}</Text>
        <Text>Proteina: {protein}</Text>
        <Text>Carboidratos: {carbohydrates}</Text>
        <Text>Fibra: {fiber}</Text>
        <Text>Gordura: {blubber}</Text>
        <Text>Porção: {portion}</Text>
        <Details>
          Ver detalhes <HiOutlineArrowSmRight />
        </Details>
      </CardSize>
    </>
  );
};

export default Card;
