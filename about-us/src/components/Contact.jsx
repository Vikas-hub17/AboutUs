import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background-color: #00040F;
  color: white;
  padding: 50px 20px;

  @media (min-width: 768px) {
    padding: 80px;
  }
`;

const CTAButton = styled.a`
  
 margin-top: -40px;
  padding: 10px 30px;
  background-color: #00D9FF;
  color: #00040F;
  border-radius: 10px;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.3s ease;
  
  
  &:hover {
    background-color: #00A7D1;
  }
`;

const CTASection = styled.div`
  
  background: linear-gradient(135deg, #383838 0%, #1F1F1F 100%);
  border-radius: 20px;
  text-align: center;
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.2); /* Shadow for elevation effect */

  h2 {
    color: #FFFFFF;
    font-size: 2.2rem;
    margin-bottom: 20px;
    font-weight: bold;
    text-align: left;
    padding-left: 50px;
    padding-top:50px;

    span {
      color: #00D9FF; /* Highlighting the word "Secure" */
    }

    @media (min-width: 768px) {
      font-size: 2.8rem;
    }
  }

  p {
    color: #B0B3B8;
    font-size: 1.1rem;
    text-align: left;
    padding-left: 50px;
    padding-top:20px;
  }

  @media (min-width: 768px) {
    max-width: 900px;
    margin: 0 auto;
  }
`;

const Features = () => {
  return (
    <Section>
      <CTASection>
        <h2>
          Ready to <span>Secure</span> Your <br></br> Software?
        </h2>
        <p>
          Get started with MutaEngine today and protect your software with <br></br> the most advanced security technology available.
        </p>
        <CTAButton href="#">Start Now</CTAButton>
      </CTASection>
    </Section>
  );
};

export default Features;
