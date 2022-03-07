import styled from "styled-components";

export const Title = styled.h2`
  color: hsl(234, 12%, 34%);
  margin-bottom: 0.5rem;
  padding-bottom: 0.5rem;
`;

export const Title2 = styled.h3`
  color: hsl(234, 12%, 34%);
  margin-bottom: 0.3rem;
  margin-top: 0.5rem;
  padding-bottom: 0.5rem;
`;

export const Image = styled.img`
  max-width: 300px;
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
