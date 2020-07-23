import React from 'react';
import { Col, Row } from 'react-bootstrap';

import background from '../img/sec2-background.png';
import './SectionTwo.css';

function SectionTwo() {
  return (
    <Row className="section-two">
      <Col >
        <img src={background} alt="" />
      </Col>
    </Row>
  );
}

export default SectionTwo;
