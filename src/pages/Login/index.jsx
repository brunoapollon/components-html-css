import React from "react";

import { Container, Content, Background } from "./styles";

import Input from "../../components/Input";
import Button from "../../components/Button";

const Login = () => {
  return (
    <>
      <Container>
        <Content>
          <h1>Welcome to login</h1>
          <form action="a">
            <Input placeholder="Digite seu email" />
            <Input placeholder="Digite sua senha" />
            <Button>Entrar</Button>
          </form>
        </Content>
        <Background />
      </Container>
    </>
  );
};

export default Login;
