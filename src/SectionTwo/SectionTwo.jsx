import React from 'react';

import sectionTwoImage from '../image-section-blue.png';
import './SectionTwo.css';

function SectionTwo() {
  return (
    <div className="section-two">
      <img
        alt={`O Programa de Governo Participativo é um projeto voltado a população para que juntos
              possamos apontar, discutir e opinar sobre as políticas públicas para a nossa cidade.`}
        src={sectionTwoImage}
      />
    </div>
  );
}

export default SectionTwo;
