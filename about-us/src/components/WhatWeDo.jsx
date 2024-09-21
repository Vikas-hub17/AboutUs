// components/WhatWeDoSection.js
import React from 'react';
import styled from 'styled-components';

const WhatWeDoWrapper = styled.section`
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

const WhatWeDoSection = () => (
  <WhatWeDoWrapper>
    <Heading>What We Do</Heading>
    <Text>
      We provide advanced software protection with our Polymorphic Code Engine, ensuring your applications stay secure from piracy, reverse engineering, and unauthorized modifications.
    </Text>
  </WhatWeDoWrapper>
);

export default WhatWeDoSection;
