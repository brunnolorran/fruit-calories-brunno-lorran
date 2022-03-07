import React from "react";

import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";

const Details = () => {
  const fruit = useLocation();

  console.log(location);
  return (
    <>
      <Link to="/">Voltar</Link>
      <h1>{fruit.state.name}</h1>
      <img src={fruit.state.photo} alt={fruit.state.name} />
      <p>
        Calorias <span>{fruit.state.calories}</span>
        Proteina <span>{fruit.state.protein}</span>
        Carboidratos <span>{fruit.state.carbohydrates}</span>
        Fibra <span>{fruit.state.fiber}</span>
        Gordura <span>{fruit.state.blubber}</span>
      </p>
    </>
  );
};

export default Details;
