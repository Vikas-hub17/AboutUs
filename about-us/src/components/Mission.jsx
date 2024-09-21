// components/MissionSection.js
import React from 'react';
import styled from 'styled-components';

const MissionWrapper = styled.section`
  padding: 50px;
  background-color: #f1f1f1;
  text-align: center;
`;

const MissionHeading = styled.h2`
  font-size: 2.5em;
  color: #333;
  margin-bottom: 20px;
`;

const MissionText = styled.p`
  font-size: 1.2em;
  line-height: 1.6;
`;

const MissionSection = () => (
  <MissionWrapper>
    <MissionHeading>Our Mission</MissionHeading>
    <MissionText>
      At MutaEngine, our mission is to revolutionize software security by providing cutting-edge solutions that protect your software from piracy, reverse engineering, and unauthorized modifications.
    </MissionText>
  </MissionWrapper>
);

export default MissionSection;
