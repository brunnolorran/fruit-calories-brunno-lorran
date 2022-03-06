import styled from "styled-components";

export const Title = styled.div`
  text-align: center;
  margin: 3rem 0 0 0;
  font-size: 2rem;
`;

export const SubTitle = styled.div`
  text-align: center;
  margin: 0 0 3rem 0;
  font-size: 1rem;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  vertical-align: middle;
  height: 100%;
  position: relative;
  margin: 0 0 3rem 0;
`;

export const Menu = styled.ul`
  margin: 0 auto;
  padding: 30px;
  background: #eee;
  display: block;
  border-radius: 6px;

  li {
    position: relative;
    display: inline-block;
  }

  li a {
    display: inline-block;
    padding: 10px 16px;
  }

  li a:hover {
    border-radius: 6px;
    background: #ddd;
    transition: 0.3s;
  }

  .menu li a {
    display: inline-block;
    padding: 10px 16px;
  }
  .menu li a:hover {
    border-radius: 6px;
    background: #ddd;
    transition: 0.3s;
  }
`;
