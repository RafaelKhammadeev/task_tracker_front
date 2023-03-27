import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../../molecules/Header";
import Footer from "../../molecules/Footer";
import Button from "../../atoms/Button";

const MainContent = styled.div`
  background: white;
`;

const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 50px;
  right: 50px;
`;

const DefaultTemplate = ({ children }) => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const onScroll = () => {
    if (window.scrollY > 0) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", onScroll);
  }, []);

  const onClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <Header />
      {showScrollButton && (
        <ButtonWrapper>
          <Button onClick={onClick} label="Scroll to top" color="black" />
        </ButtonWrapper>
      )}
      <MainContent>{children}</MainContent>
      <Footer />
    </div>
  );
};

export default DefaultTemplate;
