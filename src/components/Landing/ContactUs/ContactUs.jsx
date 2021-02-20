import { Col, Row } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { PRIMARY_COLOR } from '../../utils/colors';
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

const SocialMediaContainer = styled.div`

`;

const AContent = styled.a`
  margin: 0 4px;
  font-size: 25px;
  color: ${PRIMARY_COLOR};
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
                <h3>Sede principal</h3>
                <p>Villavicencio, Colombia</p>
              </Col>
            </Row>
            <Row>
              <Col className="i-content-col" xs={6}>
                <IContent className="far fa-envelope-open" />
              </Col>
              <Col className="descrip-content-col" xs={18}>
                <h3>Correo electrónico</h3>
                <p>info@cargame.com.co</p>
              </Col>
            </Row>
            <Row>
              <Col className="i-content-col" xs={6}>
                <IContent className="fas fa-phone" />
              </Col>
              <Col className="descrip-content-col" xs={18}>
                <h3>Télefono</h3>
                <p>+57 317 528-4083</p>
              </Col>
            </Row>
            <Row>
              <Col className="i-content-col" xs={6}>
                <IContent className="fas fa-share-alt" />
              </Col>
              <Col className="descrip-content-col" xs={18}>
                <h3>Redes sociales</h3>
                <SocialMediaContainer>
                  <AContent href="https://www.facebook.com/Cargameapp"><i className={`fab fa-facebook`}></i></AContent>
                  <AContent href="https://www.youtube.com/channel/UCAEtD9ycbtx-PLudy2QvgoQ"><i className={`fab fa-youtube`}></i></AContent>
                  <AContent href="https://instagram.com/cargameapp"><i className={`fab fa-instagram`}></i></AContent>
                </SocialMediaContainer>
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