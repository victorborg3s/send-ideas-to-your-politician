import React from 'react';
import { Row } from 'react-bootstrap';

import background from '../img/section2-background.png';
import './SectionTwo.css';

function SectionTwo() {
  const description = "O programa de Governo Bonfim Participativo (PGBP) é um projeto voltado " 
    + "população pra que juntos possamos apontar, discutir e opinar sobre as políticas públicas "
    + "para nossa cidade.";
  return (
    <Row className="section-two">
      <img src={background} alt={description} />
    </Row>
  );
}

export default SectionTwo;
