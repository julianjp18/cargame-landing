import React, { useState } from 'react';
import { Form, Input, Button, Row, Col, notification } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './login.scss';
import { push } from 'connected-react-router';
import { useHistory } from 'react-router';

const formItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 18,
      offset: 6,
    },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 18,
      offset: 6,
    },
  },
};

const showPasswordError = () => {
  notification['warning']({
    message: 'Credenciales incorrectas',
    description: 'Usuario y/o contraseña incorrecta'
  });
};

const LogIn = ({ redirect, fromDriverView, logIn }) => {
  const [passwordError, setpasswordError] = useState(false);
  const [form] = Form.useForm();
  const history = useHistory();

  const onFinish = (values) => {
    if (values.username && values.password) {
      setpasswordError(false);
      logIn(values);
      history.push('/login-success');
    }
    else setpasswordError(true);
  };

  return (
    <Row className="log-in-container">
      <Col xs={24}>
        {fromDriverView ? (
          <p className="subtitle-content">
            ¿Te falta completar información?
          </p>
        ) : (
          <h1>Iniciar sesión</h1>
        )}
        {passwordError && showPasswordError()}
      </Col>
      <Col xs={24}>
        <Form
          {...formItemLayout}
          form={form}
          name="normal_login"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          scrollToFirstError
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Por favor ingresa tu usuario!',
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Usuario" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Por favor ingresa tu contraseña!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Contraseña"
            />
          </Form.Item>
          <Form.Item>
            <a className="login-form-forgot" href="">
              ¿Olvidaste tu contraseña?
            </a>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Iniciar sesión
            </Button>
            {!fromDriverView && (
              <p>
                ó <Button type="link" onClick={() => redirect('sign-up')}> ¡Registrate ahora!</Button>
              </p>
            )}
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default LogIn;
