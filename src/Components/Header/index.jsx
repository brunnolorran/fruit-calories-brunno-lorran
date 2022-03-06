import React from "react";
import { Wrapper, Menu, Title, SubTitle } from "./styles";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Title>Fruit Calories</Title>
      <SubTitle>Desafio | DP Minds</SubTitle>
      <Wrapper>
        <Menu>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/challenge">Desafio</Link>
            </li>
            <li>
              <Link to="/">Github</Link>
            </li>
          </ul>
        </Menu>
      </Wrapper>
    </div>
  );
};

export default Header;
