import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Sidebar } from "../Sidebar/Sidebar";
import * as SC from "./Layout.styled";
import { Container } from "../Container/Container";

export const Layout = () => {
  return (
    <>
      <Header />
      <Container>
        <SC.Wrapper>
          <Sidebar />
          <Outlet />
        </SC.Wrapper>
      </Container>
      <Footer />
    </>
  );
};
