// components/WhyChooseUsSection.js
import React from 'react';
import styled from 'styled-components';

const WhyChooseWrapper = styled.section`
  padding: 50px;
  background-color: #e8e8e8;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 2.5em;
  color: #333;
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: 1.2em;
  line-height: 1.6;
`;

const WhyChooseUsSection = () => (
  <WhyChooseWrapper>
    <Heading>Why Choose MutaEngine?</Heading>
    <Text>
      Our Polymorphic Code Engine is a game-changer in the field of software security, offering unparalleled protection against reverse engineering and unauthorized modifications.
    </Text>
  </WhyChooseWrapper>
);

export default WhyChooseUsSection;
