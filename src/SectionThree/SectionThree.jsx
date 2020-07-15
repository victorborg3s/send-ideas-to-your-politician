import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'

import politicianPhoto from '../politician-photo.png';
import './SectionThree.css';

function SectionThree({ description }) {
  return (
    <div className="section-three">
      <div className="text-box">
        <Row>
          <Col md="auto" className="quote-left">
            <FontAwesomeIcon icon={faQuoteLeft} size="2x" />{' '}
          </Col>
          <Col>
            Cresci aqui nesta cidade maravilhosa, terra acolhedora e de gente que luta, batalha e
            corre atrás buscando novas conquistas. Acredito que podemos fazer sim, um governo
            participativo, construindo novas ideias para nossa Senhor do Bonfim.
          </Col>
          <Col md="auto" className="quote-right">
            <FontAwesomeIcon icon={faQuoteRight} size="2x" />{' '}
          </Col>
        </Row>
      </div>
      <div className="title-box">
        <img src={politicianPhoto} alt={description} />
      </div>
    </div>
  );
}

export default SectionThree;
