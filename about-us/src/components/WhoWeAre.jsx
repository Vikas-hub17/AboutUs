// components/WhoWeAreSection.js
import React from 'react';
import styled from 'styled-components';

const WhoWeAreWrapper = styled.section`
  padding: 50px;
  background-color: #ffffff;
`;

const Heading = styled.h2`
  font-size: 2.5em;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: 1.2em;
  line-height: 1.6;
  margin: 0 auto;
  max-width: 800px;
  text-align: center;
`;

const WhoWeAreSection = () => (
  <WhoWeAreWrapper>
    <Heading>Who We Are</Heading>
    <Text>
      MutaEngine is a team of passionate cybersecurity experts, software engineers, and innovators united by a common vision: to create a world where software developers can innovate without fear of their work being compromised.
    </Text>
  </WhoWeAreWrapper>
);

export default WhoWeAreSection;
