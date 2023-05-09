import styled from "styled-components";

export const StylesBannerText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  h1 {
    font-size: 3rem;
    color: #333333;
    font-weight: 700;
    line-height: 3.7rem;
  }
  p {
    text-align: justify;
  }
  div {
    display: flex;
    gap: 0.5rem;
  }
  @media screen and (max-width: 380px) {
    align-items:center;
    h1 {
      font-size: 2.3rem;
      line-height: 3rem;
      text-align: center;
    }
    p{
      font-size:1rem;
    }
  }
`;

export const StylesCards = styled.section`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 15px;
  @media screen and (max-width: 1057px) {
    justify-content: space-around;
  }
`;

export const StylesBanner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 25px;
  @media screen and (max-width: 1057px) {
    flex-direction: column;
  }
`;
