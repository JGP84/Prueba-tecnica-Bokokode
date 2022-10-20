import React from "react";
import Header from "../../components/header/Header";
import Main from "../../components/main/Main";
import Navbar from "../../components/navbar/Navbar";
import { Container, Line } from "./styleHome";

const Home = () => {
  return (
    <>
      <Container>
        <Navbar />
        <Line />
        <Header />
        <Line />
        <Main />
      </Container>
    </>
  );
};

export default Home;
