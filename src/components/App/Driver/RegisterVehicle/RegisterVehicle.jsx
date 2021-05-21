import React, { useState } from 'react';
import { Button, Col, DatePicker, Form, message, Row, Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { PRIMARY_COLOR } from '../../../utils/colors';
import { PERMITTED_FORMATS } from '../../../utils/extras';

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

const formItemLayout = {
  labelCol: {
    span: 11,
  },
  wrapperCol: {
    span: 14,
  },
};

const RegisterVehicle = ({ }) => {
  const [expireLicense, setexpireLicense] = useState();
  const [expirePropertyCard, setexpirePropertyCard] = useState();

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  };

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const onFinish = (values) => {
    const { drivenLicense, propertyCard } = values;
    if (expirePropertyCard && expireLicense && drivenLicense && propertyCard) {
      console.log('values form', {
        ...values,
        expirePropertyCard,
        expireLicense,
      })
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

  const propertyCardOnChange = (file) => {

    if (PERMITTED_FORMATS.includes(file.type)) {
      return false;
    }

    message.error(`${file.name} no es de tipo: .png, .jpg, .pdf`);
  };

  const drivenLicenseOnChange = (file) => {

    if (PERMITTED_FORMATS.includes(file.type)) {
      return false;
    }
    message.error(`${file.name} no es de tipo: .png, .jpg, .pdf`);
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
          <Form.Item label="Licencia de conducción">
            <Form.Item
              accept="image/png, image/jpeg, document/pdf"
              label="Licencia de conducción"
              name="drivenLicense"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              noStyle
              required
            >
              <Upload.Dragger name="files" beforeUpload={drivenLicenseOnChange}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">Selecciona o arrastra el archivo a esta área.</p>
                <p className="ant-upload-hint"></p>
              </Upload.Dragger>
            </Form.Item>
          </Form.Item>
          <Form.Item
            name="expireLicense"
            label="Fecha de expiración licencia de conducción"
            required
          >
            <DatePicker onChange={onChangeExpireLicense} format="DD-MM-YYYY" required />
          </Form.Item>
          <Form.Item label="Tarjeta de propiedad">
            <Form.Item
              label="Tarjeta de propiedad"
              name="propertyCard"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              noStyle
              required
              accept="image/png, image/jpeg, document/pdf"
            >
              <Upload.Dragger
                name="files"
                beforeUpload={propertyCardOnChange}
              >
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">Selecciona o arrastra el archivo a esta área.</p>
                <p className="ant-upload-hint"></p>
              </Upload.Dragger>
            </Form.Item>
          </Form.Item>
          <Form.Item
            name="expirePropertyCard"
            label="Fecha de expiración tarjeta de propiedad"
            required
          >
            <DatePicker onChange={onChangeExpirePropertyCard} format="DD-MM-YYYY" required />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              span: 12,
              offset: 6,
            }}
          >
            <Button type="primary" htmlType="submit">
              Actualizar
        </Button>
          </Form.Item>
        </Form>
      </ColRow>
    </Row>
  );
};

export default RegisterVehicle;
