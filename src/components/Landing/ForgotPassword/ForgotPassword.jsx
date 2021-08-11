import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Row, Col, notification } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { forgotPasswordNotifier } from '../../../redux/sagas/auth/actions/ForgotPassword';
import './forgotPassword.scss';

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 24,
      offset: 0,
    },
  },
};

const showPasswordError = () => {
  notification['warning']({
    message: 'Campo incompleto',
    description: 'Por favor completa los campos'
  });
};

const ForgotPassword = ({ forgotPassword, auth }) => {
  const [passwordError, setpasswordError] = useState(false);
  const [form] = Form.useForm();
  const history = useHistory();

  const onFinish = (values) => {
    if (values.email) {
      setpasswordError(false);
      forgotPassword(values.email);
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
    <Row className="forgot-password-container">
      <Col xs={24}>
        <p className="subtitle-content">¿Ólvidaste tu contraseña?</p>
        <p>Se te enviará un correo con la información necesaria para cambiar tu contraseña</p>
        {passwordError && showPasswordError()}
        <div className="form-container">
          <Form
            form={form}
            name="forgot_password"
            onFinish={onFinish}
            scrollToFirstError
          >
            <Form.Item
              name="email"
              rules={[
                {
                  type: 'email',
                  message: 'Por favor ingresa tu correo electrónico valido',
                },
                {
                  required: true,
                  message: 'Por favor ingresa tu correo electrónico!',
                },
              ]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="correo electrónico" />
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Enviar
              </Button>
            </Form.Item>
            <Form.Item>
              <Link key="forgot" to="/log-in">
                ¿Quieres iniciar sesión?
              </Link>
            </Form.Item>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

ForgotPassword.propTypes = {
  forgotPassword: func.isRequired,
};

ForgotPassword.defaultProps = {};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {
  forgotPassword: forgotPasswordNotifier,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ForgotPassword);
