// components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 1em;
`;

const FooterNav = styled.nav`
  margin-top: 10px;
  ul {
    list-style-type: none;
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 0;
  }
  li a {
    color: white;
    text-decoration: none;
  }
`;

const Footer = () => (
  <FooterWrapper>
    <FooterText>MutaEngine © 2024. All rights reserved.</FooterText>
    <FooterNav>
      <ul>
        <li><a href="#overview">Overview</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </FooterNav>
  </FooterWrapper>
);

export default Footer;
