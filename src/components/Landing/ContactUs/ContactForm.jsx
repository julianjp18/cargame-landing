import { Form, Input, Button } from 'antd';
import React from 'react';
import styled from 'styled-components';
import Title from '../Title/Title';

const ContactUsContainer = styled.div`
`;

const ContactUsContent = styled.div`
`;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const ContactForm = () => {

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Form className="form-content" {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item
        name={['user', 'name']}
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
        name={['user', 'email']}
        label="Correo electrónico"
        rules={[
          {
            type: 'email',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'title']}
        label="Asunto"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'message']} label="Mensaje">
        <Input.TextArea rows={6} />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol }}>
        <Button type="primary" htmlType="submit">
          Enviar
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ContactForm;

