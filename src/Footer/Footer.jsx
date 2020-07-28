import React from 'react';
import { Row } from 'react-bootstrap';

import whatsappLinkImg from '../img/footer-whatsapp.png';
import './Footer.css';

function Footer() {
  return (
    <Row className="footer">
      <a href="https://api.whatsapp.com/send?phone=5574999252525&text=Quero%20me%20juntar%20ao%20grupo%20do%20PGBP%20de%20Bonfim!">
        <img src={whatsappLinkImg} alt="Clique para participar do grupo no whatsapp do PGBP de Bonfim." />
      </a>
    </Row>
  );
}

export default Footer;
