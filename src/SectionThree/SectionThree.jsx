import React from 'react';

import sectionThreeImg from '../img/image-section-green.png';
import './SectionThree.css';

function SectionThree({ description }) {
  return (
    <div className="section-three">
      <img
        src={sectionThreeImg}
        alt={`Cresci aqui nesta cidade maravilhosa, terra acolhedora e de gente que luta,
              batalha e corre atrás buscando novas conquistas. Acredito que podemos fazer
              sim, um governo participativo, construindo novas ideias para nossa Senhor do
              Bonfim. - Laércio Jr.`}
      />
    </div>
  );
}

export default SectionThree;
