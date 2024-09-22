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

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 3em;
  font-weight: bold;
  margin-top: -40px;
  color: #ffffff;
  letter-spacing: 2px;
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
  margin-top: 60px;

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

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #B0B3B8;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;

const HowItWorks = () => {
  return (
    <Section>
      <Title>Who We Are</Title>
      <ContentWrapper>
        {/* First Section: Image on the Right */}
        <ContentBlock reverse={false}>
        <ImageWrapper>
            <img src={shieldImage1} alt="Polymorphic Code Engine" />
          </ImageWrapper>
          <TextWrapper>
            <Description>
            MutaEngine is a team of passionate cybersecurity experts, software engineers, and innovators united by a common vision: to create a world where software developers can innovate without fear of their work being compromised. Our founders, driven by decades of combined experience in cybersecurity, software development, and artificial intelligence, recognized the growing threats in the digital landscape and set out to build a company that could offer robust, future-proof security solutions. We are deeply committed to staying ahead of these threats, constantly evolving our approach to ensure that our clients' software remains secure against the most sophisticated attacks.
            </Description>
            
          </TextWrapper>
        </ContentBlock>

        {/* Second Section: Image on the Left */}
        <ContentBlock reverse={true}>
          <ImageWrapper>
            <img src={shieldImage2} alt="How it works" />
          </ImageWrapper>
          <TextWrapper reverse={true}>
            <Description>
            At MutaEngine, we believe that every developer, from startups to global enterprises, deserves the freedom to innovate without the risk of piracy or unauthorized modifications. Our team's diverse expertise allows us to develop cutting-edge technologies, like our Polymorphic Code Engine, which continuously adapts to defend against evolving threats. By partnering closely with our clients, we tailor our solutions to meet their unique security needs, providing peace of mind so they can focus on what they do best—creating transformative software.
            </Description>
           
          </TextWrapper>
        </ContentBlock>
      </ContentWrapper>
    </Section>
  );
};

export default HowItWorks;