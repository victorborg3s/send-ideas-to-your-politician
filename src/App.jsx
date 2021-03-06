import React, { useRef } from 'react';
import { Container } from 'react-bootstrap';

import Header from './Header';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import SectionForm from './SectionForm';
import Footer from './Footer';
import './App.css';

function App() {
  const formRef = useRef(null);
  const description = "Laércio Jr: Pré-candidato a Prefeito";
  return (
    <Container className="app">
      <Header description={description} />
      <SectionOne
        onParticipateClick={() => formRef.current.scrollToForm()}
        description={description}
      />
      <SectionTwo />
      <SectionThree />
      <SectionForm ref={formRef} />
      <Footer />
    </Container>
  );
}

export default App;
