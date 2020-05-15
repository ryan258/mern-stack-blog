import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <span
        style={{
          color: "#fff",
          position: "relative",
          top: "1.5rem",
          left: "1rem",
        }}
      >
        &copy; {new Date().getFullYear()} All Rights Reserved. Manny & Orson Co.
      </span>
    </FooterContainer>
  );
};

export default Footer;

// Footer Container
const FooterContainer = styled.footer`
  background: #344;
  height: 4rem;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
`;
