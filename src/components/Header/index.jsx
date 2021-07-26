import React from "react";

import { Container, LogoSpace, Content } from "./styles";

const Header = () => {
  return (
    <Container>
      <LogoSpace />
      <Content>
        <nav>
          <ul>
            <li>
              <a href="a"> Page 1</a>
            </li>
            <li>
              <a href="a"> Page 2</a>
            </li>
            <li>
              <a href="a"> Page 3</a>
            </li>
            <li>
              <a href="a"> Page 4</a>
            </li>
          </ul>
        </nav>
        <aside>
          <a href="a"> My profile</a>
          <a href="a"> Logout </a>
        </aside>
      </Content>
    </Container>
  );
};

export default Header;
