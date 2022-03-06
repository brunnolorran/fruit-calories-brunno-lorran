import { CardSize, Title, Text, Details, Portion } from "./styles";
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
        <Portion>{portion}</Portion>
        <Text>
          Calorias <span>{calories}</span>
        </Text>
        <Text>
          Proteina <span>{protein}</span>
        </Text>
        <Text>
          Carboidratos <span>{carbohydrates}</span>
        </Text>
        <Text>
          Fibra <span>{fiber}</span>x
        </Text>
        <Text>
          Gordura <span>{blubber}</span>
        </Text>
        <Details>
          Ver detalhes <HiOutlineArrowSmRight />
        </Details>
      </CardSize>
    </>
  );
};

export default Card;
