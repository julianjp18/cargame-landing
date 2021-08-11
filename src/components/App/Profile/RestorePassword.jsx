import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Row, Col, notification } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import './restorePassword.scss';
import { restorePasswordNotifier } from '../../../redux/sagas/auth/actions/RestorePassword';

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

const RestorePassword = ({ restorePassword, auth }) => {
  const [passwordError, setpasswordError] = useState(false);
  const [form] = Form.useForm();
  const history = useHistory();

  const onFinish = (values) => {
    if (values.oldPassword && (values.newPassword === values.confirmPassword)) {
      setpasswordError(false);
      restorePassword(values);
    } else setpasswordError(true);
  };

  useEffect(() => {
    if (auth && auth.role) {
    }
  }, [auth]);

  return (
    <Row className="restore-password-container">
      <Col xs={24}>
        <p className="subtitle-content">Cambiar contraseña</p>
        <p>Por favor completa los campos para cambiar la contraseña</p>
        {passwordError && showPasswordError()}
        <div className="form-container">
          <Form
            form={form}
            name="forgot_password"
            onFinish={onFinish}
            scrollToFirstError
          >
            <Form.Item
              name="oldPassword"
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
                placeholder="Actual contraseña"
              />
            </Form.Item>
            <Form.Item
              name="nwePassword"
              rules={[
                {
                  required: true,
                  message: 'Por favor ingresa la nueva contraseña!',
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Nueva contraseña"
              />
            </Form.Item>
            <Form.Item
              name="confirmPassword"
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
                placeholder="Confirma contraseña"
              />
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Actualizar
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

RestorePassword.propTypes = {
  forgotPassword: func.isRequired,
};

RestorePassword.defaultProps = {};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {
  restorePassword: restorePasswordNotifier,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RestorePassword);
