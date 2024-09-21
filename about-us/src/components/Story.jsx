import React from 'react';
import styled from 'styled-components';
import shieldImage1 from '../assests/Img.png'; // Placeholder for "Polymorphic Code" image
import shieldImage2 from '../assests/Img.png'; // Placeholder for "How It Works" image


const Section = styled.section`
  background-color: #00040F;
  color: white;
  padding: 50px 20px;

  @media (min-width: 768px) {
    padding: 80px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const ContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;

  @media (min-width: 768px) {
    flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')}; /* Image on the right for reverse=false, left for reverse=true */
    text-align: left;
    justify-content: space-between;
    align-items: center;
  }
`;

const ImageWrapper = styled.div`
  margin-bottom: 20px;
  flex-basis: 50%;

  img {
    width: 100%;
    max-width: 400px;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  }

  @media (min-width: 768px) {
    margin-bottom: 0; /* Remove bottom margin on larger screens */
  }
`;

const TextWrapper = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;

  @media (min-width: 768px) {
    padding: ${({ reverse }) => (reverse ? '0 20px 0 0' : '0 0 0 20px')}; /* Add padding based on reverse prop */
  }
`;

const Title = styled.h2`
  font-size: 1.8rem;
  color: #FFFFFF;
  margin-bottom: 10px;

  span {
    color: #00D9FF; /* Teal highlight */
  }

  @media (min-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #B0B3B8;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Button = styled.a`
  display: inline-block;
  padding: 8px 5px;
  border: 1.5px solid #00D9FF;
  border-radius: 10px;
  text-align: center;
  width: 100px;
  color: white;
  text-decoration: none;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #00D9FF;
    color: #00040F;
  }
`;

const HowItWorks = () => {
  return (
    <Section>
      <ContentWrapper>
        {/* First Section: Image on the Right */}
        <ContentBlock reverse={false}>
        <ImageWrapper>
            <img src={shieldImage1} alt="Polymorphic Code Engine" />
          </ImageWrapper>
          <TextWrapper>
            <Title>
              Our Story
            </Title>
            <Description>
            MutaEngine was born out of a simple realization: traditional methods of software protection were no longer sufficient in an age where hackers are constantly finding new ways to bypass security measures. Our founders set out to create a solution that could adapt and evolve in real-time, providing a level of protection that static methods simply couldn’t match.

What started as a small project has grown into a leading solution trusted by developers and companies around the world. Today, MutaEngine continues to innovate, constantly improving our technology to meet the challenges of tomorrow.
            </Description>
            <Button href="#">Learn More</Button>
          </TextWrapper>
        </ContentBlock>
      </ContentWrapper>
    </Section>
  );
};

export default HowItWorks;