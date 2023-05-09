import styled from "styled-components";

export const StylesNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ul {
    list-style: none;
    display: flex;
    gap: 15px;
    align-items: center;
  }

  @media screen and (max-width: 970px){
    li{
      display: none;
    }
  }
`;
export const StylesButton1 = styled.button`
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 4px;
  background-color: #fff;
  border: 1px solid #cccccc;
  :hover {
    border: 1px solid #74b3a7;
    color: #74b3a7;
  }
`;
export const StylesButton2 = styled.button`
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 4px;
  background-color: #24b26b;
  color: #fff;
  font-weight: 600;
  border: 1px solid #24b26b;
  :hover {
    background-color: transparent;
    color: #24b26b;
  }
  @media screen and (max-width: 970px){
    display: none;
  }
`;
