import styled from "styled-components";

const Container = styled.div`
  width: 300px;
  height: 60px;
  border-radius: 5px;
  border: solid 2px #aaa;
  font-family: "Roboto", sans-serif;
  color: #aaa;
  > input {
    width: 100%;
    height: 100%;
    font-size: 18px;
    text-align: center;
    border: none;
    background: transparent;
  }
  margin-bottom: 10px;
`;

export { Container };
