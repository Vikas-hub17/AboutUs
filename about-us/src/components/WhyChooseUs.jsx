// components/WhyChooseUs.js
import React from 'react';
import styled from 'styled-components';
import techImage from '../assests/image 5.jpg'; // Add correct paths to your images
import expertImage from '../assests/image 5.jpg';
import trackRecordImage from '../assests/image 5.jpg';

const WhyChooseUsWrapper = styled.section`
background-color: #00040F;
  padding: 100px 50px;
  color: white;
  text-align: center;
`;

const SectionHeading = styled.h2`
  font-size: 3em;
  margin-bottom: 50px;
  text-transform: uppercase;
  color: white;
  letter-spacing: 1px;
`;

const CardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
`;

const Card = styled.div`
  background-color: #13172a;
  border: 2px solid #00baff;
  border-radius: 10px;
  max-width: 350px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 186, 255, 0.3);
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const CardImage = styled.img`
  max-width: 100%;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const CardHeading = styled.h3`
  font-size: 1.8em;
  margin-bottom: 15px;
  color: #ffffff;
`;

const CardText = styled.p`
  font-size: 1em;
  line-height: 1.6;
  color: #d1d1d1;
`;

const WhyChooseUs = () => {
  return (
    <WhyChooseUsWrapper>
      <SectionHeading>Why Choose MutaEngine?</SectionHeading>
      <CardsWrapper>
        <Card>
          <CardImage src={techImage} alt="State-of-the-Art Technology" />
          <CardHeading>State-of-the-Art Technology</CardHeading>
          <CardText>
            Our Polymorphic Code Engine is a game-changer in the field of software security, offering unparalleled protection against reverse engineering and unauthorized modifications.
          </CardText>
        </Card>

        <Card>
          <CardImage src={expertImage} alt="Expert Team" />
          <CardHeading>Expert Team</CardHeading>
          <CardText>
            Our team of cybersecurity professionals and software engineers brings a wealth of knowledge and experience to the table, ensuring that your software is protected by the best in the business.
          </CardText>
        </Card>

        <Card>
          <CardImage src={trackRecordImage} alt="Proven Track Record" />
          <CardHeading>Proven Track Record</CardHeading>
          <CardText>
            We have a history of successful partnerships with companies of all sizes, from startups to enterprises, helping them secure their software and protect their intellectual property.
          </CardText>
        </Card>
      </CardsWrapper>
    </WhyChooseUsWrapper>
  );
};

export default WhyChooseUs;
