// components/ContactSection.js
import React from 'react';
import styled from 'styled-components';

const ContactWrapper = styled.section`
  padding: 50px;
  background-color: #ffffff;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 2.5em;
  color: #333;
  margin-bottom: 20px;
`;

const ContactText = styled.p`
  font-size: 1.2em;
  line-height: 1.6;
`;

const ContactSection = () => (
  <ContactWrapper>
    <Heading>Get In Touch</Heading>
    <ContactText>Have questions or want to learn more? Contact us at info@mutaengine.com</ContactText>
  </ContactWrapper>
);

export default ContactSection;
