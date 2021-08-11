import React from 'react';
import { Col, DatePicker, Form, Row, Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { PRIMARY_COLOR } from '../../../utils/colors';
import { disabledDate, disabledYearDate, validationFormatOnChange } from '../../../utils/validations';

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

const RegisterVehicle = ({
  hideMecanictecnic,
  onChangeExpireMecanictecnic,
  onChangeExpireSOAT,
  onChangeYearModelVehicle,
}) => {
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  };

  return (
    <Row>
      <ColRow className='ant-col ant-col-xs-24'>
        <Title>Registra tu vehiculo</Title>
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
        <Row>
          <Col xs={20}>
            <Form.Item
              name="yearModelVehicle"
              label="Año modelo de vehiculo"
              rules={[
                {
                  required: true,
                  message: 'Fecha de modelo de vehiculo requerida!',
                },
              ]}
            >
              <DatePicker onChange={onChangeYearModelVehicle} disabledDate={disabledYearDate} format="YYYY" picker="year" placeholder="YYYY" required size="large" />
            </Form.Item>
          </Col>
        </Row>
        {!hideMecanictecnic && (
          <Row>
            <Col xs={20}>
              <Form.Item
                name="expireMecanictecnic"
                label="Fecha de expiración técnico mecánica"
                rules={[
                  {
                    required: true,
                    message: 'Fecha de expiración revisión técnico mecánica requerida!',
                  },
                ]}
              >
                <DatePicker onChange={onChangeExpireMecanictecnic} disabledDate={disabledDate} format="DD-MM-YYYY"  placeholder="DD-MM-YYYY" required size="large" />
              </Form.Item>
            </Col>
          </Row>
        )}
        
        <Row>
          <Col xs={20}>
            <Form.Item
              name="expireSoat"
              label="Fecha de expiración SOAT"
              rules={[
                {
                  required: true,
                  message: 'Fecha de expiración SOAT requerida!',
                },
              ]}
            >
              <DatePicker onChange={onChangeExpireSOAT} disabledDate={disabledDate} format="DD-MM-YYYY" placeholder="DD-MM-YYYY" required size="large" />
            </Form.Item>
          </Col>
        </Row>
      </ColRow>
    </Row>
  );
};

export default RegisterVehicle;
