import React from 'react';

import politicianPhoto from '../img/politician-photo-cutted.png';
import './SectionPresentation.css';

function SectionPresentation({ description, onParticipateClick }) {
  return (
    <div className="presentation">
      <div className="photo">
        <img src={politicianPhoto} alt={description} />
      </div>
      <div className="right-box">
        <div className="slogan">
          QUAL É
          <br/>
          <strong>A SENHOR DO BONFIM</strong>
          <br/>
          DOS SEUS SONHOS?
        </div>
        <button onClick={onParticipateClick} className="go-to-form">ENVIE SUA IDEIA</button>
      </div>
    </div>
  );
}

export default SectionPresentation;
