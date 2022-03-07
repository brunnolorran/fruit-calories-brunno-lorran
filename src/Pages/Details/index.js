import React from "react";

import { Title, Text, Image, CardSize, Return, Portion } from "./styles";
import { AlignContainer } from "../styles-page";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

const Details = () => {
  const fruit = useLocation();
  return (
    <>
      <Return>
        <Link to="/">
          <HiOutlineArrowSmLeft />
          Voltar
        </Link>
      </Return>

      <AlignContainer>
        <CardSize>
          <Title>{fruit.state.name}</Title>
          <Portion>{fruit.state.portion}</Portion>
          <Image src={fruit.state.photo} alt={fruit.state.name} />
          <Text>
            Calorias <span>{fruit.state.calories}</span>
          </Text>
          <Text>
            Proteina <span>{fruit.state.protein}</span>
          </Text>
          <Text>
            Carboidratos <span>{fruit.state.carbohydrates}</span>
          </Text>
          <Text>
            Fibra <span>{fruit.state.fiber}</span>
          </Text>
          <Text>
            Gordura <span>{fruit.state.blubber}</span>
          </Text>
        </CardSize>
      </AlignContainer>
    </>
  );
};

export default Details;
