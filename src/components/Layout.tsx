import Header from "./Header";
import Sider from "./Sider";
import styled from "styled-components";
import {Outlet} from "react-router-dom"
const Layout = () => {
  return (
    <Container>
      <Header />
      <Main>
        <Sider />
        <Holder>
          <Div>
            <Outlet />
          </Div>
        </Holder>
      </Main>
    </Container>
  );
};

export default Layout;

const Div = styled.div`
  width: calc(100% - 101px);
 background-color: grey; 
`;

const Holder = styled.div`
  width: calc(100%);
  display: flex;
  background-color: pink;
  justify-content: end;
`;

const Main = styled.div`
  display: flex;
  width: 100%;
  background-color: crimson;
`;
const Container = styled.div``;
