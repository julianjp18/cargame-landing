import React from "react";
import { Col, Row } from "antd";
import NoPhotoImage from "../../assets/images/new-version/profile-picture.webp";
import { PRIMARY_COLOR } from "../../utils/colors";
import styled from "styled-components";
import { Link } from "react-router-dom";

const UserInfoContainer = styled.div`
  margin: 0 150px;
  padding: 20px;
  border: 1px solid #f3f3f3;
  border-radius: 10px;
  box-shadow: 0px 0px 10px -2px #000000;

  @media (max-width: 768px) {
    margin: 20px 80px;
  }
`;

const ProfileContainer = styled.div`

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }>
`;

const ProfileImage = styled.img`
  max-width: 200px;
  border-radius: 50%;
`;

const InfoContainer = styled.div``;

const InfoTitle = styled.p`
  margin-bottom: 1px;
  color: ${PRIMARY_COLOR};
  font-weight: 600;
`;

const InfoText = styled.p``;

const ProfileInfo = ({ data }) => {
  return (
    <Row>
      <Col xs={24}>
        <UserInfoContainer className="ant-row">
          <Col xs={24} md={12}>
            <ProfileContainer>
              <ProfileImage
                src={data.profilePicture ?? NoPhotoImage}
                alt="profile"
              />
            </ProfileContainer>
          </Col>
          <Col xs={24} md={12}>
            <Row>
              <Col xs={24} md={12}>
                <InfoContainer>
                  <InfoTitle>Nombre:</InfoTitle>
                  <InfoText>{data.name ?? "-"}</InfoText>
                </InfoContainer>
              </Col>
              <Col xs={24} md={12}>
                <InfoContainer>
                  <InfoTitle>Identificación:</InfoTitle>
                  <InfoText>{data.numberId ?? "-"}</InfoText>
                </InfoContainer>
              </Col>
              <Col xs={24} md={12}>
                <InfoContainer>
                  <InfoTitle>Celular:</InfoTitle>
                  <InfoText>{data.phone ?? "-"}</InfoText>
                </InfoContainer>
              </Col>
              <Col xs={24} md={12}>
                <InfoContainer>
                  <InfoTitle>Ciudad:</InfoTitle>
                  <InfoText>{data.city ?? "-"}</InfoText>
                </InfoContainer>
              </Col>
              <Col xs={24}>
                <InfoContainer>
                  <InfoTitle>Correo electrónico:</InfoTitle>
                  <InfoText>{data.email ?? "-"}</InfoText>
                </InfoContainer>
              </Col>
              <Col xs={24}>
                <InfoContainer>
                  <InfoText>
                    <Link key="restore" to="/restore-password">
                      Cambiar contraseña
                    </Link>
                  </InfoText>
                </InfoContainer>
              </Col>
            </Row>
          </Col>
        </UserInfoContainer>
      </Col>
    </Row>
  );
};

export default ProfileInfo;
