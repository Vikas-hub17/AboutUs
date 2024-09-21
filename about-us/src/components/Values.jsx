// components/ValuesSection.js
import React from 'react';
import styled from 'styled-components';

const ValuesWrapper = styled.section`
  padding: 50px;
  background-color: #ffffff;
`;

const Heading = styled.h2`
  font-size: 2.5em;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const ValueItem = styled.div`
  background-color: #f1f1f1;
  padding: 20px;
  border-radius: 5px;
`;

const ValueHeading = styled.h3`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

const ValueText = styled.p`
  font-size: 1.1em;
`;

const ValuesSection = () => (
  <ValuesWrapper>
    <Heading>Our Values</Heading>
    <ValuesGrid>
      <ValueItem>
        <ValueHeading>Innovation</ValueHeading>
        <ValueText>We push the boundaries of what's possible in software security.</ValueText>
      </ValueItem>
      <ValueItem>
        <ValueHeading>Integrity</ValueHeading>
        <ValueText>Trust is at the core of everything we do.</ValueText>
      </ValueItem>
      <ValueItem>
        <ValueHeading>Excellence</ValueHeading>
        <ValueText>We strive for excellence in every aspect of our work.</ValueText>
      </ValueItem>
      <ValueItem>
        <ValueHeading>Customer-Centric</ValueHeading>
        <ValueText>Our clients are our top priority.</ValueText>
      </ValueItem>
    </ValuesGrid>
  </ValuesWrapper>
);

export default ValuesSection;
