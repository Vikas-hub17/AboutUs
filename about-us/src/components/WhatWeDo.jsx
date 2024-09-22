// components/WhatWeDoSection.js
import React from 'react';
import styled from 'styled-components';
import bg from '../assests/Vector.png';
import Grid from '../assests/Grid.jpg';
import Grid1 from '../assests/Grid1.jpg';

// Wrapper for the entire section
const WhatWeDoWrapper = styled.section`
  padding: 50px;
  background-color: #0c0f16; /* Dark background */
  color: #fff; /* Text color */
  text-align: center;
  font-family: 'Arial', sans-serif;
`;

// Heading style for "What We Do?"
const Heading = styled.h2`
  font-size: 3em;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 20px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

// Subheading style for description
const SubHeading = styled.p`
  font-size: 1.2em;
  color: #b5b5b5;
  margin-bottom: 40px;
  margin-left: auto;
  margin-right: auto;
`;

// Container for the two grid items, in one row
const ContentRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Two columns in a row */
  justify-content: space-evenly;
  margin-bottom: 40px;
  margin-left: 10%;
`;

// Individual grid item with text on top and image below
const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 50px;
  background-color: rgba(20, 20, 30, 0.9);
  border: 4px solid rgba(100, 100, 255, 0.4);
  box-shadow: 0 0 20px rgba(100, 100, 255, 0.6);
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  width: 500px;
`;

// Grid background inside content box
const BoxGridBackground = styled.div`
  background-image: url(${bg});
  background-size: fill;
  opacity: 0.4;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

// Styling for the descriptive text
const Text = styled.p`
  font-size: 1.2em;
  line-height: 1.6;
  color: #b5b5b5;
  margin-bottom: 20px;
  text-align: left;
`;

// Image inside the content box
const Image = styled.img`
  width: 80%;
  height: auto;
  box-shadow: 0px 0px 30px rgba(0, 255, 255, 0.6); /* Neon-like shadow */
  border-radius: 10px;
  margin-top: 20px; /* Ensure space between text and image */
`;

// The main component rendering the UI
const WhatWeDoSection = () => (
  <WhatWeDoWrapper>
    <Heading>What We Do ?</Heading>
    <SubHeading>
      We provide advanced software protection with our Polymorphic Code Engine, ensuring your applications <br></br>stay secure from piracy, reverse engineering, and unauthorized modifications.
    </SubHeading>

    {/* Single row with two grid columns */}
    <ContentRow>
      <ContentBox>
        <Text>
          We specialize in advanced software protection through our innovative Polymorphic Code Engine.
          By constantly mutating the code at runtime, MutaEngine makes it extremely difficult for hackers 
          to decompile or reverse-engineer software, providing an impenetrable barrier against unauthorized 
          access and piracy.
        </Text>
        <Image src={Grid} alt="Polymorphic Code Engine" />
        <BoxGridBackground />
      </ContentBox>

      <ContentBox>
        <Text>
          Our solutions are designed to integrate seamlessly with your existing development workflows, whether you're 
          building traditional applications or pioneering new blockchain-based projects in the Web3 space. 
          MutaEngine offers a range of tools and services to ensure your software is secure from every angle.
        </Text>
        <Image src={Grid1} alt="Web3 Integration" />
        <BoxGridBackground />
      </ContentBox>
    </ContentRow>
  </WhatWeDoWrapper>
);

export default WhatWeDoSection;
