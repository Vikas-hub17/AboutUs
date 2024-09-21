// App.js
import React from 'react';
import Header from '../src/components/Header';
import MissionSection from '../src/components/Mission';
import WhoWeAreSection from '../src/components/WhoWeAre';
import WhatWeDoSection from '../src/components/WhatWeDo';
import ValuesSection from '../src/components/Values';
import WhyChooseUsSection from '../src/components/WhyChooseUs';
import ContactSection from '../src/components/Contact';
import Footer from './components/Footer';
import styled from 'styled-components';

const PageWrapper = styled.div`
  font-family: 'Arial', sans-serif;
  background-color: #f9f9f9;
  color: #333;
`;

function App() {
  return (
    <PageWrapper>
      <Header />
      <MissionSection />
      <WhoWeAreSection />
      <WhatWeDoSection />
      <ValuesSection />
      <WhyChooseUsSection />
      <ContactSection />
      <Footer />
    </PageWrapper>
  );
}

export default App;
