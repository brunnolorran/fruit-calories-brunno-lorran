import React, { useEffect, useState } from "react";
import { CardSize, Title, Text, Details, Portion } from "./styles";
import { AlignContainer } from "../styles-page";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { Link } from "react-router-dom";

import axios from "axios";

const Fruits = () => {
  const [getFruits, setGetFruits] = useState([]);
  const URL_API = `http://pocs.digitalpages.com.br/mock/api/fruits-api/fruits.json`;
  useEffect(() => {
    async function fetchFruits() {
      try {
        const res = await axios.get(URL_API);
        setGetFruits(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchFruits();
  }, []);

  if (!getFruits.length) return <h3>Loading...</h3>;
  return (
    <>
      <AlignContainer>
        {getFruits.map((fruit) => (
          <CardSize key={fruit.name}>
            <Title>{fruit.name}</Title>
            <Portion>{fruit.portion}</Portion>
            <Text>
              Calorias <span>{fruit.calories}</span>
            </Text>
            <Text>
              Proteina <span>{fruit.protein}</span>
            </Text>
            <Text>
              Carboidratos <span>{fruit.carbohydrates}</span>
            </Text>
            <Text>
              Fibra <span>{fruit.fiber}</span>x
            </Text>
            <Text>
              Gordura <span>{fruit.blubber}</span>
            </Text>
            <Details>
              <Link to="/details" state={fruit}>
                Ver detalhes <HiOutlineArrowSmRight />
              </Link>
            </Details>
          </CardSize>
        ))}
      </AlignContainer>
    </>
  );
};

export default Fruits;
