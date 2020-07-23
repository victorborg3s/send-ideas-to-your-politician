import React from 'react';
import { Row } from 'react-bootstrap';

import background from '../img/section1-background.png';
import pgbp from '../img/section1-pgbp.png';
import button from '../img/section1-btn.png';
import './SectionOne.css';

function SectionOne({ description, onParticipateClick }) {
  return (
    <Row className="section-one">
      <img className="background" src={background} alt="Programa de Governo Bonfim Participativo" />
      <img className="pgbp" src={pgbp} alt="Programa de Governo Bonfim Participativo" />
      <div className="slogan">
        QUAL É A
        <br/>
        <strong>
          SENHOR
          <br/>
          DO BONFIM
        </strong>
        <br/>
        DOS SEUS
        <br/>
        SONHOS?
        <br/>
        <img className="button" src={button} alt="Envie sua ideia" onClick={onParticipateClick} />
      </div>
    </Row>
  );
}

export default SectionOne;
