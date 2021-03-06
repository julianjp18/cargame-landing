import { Col, Row } from 'antd';
import React from 'react';
import styled from 'styled-components';
import Title from '../Title/Title';
import ContactForm from './ContactForm';
import './contactUs.scss';


const ContactUsContainer = styled.div`
  
`;

const ContactUsContent = styled.div`
  text-align: start;
  border: 1px solid #f2f2f2;
  border-radius: 5px;
  box-shadow: -1px 4px 19px -3px rgba(0,0,0,0.75);
  min-height: 500px;
  margin-bottom: 20px;
  padding-top: 50px;
`;

const IContent = styled.i`
  text-align: end;
`;

const ContactUs = () => {
  return (
    <ContactUsContainer id="contact-us">
      <Title
        title="CONTÁCTANOS"
        description="Mantente en contacto."
      />
      <Row>
        <Col className="info-col" xs={24} md={8}>
          <ContactUsContent>
            <Row>
              <Col className="i-content-col" xs={6}>
                <IContent className="fas fa-map-marker-alt" />
              </Col>
              <Col className="descrip-content-col" xs={18}>
                <h3>Sede principal:</h3>
                <p>Villavicencio, Colombia</p>
              </Col>
            </Row>
            <Row>
              <Col className="i-content-col" xs={6}>
                <IContent className="far fa-envelope-open" />
              </Col>
              <Col className="descrip-content-col" xs={18}>
                <h3>Correo electrónico:</h3>
                <p>contacto@cargame.com</p>
              </Col>
            </Row>
            <Row>
              <Col className="i-content-col" xs={6}>
                <IContent className="fas fa-phone" />
              </Col>
              <Col className="descrip-content-col" xs={18}>
                <h3>Télefono:</h3>
                <p>+ 57 3202342345</p>
              </Col>
            </Row>
          </ContactUsContent>
        </Col>
        <Col className="form-container" xs={24} md={16}>
          <ContactUsContent>
            <ContactForm />
          </ContactUsContent>
        </Col>
      </Row>
    </ContactUsContainer>
  );
};

export default ContactUs;