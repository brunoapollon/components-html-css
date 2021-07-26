import styled from "styled-components";
import { lighten } from "polished";

const Container = styled.div`
  width: 300px;
  height: 60px;
  border-radius: 5px;
  background-color: #090b47;
  font-family: "Roboto", sans-serif;
  > button {
    width: 100%;
    height: 100%;
    font-size: 18px;
    text-align: center;
    background: transparent;
    border: none;
    color: #fff;
  }
  &:hover {
    background-color: ${lighten(0.1, "#090b47")};
  }
`;

export { Container };
