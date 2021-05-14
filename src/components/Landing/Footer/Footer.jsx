import React from 'react';
import styled from 'styled-components';
import { PRIMARY_COLOR, WHITE_COLOR, SECOND_COLOR, ORANGE_COLOR } from '../../utils/colors';
import { useHistory } from 'react-router';
import { push } from 'connected-react-router';

import CargameLogoImage from '../../assets/images/new-version/logo-footer.png';
import CargameNaranja from '../../assets/images/new-version/cargame-small-naranja.png';
import CargameAzul from '../../assets/images/new-version/cargame-small-azul.png';
import SICImage from '../../assets/images/sic.png';
import { landingNavigation } from '../../utils/extras';

const FooterContainer = styled.div`
  min-height: 40vh;
  padding: 40px 50px;
  background: linear-gradient(55.05deg, ${SECOND_COLOR} 0%, ${PRIMARY_COLOR} 100%);
`;

const MainInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: space-around;
  align-items: flex-start;
`;

const FirstPartContainer = styled.div`
  text-align: start;
`;

const CargameLogo = styled.img`

`;

const TermsAndConditions = styled.p`
  font-family: 'Quicksand', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  margin-top: 20px;
  color: ${WHITE_COLOR};
`;

const ExternalLink = styled.a`
  color: ${WHITE_COLOR};
  text-decoration: underline;

  &:hover {
    color: ${ORANGE_COLOR};
  }
`;

const SocialMediaContainer = styled.div`
  margin-top: 15px;
`;

const SocialMediaText = styled.p`
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${WHITE_COLOR};
`;

const AContent = styled.a`
  margin: 0 4px;
  font-size: 25px;
  color: ${WHITE_COLOR};

  &:hover {
    color: ${ORANGE_COLOR};
  }
`;

const SecondPartContainer = styled.div`
  text-align: end;
`;

const ULContent = styled.ul`
  list-style: none;
`;

const LIContent = styled.li`
  padding-bottom: 10px;
  color: ${WHITE_COLOR};

  &:hover {
    cursor: pointer;
    color: ${SECOND_COLOR};
  }
`;

const HRContent = styled.hr`
  border: 2px solid ${WHITE_COLOR};
`;

const CopyText = styled.p`
  padding-top: 15px;
  margin-bottom: 0;
  text-align: start;
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: ${WHITE_COLOR};
`;

const CargameImagesContainer = styled.div`
`;

const ImageLogo = styled.img`
  margin-right: 10px;
`;

const SicImage = styled.img`
  width: 140px;
`;

const SocialMedia = () => (
  <SocialMediaContainer>
    <SocialMediaText>Siguenos en:</SocialMediaText>
    <AContent href="https://www.facebook.com/Cargameapp"><i className={`fab fa-facebook`}></i></AContent>
    <AContent href="https://instagram.com/cargameapp"><i className={`fab fa-instagram`}></i></AContent>
    <AContent href="https://www.youtube.com/channel/UCAEtD9ycbtx-PLudy2QvgoQ"><i className={`fab fa-youtube`}></i></AContent>
  </SocialMediaContainer>
);

const Footer = () => {
  const history = useHistory();

  const redirectLanding = (path) => {
    const newPath = `/${path}`;
    history.push({ pathname: newPath, state: { component: newPath } });
    push(newPath);
  }

  return (
    <FooterContainer id="footer">
      <MainInfoContainer>
        <FirstPartContainer>
          <CargameLogo src={CargameLogoImage} alt="Cárgame" />
          <TermsAndConditions>
            {`Términos y condiciones `}
            <ExternalLink onClick={() => redirectLanding('terms-and-conditions-user')}>cliente</ExternalLink>
            {` y `}
            <ExternalLink onClick={() => redirectLanding('terms-and-conditions-driver')}>transportador</ExternalLink>
          </TermsAndConditions>
          <SocialMedia />
        </FirstPartContainer>
        <SecondPartContainer>
          <ULContent>
            <LIContent onClick={() => redirectLanding('us')}>
              Nosotros
            </LIContent>
            <LIContent onClick={() => landingNavigation('app')}>
              App
            </LIContent>
            <LIContent onClick={() => redirectLanding('contact-us')}>
              Contáctanos
            </LIContent>
            <LIContent onClick={() => redirectLanding('download-app')}>
              Descarga la app
            </LIContent>
            <LIContent onClick={() => redirectLanding('register-driver')}>
              ¿Deseas ser transportador?
            </LIContent>
            <LIContent onClick={() => redirectLanding('privacy')}>
              Política de privacidad
            </LIContent>
          </ULContent>
          <CargameImagesContainer>
            <ImageLogo src={CargameNaranja} alt='cargame naranja' />
            <ImageLogo src={CargameAzul} alt='cargame azul' />
          </CargameImagesContainer>
          <SicImage src={SICImage} alt='Logo Industria y comercio' />
        </SecondPartContainer>
      </MainInfoContainer>
      <HRContent />
      <CopyText>Copyright © 2021 Cargame SAS. Todos los Derechos Reservados. </CopyText>
    </FooterContainer>
  );
};

export default Footer;
