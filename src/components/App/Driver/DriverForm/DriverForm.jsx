import React, { useState } from 'react';
import { Col, DatePicker, Form, message, Row, Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { PRIMARY_COLOR, SECOND_COLOR, WHITE_COLOR } from '../../../utils/colors';
import RegisterVehicle from '../RegisterVehicle/RegisterVehicle';
import { validationFormatOnChange } from '../../../utils/validations';
import { func, object } from 'prop-types';

const Title = styled.p`
  margin-bottom: 0;
  text-align: start;
  font-family: Ruda;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 78px;
  color: ${PRIMARY_COLOR};
  text-align: center;
`;

const ColRow = styled.div`
  margin: auto;
`;

const SecondButtonContainer = styled.button`
  width: 200px;
  height: 34px;  
  display: inline-block;
  padding: 4px 28px 10px 28px;
  margin: 14px 10px 0 0;
  font-family: Quicksand;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: ${WHITE_COLOR};
  border: 1px solid ${WHITE_COLOR};
  border-radius: 50px;
  background: linear-gradient(55.05deg, ${SECOND_COLOR} 0%, ${PRIMARY_COLOR} 100%);
  -webkit-transition: 0.3s;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background: linear-gradient(55.05deg, ${WHITE_COLOR} 0%, ${WHITE_COLOR} 100%);
    color: ${PRIMARY_COLOR};
    border: 1px solid ${PRIMARY_COLOR};
    cursor: pointer;
  }
`;

const formItemLayout = {
  labelCol: {
    span: 11,
  },
  wrapperCol: {
    span: 14,
  },
};

const DriverForm = ({ uploadDriverDocs, auth }) => {
  const [expireLicense, setexpireLicense] = useState();
  const [expirePropertyCard, setexpirePropertyCard] = useState();

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  };

  const onFinish = (values) => {
    const {
      driverPhoto,
      identificationFront,
      identificationBack,
      drivenLicenseFront,
      drivenLicenseBack,
      propertyCardFront,
      propertyCardBack,
      mecanictecnic,
      soat,
    } = values;

    if (
      expirePropertyCard &&
      expireLicense &&
      drivenLicenseFront &&
      propertyCardFront &&
      driverPhoto &&
      identificationFront &&
      identificationBack &&
      drivenLicenseBack &&
      propertyCardBack &&
      mecanictecnic &&
      soat
    ) {
      console.log('values form', {
        ...values,
        expirePropertyCard,
        expireLicense,
        id: auth.id,
      });

      uploadDriverDocs({
        ...values,
        expirePropertyCard,
        expireLicense,
        id: auth.id,
      });
    } else {
      message.error('Por favor llena todos los campos');
    }
  };

  const onChangeExpireLicense = (date, dateString) => {
    setexpireLicense(dateString);
  };

  const onChangeExpirePropertyCard = (date, dateString) => {
    setexpirePropertyCard(dateString);
  };

  return (
    <Row>
      <ColRow className='ant-col ant-col-xs-14'>
        <Title>Información necesaria para activar la cuenta</Title>
        <Form
          name="complete-info-form"
          onFinish={onFinish}
          {...formItemLayout}
        >
          <Row>
            <Col xs={24} md={12}>
              <Form.Item
                label="Foto (Selfie)"
                rules={[
                  {
                    required: true,
                    message: 'Foto (Selfie) requerida!',
                  },
                ]}
              >
                <Form.Item
                  accept="image/png, image/jpeg, document/pdf"
                  label="Foto"
                  name="driverPhoto"
                  valuePropName="fileList"
                  getValueFromEvent={normFile}
                  noStyle
                  required
                >
                  <Upload.Dragger name="files" beforeUpload={validationFormatOnChange}>
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Selfie con buena iluminación</p>
                    <p className="ant-upload-hint"></p>
                  </Upload.Dragger>
                </Form.Item>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col xs={24} md={12}>
              <Form.Item
                label="Identificación (CC, CE)"
                rules={[
                  {
                    required: true,
                    message: 'Identificación requerida!',
                  },
                ]}
              >
                <Form.Item
                  accept="image/png, image/jpeg, document/pdf"
                  label="Identificación"
                  name="identificationFront"
                  valuePropName="fileList"
                  getValueFromEvent={normFile}
                  noStyle
                  required
                >
                  <Upload.Dragger name="files" beforeUpload={validationFormatOnChange}>
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Parte frontal de identificación</p>
                    <p className="ant-upload-hint"></p>
                  </Upload.Dragger>
                </Form.Item>
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label=""
                rules={[
                  {
                    required: true,
                    message: 'Parte trasera de identificación requerida!',
                  },
                ]}
              >
                <Form.Item
                  accept="image/png, image/jpeg, document/pdf"
                  label="Identificación"
                  name="identificationBack"
                  valuePropName="fileList"
                  getValueFromEvent={normFile}
                  noStyle
                  required
                >
                  <Upload.Dragger name="files" beforeUpload={validationFormatOnChange}>
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Parte de atrás de identificación</p>
                    <p className="ant-upload-hint"></p>
                  </Upload.Dragger>
                </Form.Item>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col xs={24} md={12}>
              <Form.Item
                label="Licencia de conducción"
                rules={[
                  {
                    required: true,
                    message: 'Parte frontal de licencia de conducción requerida!',
                  },
                ]}
              >
                <Form.Item
                  accept="image/png, image/jpeg, document/pdf"
                  label="Licencia de conducción"
                  name="drivenLicenseFront"
                  valuePropName="fileList"
                  getValueFromEvent={normFile}
                  noStyle
                  required
                >
                  <Upload.Dragger name="files" beforeUpload={validationFormatOnChange}>
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Parte frontal de licencia</p>
                    <p className="ant-upload-hint"></p>
                  </Upload.Dragger>
                </Form.Item>
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label=""
                rules={[
                  {
                    required: true,
                    message: 'Parte trasera de licencia de conducción requerida!',
                  },
                ]}
              >
                <Form.Item
                  accept="image/png, image/jpeg, document/pdf"
                  label="Licencia de conducción"
                  name="drivenLicenseBack"
                  valuePropName="fileList"
                  getValueFromEvent={normFile}
                  noStyle
                  required
                >
                  <Upload.Dragger name="files" beforeUpload={validationFormatOnChange}>
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Parte de atrás de licencia</p>
                    <p className="ant-upload-hint"></p>
                  </Upload.Dragger>
                </Form.Item>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col xs={20}>
              <Form.Item
                name="expireLicense"
                label="Fecha de expiración licencia de conducción"
                rules={[
                  {
                    required: true,
                    message: 'Fecha de expiración de licencia requerida!',
                  },
                ]}
              >
                <DatePicker onChange={onChangeExpireLicense} format="DD-MM-YYYY" required />
              </Form.Item>
            </Col>
          </Row>
          <RegisterVehicle onChangeExpirePropertyCard={onChangeExpirePropertyCard} />
          <Form.Item
            wrapperCol={{
              span: 18,
            }}
          >
            <SecondButtonContainer className="ant-btn" type="primary" htmlType="submit">
              Enviar
            </SecondButtonContainer>
          </Form.Item>
        </Form>
      </ColRow>
    </Row>
  );
};

DriverForm.propTypes = {
  uploadDriverDocs: func.isRequired,
  auth: object.isRequired,
};

DriverForm.defaultProps = {};

export default DriverForm;
