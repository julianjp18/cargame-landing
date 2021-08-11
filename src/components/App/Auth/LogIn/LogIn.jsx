import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Row, Col, notification } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './login.scss';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

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

const LogIn = ({ fromDriverView, logIn, auth }) => {
  const [passwordError, setpasswordError] = useState(false);
  const [form] = Form.useForm();
  const history = useHistory();

  const onFinish = (values) => {
    if (values.username && values.password) {
      setpasswordError(false);
      logIn(values);
    } else setpasswordError(true);
  };

  useEffect(() => {
    if (auth && auth.role) {
      if (auth.role === 'admin') {
        history.push('/dashboard');
      } else if (auth.role === 'driver') {
        history.push('/dashboard-driver');
      } else if (auth.role === 'customer') {
        history.push('/dashboard-customer');
      }
    }
  }, [auth]);

  return (
    <Row className="log-in-container">
      <Col xs={24}>
        {fromDriverView ? (
          <p className="subtitle-content">
            ¿Te falta completar información?
          </p>
        ) : (
          <p className="subtitle-content">Iniciar sesión</p>
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
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Iniciar sesión
            </Button>
          </Form.Item>
          <Form.Item>
            <Link key="forgot" to="/forgot-password">
              ¿Olvidaste tu contraseña?
            </Link>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default LogIn;
