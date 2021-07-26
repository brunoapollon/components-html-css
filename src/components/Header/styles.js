import styled from "styled-components";

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
    display: flex;
    list-style: none;
  }
  > nav,
  ul,
  li {
    > a {
      text-decoration: none;
      color: #fff;
    }
    margin-right: 30px;
  }
  > aside {
    margin-top: 15px;
    margin-left: auto;
    > a {
      text-decoration: none;
      color: #fff;
      margin: 15px 15px;
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
