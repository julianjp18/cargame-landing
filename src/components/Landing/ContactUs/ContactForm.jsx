import { Form, Input, notification } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { PRIMARY_COLOR, SECOND_COLOR, WHITE_COLOR } from '../../utils/colors';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 24,
  },
};

const validateMessages = {
  required: '${label} es requerido!',
  types: {
    email: '${label} no es un correo electrónico válido!',
    number: '${label} no es un número válido!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const openNotificationWithIcon = (type, title, message) => {
  notification[type]({
    message: title,
    description:
      message,
  });
};

const ButtonContainer = styled.button`
  background: linear-gradient(55.05deg, ${SECOND_COLOR} 0%, ${PRIMARY_COLOR} 100%);
  border-radius: 20px;
  width: 100%;
  color: ${WHITE_COLOR};
`;

const ContactForm = () => {
  const [successMessage, setSuccessMessage] = useState();
  const [errorMessage, setErrorMessage] = useState();

  const onFinish = (values) => {
    if (values) {
      axios.post(` https://cargame-server.herokuapp.com/send-email/`, {
        ...values,
      })
        .then(res => {
          setSuccessMessage(res.message);
        }).catch((err) => {
          setErrorMessage(err.message);
        });
    }
  };

  return (
    <Form
      className="form-content"
      {...layout}
      name="nest-messages"
      onFinish={onFinish} validateMessages={validateMessages}
    >
      {successMessage && openNotificationWithIcon('success', 'Enviado correctamente', successMessage)}
      {errorMessage && openNotificationWithIcon('error', '¡UPS, ocurrió un problema!', errorMessage)}
      <Form.Item
        name={'name'}
        label="Nombre completo"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={'email'}
        label="Correo electrónico"
        rules={[
          {
            type: 'email',
          },
          {
            required: true,
          }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={'subject'}
        label="Asunto"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={'message'}
        label="Mensaje"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input.TextArea rows={8} />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol }}>
        <ButtonContainer
          className="ant-btn"
          type="primary"
          htmlType="submit"
        >
          Enviar
        </ButtonContainer>
      </Form.Item>
    </Form>
  );
};

export default ContactForm;

