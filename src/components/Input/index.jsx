import React from "react";

import { Container } from "./styles";

const Input = (props) => {
  return (
    <Container>
      <input placeholder={props.placeholder} />
    </Container>
  );
};

export default Input;
