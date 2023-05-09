import styled from "styled-components";

export const StylesHeader = styled.header`
  background-color: rgb(2400, 239, 233);
  padding: 40px 70px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media screen and (max-width: 970px) {
    padding: 20px 35px;
  }
  @media screen and (max-width: 380px) {
    padding: 10px 17px;
  }
`;