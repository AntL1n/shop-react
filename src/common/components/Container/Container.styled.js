import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 10px;
  }
`;
