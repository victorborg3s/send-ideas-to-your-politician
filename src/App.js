import React, { useRef } from 'react';

import SectionPresentation from './SectionPresentation';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import SectionForm from './SectionForm';
import headerImage from './header.png';
import './App.css';

function App() {
  const formRef = useRef(null);
  const description = "Laércio Jr: Pré-candidato a Prefeito";
  return (
    <div className="app">
      <header>
        <img src={headerImage} alt={description} />
      </header>
      <SectionPresentation
        onParticipateClick={() => formRef.current.scrollToForm()}
        description={description}
      />
      <SectionTwo />
      <SectionThree description={description} />
      <SectionForm ref={formRef} />
    </div>
  );
}

export default App;
