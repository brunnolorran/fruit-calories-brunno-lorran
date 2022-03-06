import Card from "../../Components/Card";
import { AlignContainer } from "../styles-page";
import { useState, useEffect } from "react";
import axios from "axios";

const Fruits = () => {
  const [getFruits, setGetFruits] = useState([]);
  const URL_API = `http://pocs.digitalpages.com.br/mock/api/fruits-api/fruits.json`;
  useEffect(() => {
    async function fetchBirds() {
      try {
        const res = await axios.get(URL_API);
        console.log(res.data);
        setGetFruits(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchBirds();
  }, []);

  if (!getFruits.length) return <h3>Loading...</h3>;
  return (
    <>
      <AlignContainer>
        {getFruits.map((fruits) => (
          // eslint-disable-next-line react/jsx-key
          <Card
            name={fruits.name}
            calories={fruits.calories}
            protein={fruits.protein}
            carbohydrates={fruits.carbohydrates}
            fiber={fruits.fiber}
            blubber={fruits.blubber}
            portion={fruits.portion}
          />
        ))}
      </AlignContainer>
    </>
  );
};

export default Fruits;
