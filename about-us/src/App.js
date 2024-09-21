// App.js
import React from 'react';
import Header from './components/Header';
import MissionSection from './components/Mission';
import WhoWeAreSection from './components/WhoWeAreSection';
import WhatWeDoSection from './components/WhatWeDoSection';
import ValuesSection from './components/ValuesSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import ContactSection from './components/ContactSection';
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
