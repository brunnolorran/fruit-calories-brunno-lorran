import styled from "styled-components";

export const CardSize = styled.div`
  border-radius: 0.5em;
  min-width: 300px;
  background-color: #fff;
  margin: 1em;
  padding: 1.5em 2.5em;
  box-shadow: 0px 30px 40px -20px hsl(229, 6%, 66%);
  border-top: 3px solid #45d3d3;
`;

export const Title = styled.h2`
  color: hsl(234, 12%, 34%);
  margin-bottom: 0.5rem;
  padding-bottom: 0.5rem;
`;

export const Image = styled.img`
  max-width: 300px;
`;

export const Portion = styled.h2`
  font-size: 0.9rem;
  color: hsl(234, 12%, 34%);
  font-weight: 400;
  margin: 0.9rem 0;
`;

export const Text = styled.p`
  color: hsl(229, 6%, 66%);

  span {
    float: right;
  }
`;

export const Return = styled.div`
  a {
    display: flex;
    align-items: center;
    margin-top: 1.3rem;
    font-size: 0.8rem;
    color: hsl(234, 12%, 34%);
    font-weight: 400;
  }
`;
