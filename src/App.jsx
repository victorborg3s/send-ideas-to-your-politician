import React, { useRef } from 'react';
import { Container } from 'react-bootstrap';

import Header from './Header';
import SectionPresentation from './SectionPresentation';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import SectionForm from './SectionForm';
import './App.css';

function App() {
  const formRef = useRef(null);
  const description = "Laércio Jr: Pré-candidato a Prefeito";
  return (
    <Container className="app">
      <Header description={description} />
      <SectionPresentation
        onParticipateClick={() => formRef.current.scrollToForm()}
        description={description}
      />
      <SectionTwo />
      <SectionThree description={description} />
      <SectionForm ref={formRef} />
    </Container>
  );
}

export default App;
