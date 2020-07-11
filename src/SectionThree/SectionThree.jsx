import React from 'react';

import politicianPhoto from '../politician-photo.png';
import './SectionThree.css';

function SectionThree({ description }) {
  return (
    <div className="section-three">
      <div className="text-box">
        
      </div>
      <div className="title-box">
        <img src={politicianPhoto} alt={description} />
      </div>
    </div>
  );
}

export default SectionThree;
