import React, { useEffect, useState } from "react";

import { Button, Col, Image, Input, Popconfirm, Row, Switch } from "antd";
import { connect } from "react-redux";
import styled from "styled-components";

import { firebaseStorage } from "../../../utils/firebase";
import { PRIMARY_COLOR } from "../../../utils/colors";
import ProfileInfo from "../../Profile/ProfileInfo";
import RegisterVehicleList from "../../Driver/RegisterVehicle/RegisterVehicleList";
import { requestChangesNotifier, verifyInformationNotifier } from "../../../../redux/sagas/customer/actions/customer";
import { openNotification } from "../../../../redux/helpers/extras";

const Title = styled.p`
  margin-top: 30px;
  margin-bottom: 30px;
  padding-left: 20px;
  color: ${PRIMARY_COLOR};
  font-size: 30px;
  font-weight: 600;
  line-height: 30px;
  text-align: center;
`;

const CustomerContainer = styled.div`
  min-height: 94vh;
  padding: 0 20px;
`;

const VehicleListContainer = styled.div`
  margin: 0 20px 40px 20px;
`;

const ViewFirstVehicleContainer = styled.div``;

const MainRow = styled.div`
  margin-top: 40px;
`;

const TextAreaContainer= styled.div`
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  margin-bottom: 2px;
`;

const SwitchContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 15px 15px;
  grid-template-areas: ". ." ". ." ". .";
  justify-content: start;
  align-content: start;
  justify-items: start;
  margin: 30px auto;
`;

const SwitchItem = styled.div`

`;

const { TextArea } = Input;

const deleteSpaces = (path) => path.replace(" ", '');

const DriverProfile = ({ driver, requestChanges, verifyInformation }) => {
  const [drivenLicenseBack, setDrivenLicenseBack] = useState("");
  const [drivenLicenseFront, setDrivenLicenseFront] = useState("");
  const [comments, setComments] = useState("");
  const [propertyCardFront, setPropertyCardFront] = useState("");
  const [propertyCardBack, setPropertyCardBack] = useState("");
  const [driverPhoto, setDriverPhoto] = useState("");
  const [identificationFront, setIdentificationFront] = useState("");
  const [identificationBack, setIdentificationBack] = useState("");
  const [mecanictecnic, setMecanictecnic] = useState("");
  const [soat, setSoat] = useState("");
  const [driverPhotoChecked, setDriverPhotoChecked] = useState(false);
  const [drivenLicenseChecked, setDrivenLicenseChecked] = useState(false);
  const [propertyCardChecked, setPropertyCardChecked] = useState(false);
  const [identificationChecked, setIdentificationChecked] = useState(false);
  const [mecanictecnicChecked, setMecanictecnicChecked] = useState(false);
  const [soatChecked, setSoatChecked] = useState(false);

  useEffect(() => {
    if (driver.drivenLicenseFront_document)
      assignImage(
        showImage(driver.drivenLicenseFront_document.path),
        setDrivenLicenseFront
      );
    if (driver.drivenLicenseBack_document)
      assignImage(
        showImage(driver.drivenLicenseBack_document.path),
        setDrivenLicenseBack
      );
    if (driver.propertyCardFront_document)
      assignImage(
        showImage(driver.propertyCardFront_document.path),
        setPropertyCardFront
      );
    if (driver.propertyCardBack_document)
      assignImage(
        showImage(driver.propertyCardBack_document.path),
        setPropertyCardBack
      );
    if (driver.driverPhoto_document)
      assignImage(
        showImage(driver.driverPhoto_document.path),
        setDriverPhoto
      );
    if (driver.identificationFront_document)
      assignImage(
        showImage(driver.identificationFront_document.path),
        setIdentificationFront
      );
    if (driver.identificationBack_document)
      assignImage(
        showImage(driver.identificationBack_document.path),
        setIdentificationBack
      );
    if (driver.mecanictecnic_document)
      assignImage(
        showImage(driver.mecanictecnic_document.path),
        setMecanictecnic
      );
    if (driver.soat_document)
      assignImage(
        showImage(driver.soat_document.path),
        setSoat
      ); 
  }, []);

  const commentsOnChange = (value) => {
    setComments(value.target.value);
  };

  const getImage = async (imageUrl) => {
    try {
      return await firebaseStorage.ref(imageUrl).getDownloadURL();
    } catch (err) {
      console.log(err);
    }
  };

  const showImage = async (imageUrl) => {
    return await getImage(deleteSpaces(imageUrl)).then((res) => res);
  };

  const assignImage = (showImage, setImage) => {
    showImage.then((res) => setImage(res));
  };

  const verifyInformationOnClick = () => {
    verifyInformation(driver.key);
  };

  const requestChangesOnClick = () => {
    if (comments) {
      if (
        drivenLicenseChecked ||
        driverPhotoChecked ||
        identificationChecked ||
        mecanictecnicChecked ||
        propertyCardChecked ||
        soatChecked
      ) {
        const documents = {
          drivenLicenseChecked,
          driverPhotoChecked,
          identificationChecked,
          mecanictecnicChecked,
          propertyCardChecked,
          soatChecked,
        };
  
        const data = {
          comments,
          documents,
          id: driver.key,
        };

        requestChanges(data);
      } else {
        openNotification('warning', '¡Selecciona almenos un documento a reenviar!', '');
      }
      
    } else {
      openNotification('warning', '¡Por favor cuentale al transportador porqué no aceptas ciertos documentos!', '');
    }
  };

  return (
    <MainRow className="ant-row">
      <Title>Información de {driver.name}</Title>
      <Col xs={24}>
        <CustomerContainer>
          <ProfileInfo data={driver} />
          <ViewFirstVehicleContainer>
            <Row>
              <Col xs={24}>
                <Title>Documentos del conductor</Title>
              </Col>
              {driverPhoto && (
                <Col xs={24} md={8}>
                  <Subtitle>Selfie conductor</Subtitle>
                  <Image width={200} src={driverPhoto} />
                </Col>
              )}
              {identificationFront && (
                <Col xs={24} md={8}>
                  <Subtitle>Identicación parte frontal</Subtitle>
                  <Image width={200} src={identificationFront} />
                </Col>
              )}
              {identificationBack && (
                <Col xs={24} md={8}>
                  <Subtitle>Identificación parte trasera</Subtitle>
                  <Image width={200} src={identificationBack} />
                </Col>
              )}
              {drivenLicenseFront && (
                <Col xs={24} md={8}>
                  <Subtitle>Licencia de conducción parte frontal</Subtitle>
                  <Image width={200} src={drivenLicenseFront} />
                </Col>
              )}
              {drivenLicenseBack && (
                <Col xs={24} md={8}>
                  <Subtitle>Licencia de conducción parte trasera</Subtitle>
                  <Image width={200} src={drivenLicenseBack} />
                </Col>
              )}
              {propertyCardFront && (
                <Col xs={24} md={8}>
                  <Subtitle>Tarjeta de propiedad parte frontal</Subtitle>
                  <Image width={200} src={propertyCardFront} />
                </Col>
              )}
              {propertyCardBack && (
                <Col xs={24} md={8}>
                  <Subtitle>Tarjeta de propiedad parte trasera</Subtitle>
                  <Image width={200} src={propertyCardBack} />
                </Col>
              )}
              {mecanictecnic && (
                <Col xs={24} md={8}>
                  <Subtitle>Técnico mecánica</Subtitle>
                  <Image width={200} src={mecanictecnic} />
                </Col>
              )}
              {soat && (
                <Col xs={24} md={8}>
                  <Subtitle>Soat</Subtitle>
                  <Image width={200} src={soat} />
                </Col>
              )}
              <Col xs={24} md={{ span: 8, offset: 8}}>
                {driver.isInfoCompleted && !driver.isVerified && (
                  <Row>
                    <Col xs={24}>
                      <TextAreaContainer>
                        <TextArea
                          onChange={commentsOnChange}
                          placeholder="Escribe tus observaciones aquí"
                          rows={4}
                          value={comments}
                        />
                      </TextAreaContainer>
                      <SwitchContainer>
                        <SwitchItem>
                          <p>Documentos a reenviar:</p>
                        </SwitchItem>
                        <SwitchItem></SwitchItem>
                        <SwitchItem>
                          <Switch checkedChildren="Selfie conductor" unCheckedChildren="Selfie conductor" onChange={(checked) => setDriverPhotoChecked(checked)} />
                        </SwitchItem>
                        <SwitchItem>
                          <Switch checkedChildren="Identificación" unCheckedChildren="Identificación" onChange={(checked) => setIdentificationChecked(checked)} />
                        </SwitchItem>
                        <SwitchItem>
                          <Switch checkedChildren="Licencia de conducción" unCheckedChildren="Licencia de conducción" onChange={(checked) => setDrivenLicenseChecked(checked)} />
                        </SwitchItem>
                        <SwitchItem>
                          <Switch checkedChildren="Tarjeta de propiedad" unCheckedChildren="Tarjeta de propiedad" onChange={(checked) => setPropertyCardChecked(checked)} />
                        </SwitchItem>
                        <SwitchItem>
                          <Switch checkedChildren="Técnico mecánica" unCheckedChildren="Técnico mecánica" onChange={(checked) => setMecanictecnicChecked(checked)} />
                        </SwitchItem>
                        <SwitchItem>
                          <Switch checkedChildren="SOAT" unCheckedChildren="SOAT" onChange={(checked) => setSoatChecked(checked)} />
                        </SwitchItem>
                      </SwitchContainer>
                    </Col>
                    <Col xs={24} md={12}>
                      <Popconfirm
                        placement="top"
                        title="¿Estas seguro de que deseas aceptar toda la documentación?"
                        onConfirm={verifyInformationOnClick}
                        okText="Si"
                        cancelText="No"
                      >
                        <Button type="primary" className="verify-information-button">
                          Información verificada
                        </Button>
                      </Popconfirm>
                    </Col>
                    <Col xs={24} md={12}>
                      <Button type="primary" className="request-changes-button" danger onClick={requestChangesOnClick}>
                        Requiere cambios
                      </Button>
                    </Col>
                  </Row>
                )}
              </Col>
            </Row>  
          </ViewFirstVehicleContainer>
          <VehicleListContainer>
            <RegisterVehicleList data={driver} />
          </VehicleListContainer>
        </CustomerContainer>
      </Col>
    </MainRow>
  );
};

DriverProfile.propTypes = {};

DriverProfile.defaultProps = {};

const mapStateToProps = (state) => ({
  driver: state.customer.driverProfile,
});

const mapDispatchToProps = {
  verifyInformation: verifyInformationNotifier,
  requestChanges: requestChangesNotifier,
};

export default connect(mapStateToProps, mapDispatchToProps)(DriverProfile);
