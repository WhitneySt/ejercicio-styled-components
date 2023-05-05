import styled from "styled-components";
import vectorSearch from './../../assets/images/Vector-Search.png';

export const StylesSearch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;
  h2 {
    font-size: 2rem;
    color: #333333;
  }
  p {
    color: #666666;
  }
  form {
    display: flex;
    gap: 10px;
    input {
      width: 382px;
      padding: 10px;
      border-radius: 4px;
      background: #ffffff;
      border: 1px solid #cccccc;
      ::placeholder {
        background-image: url("${vectorSearch}");
        background-repeat: no-repeat;
        color: #999999;
      }
    }
    button {
      padding: 9px 21px 9px 20px;
      cursor: pointer;
      border-radius: 4px;
      background-color: #333333;
      color: #fff;
      font-size: 1rem;
      font-weight: 600;
      border: 1px solid #333333;
      :hover {
        background-color: transparent;
        color: #333333;
      }
    }
  }
`;
