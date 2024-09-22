// components/MissionSection.js
import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../assests/BG.jpg'; // Add the correct path to your background image

const MissionWrapper = styled.section`
  padding: 100px 50px;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  color: white;
  text-align: left;
  position: relative;
  display: flex;
  justify-content: left;
  height: 80vh;
`;

const ContentWrapper = styled.div`
  max-width: 800px;
`;

const MissionHeading = styled.h2`
  font-size: 4em;
  font-weight: bold;
  margin-bottom: 20px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 2px;
  
`;

const MissionText = styled.p`
  font-size: 1.4em;
  line-height: 1.6;
  margin-bottom: 40px;
  color: #e0e0e0;
`;

const ButtonWrapper = styled.div`
  display: inline-block;
`;

const LearnMoreButton = styled.a`
  background-color: transparent;
  border: 2px solid #00ffca;
  color: white;
  padding: 15px 20px;
  font-size: 1em;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #00ffca;
    color: #333;
  }
`;

const MissionSection = () => (
  <MissionWrapper>
    <ContentWrapper>
      <MissionHeading>Our Mission</MissionHeading>
      <MissionText>
        At MutaEngine, our mission is to revolutionize software security by providing cutting-edge solutions that protect your software from piracy, reverse engineering, and unauthorized modifications. We believe in empowering developers and companies to focus on innovation while we ensure their intellectual property remains secure.
      </MissionText>
      <ButtonWrapper>
        <LearnMoreButton href="#learn-more">Learn More</LearnMoreButton>
      </ButtonWrapper>
    </ContentWrapper>
  </MissionWrapper>
);

export default MissionSection;
