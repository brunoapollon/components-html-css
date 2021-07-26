import styled from "styled-components";
import imgLogin from "../../assets/imgLogin.png";

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
`;

const Content = styled.div`
  margin: 0;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #878584;
  > h1 {
    margin-bottom: 15px;
  }
`;

const Background = styled.div`
  flex: 1;
  background: url(${imgLogin});
`;

export { Container, Content, Background };
