
import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import MutaEngine from '../assests/MutaEngine.png';

// Styled Components
const FooterContainer = styled.footer`
  background-color: #00040F;
  color: white;
  padding: 40px 0;
  font-family: 'Arial', sans-serif;
  border-top: 1px solid #333;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterLogo = styled.div`
  font-size: 24px;
  font-weight: bold;

   img {
    height: 40px;
    width: 80px;
  }
`;

const FooterNav = styled.nav`
  display: flex;
  gap: 20px;

  a {
    color: white;
    text-decoration: none;
    font-size: 12px;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 20px auto 0;
  padding: 0 20px;
  font-size: 12px;
  border-top: 1px solid #333;
  padding-top: 20px;
`;

const FooterSocials = styled.div`
  display: flex;
  gap: 15px;

  a {
    color: white;
    font-size: 20px;
    text-decoration: none;
  }

  a:hover {
    color: #ccc;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLogo>
        <img src={MutaEngine} alt="MutaEngine Logo" />
        </FooterLogo>
        <FooterNav>
          <a href="/overview">Overview</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
          <a href="/features">Features</a>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-use">Terms of Use</a>
        </FooterNav>
      </FooterContent>
      <FooterBottom>
        <div>MutaEngine © 2024. All rights reserved.</div>
        <FooterSocials>
          <a href="https://youtube.com"><FaYoutube /></a>
          <a href="https://facebook.com"><FaFacebookF /></a>
          <a href="https://twitter.com"><FaTwitter /></a>
          <a href="https://instagram.com"><FaInstagram /></a>
          <a href="https://linkedin.com"><FaLinkedinIn /></a>
        </FooterSocials>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
