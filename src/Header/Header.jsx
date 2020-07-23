import React from 'react';
import { Col, Row } from 'react-bootstrap';

import logo from '../img/logo.png';
import logoParty from '../img/logo_party.png';
import './Header.css';

function Header({ description }) {
  return (
    <Row className="header">
      <Col>
        <div className="logo">
          <img src={logo} alt="Laércio Júnior" />
        </div>
        <div className='logo-party'>
          <img src={logoParty} alt="Democratas" />
        </div>
      </Col>
    </Row>
  );
}

export default Header;
