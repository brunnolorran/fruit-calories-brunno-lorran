import { Wrapper, Menu, Title, SubTitle } from "./styles";

const Header = () => {
  return (
    <>
      <Title>Fruit Calories</Title>
      <SubTitle>Desafio | DP Minds</SubTitle>
      <Wrapper>
        <Menu>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Desafio</a>
          </li>
          <li>
            <a>Github</a>
          </li>
        </Menu>
      </Wrapper>
    </>
  );
};

export default Header;
