import React from 'react';
import { Col, Form, Row, Tooltip, Upload } from 'antd';
import { InboxOutlined, QuestionCircleFilled } from '@ant-design/icons';
import styled from 'styled-components';
import { PRIMARY_COLOR, SECOND_COLOR, WHITE_COLOR } from '../../../utils/colors';
import { validationFormatOnChange } from '../../../utils/validations';
import { func, object } from 'prop-types';

const ColRow = styled.div`
  margin: auto;
  margin-top: 70px;

  @media (max-width: 768px) {
    margin: 0 20px;
  }
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

const SelfieTooltip = () => (
  <Tooltip placement="topLeft" title="Sin nada que tape tu rostro ni tus orejas">
    Foto (Selfie) <QuestionCircleFilled />
  </Tooltip>
);

const DriveFormForChanges = ({ auth, documentsForChange, notificationSelected, uploadDocsForChange }) => {
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  };

  const onFinish = (values) => {
    uploadDocsForChange({
      ...values,
      driverId: auth.id,
      notificationSelected,
    });
  };

  return (
    <Row>
      <ColRow className='ant-col ant-col-md-24 ant-col ant-col-md-14'>
        <Form
          name="complete-info-form"
          onFinish={onFinish}
          {...formItemLayout}
        >
          {documentsForChange.driverPhotoChecked && (
            <Row>
              <Col xs={24} md={12}>
                <Form.Item
                  label={<SelfieTooltip />}
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
                      <Upload.Dragger name="files" beforeUpload={validationFormatOnChange} maxCount={1}>
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
          )}
          {documentsForChange.identificationChecked && (
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
                    <Upload.Dragger name="files" beforeUpload={validationFormatOnChange} maxCount={1}>
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
                    <Upload.Dragger name="files" beforeUpload={validationFormatOnChange} maxCount={1}>
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
          )}
          {documentsForChange.drivenLicenseChecked && (
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
                    <Upload.Dragger name="files" beforeUpload={validationFormatOnChange} maxCount={1}>
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
                    <Upload.Dragger name="files" beforeUpload={validationFormatOnChange} maxCount={1}>
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
          )}
          {documentsForChange.propertyCardChecked && (
            <Row>
              <Col xs={24} md={12}>
                <Form.Item
                  label="Tarjeta de propiedad"
                  rules={[
                    {
                      required: true,
                      message: 'Parte frontal de tarjeta de propiedad requerida!',
                    },
                  ]}
                >
                  <Form.Item
                    label="Tarjeta de propiedad"
                    name="propertyCardFront"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                    noStyle
                    required
                    accept="image/png, image/jpeg, document/pdf"
                  >
                    <Upload.Dragger
                      name="files"
                      beforeUpload={validationFormatOnChange}
                      maxCount={1}
                    >
                      <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                      </p>
                      <p className="ant-upload-text">Parte frontal de tarjeta</p>
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
                      message: 'Parte trasera de tarjeta de propiedad requerida!',
                    },
                  ]}
                >
                  <Form.Item
                    accept="image/png, image/jpeg, document/pdf"
                    label="Tarjeta de propiedad"
                    getValueFromEvent={normFile}
                    name="propertyCardBack"
                    noStyle
                    required
                    valuePropName="fileList"
                  >
                    <Upload.Dragger
                      name="files"
                      beforeUpload={validationFormatOnChange}
                      maxCount={1}
                    >
                      <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                      </p>
                      <p className="ant-upload-text">Parte trasera de tarjeta</p>
                      <p className="ant-upload-hint"></p>
                    </Upload.Dragger>
                  </Form.Item>
                </Form.Item>
              </Col>
            </Row>
          )}
          {documentsForChange.soatChecked && (
            <Row>
              <Col xs={24} md={12}>
                <Form.Item
                  label="SOAT"
                  rules={[
                    {
                      required: true,
                      message: 'SOAT requerida!',
                    },
                  ]}
                >
                  <Form.Item
                    accept="image/png, image/jpeg, document/pdf"
                    label="SOAT"
                    name="soat"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                    noStyle
                    required
                  >
                    <Upload.Dragger name="files" beforeUpload={validationFormatOnChange} maxCount={1}>
                      <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                      </p>
                      <p className="ant-upload-text">SOAT</p>
                      <p className="ant-upload-hint"></p>
                    </Upload.Dragger>
                  </Form.Item>
                </Form.Item>
              </Col>
            </Row>
          )}
          {documentsForChange.vehiclePhotoChecked && (
            <Row>
              <Col xs={24} md={12}>
                <Form.Item
                  label="Foto frontal del vehículo"
                  rules={[
                    {
                      required: true,
                      message: 'Foto de vehículo requerida!',
                    },
                  ]}
                >
                  <Form.Item
                    accept="image/png, image/jpeg, document/pdf"
                    label="Foto frontal del vehículo"
                    name="vehiclePhoto"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                    noStyle
                    required
                  >
                    <Upload.Dragger name="files" beforeUpload={validationFormatOnChange} maxCount={1}>
                      <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                      </p>
                      <p className="ant-upload-text">Foto frontal del vehículo</p>
                      <p className="ant-upload-hint"></p>
                    </Upload.Dragger>
                  </Form.Item>
                </Form.Item>
              </Col>
            </Row>
          )}
          {documentsForChange.mecanictecnicChecked && (
            <Row>
              <Col xs={24} md={12}>
                <Form.Item
                  label="Técnico mecánica"
                  rules={[
                    {
                      required: true,
                      message: 'Técnico mecánica requerida!',
                    },
                  ]}
                >
                  <Form.Item
                    accept="image/png, image/jpeg, document/pdf"
                    label="Técnico mecánica"
                    name="mecanictecnic"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                    noStyle
                    required
                  >
                    <Upload.Dragger name="files" beforeUpload={validationFormatOnChange} maxCount={1}>
                      <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                      </p>
                      <p className="ant-upload-text">Técnico mecánica</p>
                      <p className="ant-upload-hint"></p>
                    </Upload.Dragger>
                  </Form.Item>
                </Form.Item>
              </Col>
            </Row>
          )}
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

DriveFormForChanges.propTypes = {
  auth: object.isRequired,
  notificationSelected: object.isRequired,
  uploadDocsForChange: func.isRequired,
};

DriveFormForChanges.defaultProps = {};

export default DriveFormForChanges;
