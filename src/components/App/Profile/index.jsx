import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'antd';
import NoPhotoImage from '../../assets/images/new-version/profile-picture.webp';
import { PRIMARY_COLOR, WHITE_COLOR } from '../../utils/colors';
import styled from 'styled-components';

const Title = styled.p`
  margin-top: 20px;
  color: ${PRIMARY_COLOR};
  font-size: 30px;
  font-weight: 600;
  line-height: 30px;
`;

const UserInfoContainer = styled.div`
  margin: 0 150px;
  padding: 20px;
  border: 1px solid #f3f3f3;
  border-radius: 10px;
  box-shadow: 0px 0px 10px -2px #000000;
`;

const ProfileContainer = styled.div`

`;

const ProfileImage = styled.img`
  max-width: 200px;
  border-radius: 50%;
`;

const InfoContainer = styled.div`

`;

const InfoTitle = styled.p`
  margin-bottom: 1px;
  color: ${PRIMARY_COLOR};
  font-weight: 600;
`;

const InfoText = styled.p`

`;

const ExtraInfoContainer = styled.div`
  width: 100%;
  height: 300px;
  background-color: ${WHITE_COLOR};
`;

const Profile = ({ auth, isFromOtherView }) => {
  useEffect(() => {

  }, []);

  return (
    <Row>
      <Col xs={24}>
        <Row>
          <Col xs={24}>
            <Title>Mis datos personales</Title>
          </Col>
        </Row>
        <UserInfoContainer className="ant-row">
          <Col xs={12}>
            <ProfileContainer>
              <ProfileImage src={auth.profilePicture ?? NoPhotoImage} alt="profile" />
            </ProfileContainer>
          </Col>
          <Col xs={12}>
            <Row>
              <Col xs={24} md={12}>
                <InfoContainer>
                  <InfoTitle>
                    Nombre:
                    </InfoTitle>
                  <InfoText>
                    {auth.name ?? '-'}
                  </InfoText>
                </InfoContainer>
              </Col>
              <Col xs={24} md={12}>
                <InfoContainer>
                  <InfoTitle>
                    Identificación:
                    </InfoTitle>
                  <InfoText>
                    {auth.numberId ?? '-'}
                  </InfoText>
                </InfoContainer>
              </Col>
              <Col xs={24} md={12}>
                <InfoContainer>
                  <InfoTitle>
                    Celular:
                    </InfoTitle>
                  <InfoText>
                    {auth.phone ?? '-'}
                  </InfoText>
                </InfoContainer>
              </Col>
              <Col xs={24} md={12}>
                <InfoContainer>
                  <InfoTitle>
                    Ciudad:
                    </InfoTitle>
                  <InfoText>
                    {auth.city ?? '-'}
                  </InfoText>
                </InfoContainer>
              </Col>
              <Col xs={24}>
                <InfoContainer>
                  <InfoTitle>
                    Correo electrónico:
                    </InfoTitle>
                  <InfoText>
                    {auth.email ?? '-'}
                  </InfoText>
                </InfoContainer>
              </Col>
            </Row>
          </Col>
        </UserInfoContainer>
      </Col>
      {!isFromOtherView && (
        <ExtraInfoContainer />
      )}
    </Row>
  );
}

Profile.propTypes = {};

Profile.defaultProps = {};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);