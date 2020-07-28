import React from 'react';
import { Row } from 'react-bootstrap';

import background from '../img/section3-background.png';
import './SectionThree.css';

function SectionThree({ description }) {
  return (
    <Row className="section-three">
      <img
        src={background}
        alt={`Cresci aqui nesta cidade maravilhosa, terra acolhedora e de gente que luta,
              batalha e corre atrás buscando novas conquistas. Entendo que não existe um
              projeto eficiente sem ouvir a sociedade, por isso, acredito que podemos fazer
              sim, um governo participativo, ouvindo a sociedade, os nossos servidores e todos
              juntos construiremos novas ideias para Senhor do Bonfim. - Laércio Jr.`}
      />
    </Row>
  );
}

export default SectionThree;
