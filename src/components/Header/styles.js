import styled from "styled-components";
import { shade } from "polished";

const Container = styled.div`
  width: 100%;
  height: 65px;
  padding: 5px;
  background-color: #090b47;
  color: #fff;
  display: flex;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  > nav {
    margin-top: 15px;
  }
  > nav,
  ul {
    @media (max-width: 660px) {
      display: none;
    }
    display: flex;
    list-style: none;
  }
  > nav,
  ul,
  li {
    > a {
      text-decoration: none;
      color: #fff;
      &:hover {
        color: ${shade(0.5, "#fff")};
      }
    }
    margin-right: 30px;
  }
  > aside {
    @media (max-width: 660px) {
      display: none;
    }
    margin-top: 15px;
    margin-left: auto;
    > a {
      text-decoration: none;
      color: #fff;
      margin: 15px 15px;
      &:hover {
        color: ${shade(0.5, "#fff")};
      }
    }
  }
  .menu-icon {
    margin-top: 15px;
    margin-left: auto;
  }
  @media (min-width: 660px) {
    .menu-icon {
      display: none;
    }
  }
`;

const LogoSpace = styled.div`
  height: 55px;
  width: 55px;
  background-color: #878584;
  margin-right: 30px;
`;

export { Container, LogoSpace, Content };
