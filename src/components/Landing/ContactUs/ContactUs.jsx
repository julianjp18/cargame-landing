import { Col, Row } from 'antd';
import React, { useEffect } from 'react';
import { BLACK_COLOR, PRIMARY_COLOR, THIRD_TEXT_COLOR, WHITE_COLOR } from '../../utils/colors';
import ContactForm from './ContactForm';
import Fade from 'react-reveal/Fade';
import FooterButtons from '../FooterButtons/FooterButtons';
import mainBackground from '../../assets/images/new-version/contact-us-background.png';
import styled from 'styled-components';
import './contactUs.scss';

const ContactUsContainer = styled.div`
  
`;

const ContactUsContent = styled.div`
  text-align: start;
  border-radius: 5px;
  min-height: 500px;
  margin-bottom: 20px;
  padding-top: 50px;
`;

const HeaderContent = styled.div`
  background-color: rgba(0,0,0, 0.25);
  min-height: 100vh;
`;

const HeaderContainer = styled.div`
  min-height: 100vh;
  background-image: url(${mainBackground});
  background-attachment: fixed;
  background-color: ${BLACK_COLOR};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 768px) {
    min-height: 100vh;
    padding-top: 30px;
  }
`;

const ContactUsFormContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  position: relative;
  top: 256px;
  padding: 40px;
  background-color: ${WHITE_COLOR};
  box-shadow: 2px 10px 28px rgba(75, 0, 129, 0.12);
`;

const IContent = styled.i`
  text-align: end;
  color: ${PRIMARY_COLOR};
`;

const SocialMediaContainer = styled.div`

`;

const AContent = styled.a`
  margin: 0 4px;
  font-size: 25px;
  color: ${PRIMARY_COLOR};
`;

const ContactUsSubtitle = styled.p`
  font-family: Quicksand;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  color: ${PRIMARY_COLOR};
`;

const CargameContactInfo = styled.div`
  margin-top: 52px;
  padding-left: 44px;

  @media (max-width: 768px) {
    margin-top: 0;
    padding-left: 0;
  }
`;

const ContactInfoTitle = styled.p`
  margin-bottom: 2px;
  font-family: Quicksand;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.03em;
  color: ${PRIMARY_COLOR};
`;

const ContactInfoP = styled.p`
  font-family: Quicksand;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: ${THIRD_TEXT_COLOR};
`;

const ExtraContactInfo = styled.div`
  width: 100%;
  height: 300px;
  background-color: ${WHITE_COLOR};
`;

const ContactUs = () => {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);
  
  return (
    <ContactUsContainer id="contact-us">
      <HeaderContainer>
        <Fade>
          <HeaderContent>
            <ContactUsFormContainer>
              <Row>
                <Col className="form-container" xs={24} md={14}>
                  <ContactUsContent>
                    <ContactUsSubtitle>Dejanos tu mensaje</ContactUsSubtitle>
                    <ContactForm />
                  </ContactUsContent>
                </Col>
                <Col className="info-col" xs={24} md={10}>
                  <ContactUsContent>
                    <CargameContactInfo>
                      <Row>
                        <Col xs={24}>
                          <ContactInfoTitle>
                            Telefono
                        </ContactInfoTitle>
                          <ContactInfoP>
                            +57 317 528-4083
                        </ContactInfoP>
                        </Col>
                        <Col className="descrip-content-col" xs={24}>
                          <ContactInfoTitle>
                            Correo electrónico
                        </ContactInfoTitle>
                          <ContactInfoP>
                            info@cargame.com.co
                        </ContactInfoP>
                        </Col>
                      </Row>
                    </CargameContactInfo>
                    <SocialMediaContainer>
                      <AContent href="https://www.facebook.com/Cargameapp"><i className={`fab fa-facebook`}></i></AContent>
                      <AContent href="https://instagram.com/cargameapp"><i className={`fab fa-instagram`}></i></AContent>
                      <AContent href="https://www.youtube.com/channel/UCAEtD9ycbtx-PLudy2QvgoQ"><i className={`fab fa-youtube`}></i></AContent>
                    </SocialMediaContainer>
                  </ContactUsContent>
                </Col>
              </Row>
            </ContactUsFormContainer>
          </HeaderContent>
        </Fade>
      </HeaderContainer>
      <ExtraContactInfo />
      <FooterButtons />
    </ContactUsContainer>
  );
};

export default ContactUs;