import React from "react";
import styled from "styled-components";
import Header from "../../molecules/Header";
import Footer from "../../molecules/Footer";

const MainContent = styled.div`
  background: #3c9f7f;
`;

const DefaultTemplate = ({ children }) => {
  return (
    <div>
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
    </div>
  );
};

export default DefaultTemplate;
