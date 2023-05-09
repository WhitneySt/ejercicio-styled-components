import styled from "styled-components";

export const StylesCard = styled.article`
  padding: 1.2rem;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 2px 4px 4px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  h5 {
    width: 220px;
    font-size: 0.9rem;
    font-weight: 400;
    text-align: center;
  }
  section {
    display: flex;
    gap: 1rem;

    span {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      font-size: 0.75rem;
    }
  }
`;

export const StylesCards = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap:wrap;
  margin-top: 2rem;
`;
