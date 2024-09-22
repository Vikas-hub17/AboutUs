import React from 'react';
import styled from 'styled-components';
import { FaStar, FaShieldAlt, FaRocket } from 'react-icons/fa'; // Use FontAwesome for the icons.

const Section = styled.section`
  background-color: #00040F;
  color: white;
  padding: 50px 20px;

  @media (min-width: 768px) {
    padding: 80px;
  }
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const TextBlock = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: left;
  gap: 30px;

  h1 {
    font-size: 2.5rem;
    line-height: 1.2;

    span {
      color: #00D9FF;
    }

    @media (min-width: 768px) {
      font-size: 3rem;
    }
  }

  p {
    color: #B0B3B8;
    font-size: 1.1rem;
    line-height: 1.8;
  }

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const FeatureList = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: right;
  gap: 40px;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  h3 {
    color: #FFFFFF;
    font-size: 1.4rem;
  }

  p {
    color: #B0B3B8;
    font-size: 1rem;
    line-height: 1.6;
  }
`;

const FeatureIcon = styled.div`
  background-color: #011027;
  padding: 10px;
  border-radius: 50%;
  font-size: 1.8rem;
  color: #00D9FF;
`;

const Button = styled.a`

  background-color: #00D9FF;
  color: #00040F;
  border-radius: 10px;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.3s ease;
  width: 150px;
  height: 50px;
  text-align: center;
  align-content: center;
  &:hover {
    background-color: #00A7D1;
  }
`;

const Features = () => {
  return (
    <Section>
      <Wrapper>
        {/* Left text block */}
        <TextBlock>
          <h1>
            Our Values
          </h1>
          <p>
          We are driven by innovation, integrity, excellence, and a customer-centric approach to deliver unparalleled software security solutions.          </p>
          <Button href="#">Get Started</Button>
        </TextBlock>

        {/* Right feature list */}
        <FeatureList>
          <FeatureItem>
            <FeatureIcon>
              <FaStar />
            </FeatureIcon>
            <div>
              <h3>Innovation</h3>
              <p>
              We are committed to pushing the boundaries of what’s possible in software security. Our team constantly explores new technologies and methodologies to keep our solutions at the forefront of the industry.
              </p>
            </div>
          </FeatureItem>

          <FeatureItem>
            <FeatureIcon>
              <FaShieldAlt />
            </FeatureIcon>
            <div>
              <h3>Integrity</h3>
              <p>
              Trust is at the core of everything we do. We are dedicated to providing transparent, reliable, and effective security solutions that our clients can depend on.
              </p>
            </div>
          </FeatureItem>

          <FeatureItem>
            <FeatureIcon>
              <FaRocket />
            </FeatureIcon>
            <div>
              <h3>Excellence</h3>
              <p>
              We strive for excellence in every aspect of our work, from the quality of our products to the level of service we provide to our clients.
              </p>
            </div>
          </FeatureItem>

          <FeatureItem>
            <FeatureIcon>
              <FaStar />
            </FeatureIcon>
            <div>
              <h3>Customer-Centric</h3>
              <p>
              Our clients are our top priority. We work closely with them to understand their unique needs and tailor our solutions to meet those needs.              </p>
            </div>
          </FeatureItem>

        </FeatureList>
      </Wrapper>
    </Section>
  );
};

export default Features;
